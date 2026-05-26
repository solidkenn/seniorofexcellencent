# Seniors of Excellence NT — System Architecture

End-to-end overview of the React + Vite site, Vercel hosting, and Google Sheets form backend.

## Whole-system flowchart

```mermaid
flowchart TD

%% ─────────────────────────────────────────
%% LAYER 1 — Developer machine
%% ─────────────────────────────────────────
subgraph DEV["💻 Developer Machine"]
  direction TB
  Editor[Edit source code\nsrc/ public/ assets/]
  DevServer["npm run dev\nlocalhost:5173"]
  BuildCmd["npm run build\n→ dist/"]
  GitCommit["git commit + push\ngit push origin main"]
  Editor --> DevServer
  Editor --> BuildCmd
  BuildCmd --> GitCommit
end

%% ─────────────────────────────────────────
%% LAYER 2 — GitHub
%% ─────────────────────────────────────────
subgraph GITHUB["🐙 GitHub — solidkenn/seniorofexcellencent"]
  Repo["main branch\nsrc/ public/ vercel.json\npackage.json README.md"]
end

GitCommit --> Repo

%% ─────────────────────────────────────────
%% LAYER 3 — Vercel
%% ─────────────────────────────────────────
subgraph VERCEL["▲ Vercel (Hosting)"]
  direction TB
  Trigger["Push detected → auto deploy"]
  Install["npm install"]
  VBuild["npm run build → dist/"]
  Rules["vercel.json rewrite rule\n/* → /index.html"]
  CDN["Global CDN\nServes dist/"]
  Trigger --> Install --> VBuild --> CDN
  Rules -. "applied to all requests" .-> CDN
end

Repo --> Trigger

%% ─────────────────────────────────────────
%% LAYER 4 — Visitor browser
%% ─────────────────────────────────────────
subgraph BROWSER["🌐 Visitor Browser"]
  direction TB
  Visit["Visitor opens URL"]
  StaticFile{"Static file?\ne.g. /assets/logo.png"}
  LoadApp["Load index.html\n→ React app boots"]
  Router["React Router\nreads URL path"]

  subgraph PAGES["Pages"]
    Home["/  Home"]
    About["/about  About"]
    Events["/events  Events"]
    Gallery["/gallery  Gallery"]
    Mem["/in-memoriam  In Memoriam"]
    Contact["/contact  Contact"]
    Nominate["/nominate  Nominate"]
  end

  Visit --> StaticFile
  StaticFile -->|"Yes"| ServeRaw["Serve file directly"]
  StaticFile -->|"No → rewrite → index.html"| LoadApp
  LoadApp --> Router
  Router --> Home
  Router --> About
  Router --> Events
  Router --> Gallery
  Router --> Mem
  Router --> Contact
  Router --> Nominate
end

CDN --> Visit

%% ─────────────────────────────────────────
%% LAYER 5 — Forms → Google infrastructure
%% ─────────────────────────────────────────
subgraph FORMS["📋 Form Submission Flow"]
  direction TB
  FillContact["User fills Contact form\nName, Email, Subject, Message"]
  FillNom["User fills Nomination form\nNominee + Nominator + Seconder"]
  Validate{"Browser\nvalidation"}
  BuildRow["Build row array\n+ ISO timestamp"]
  PostJSON["POST JSON  mode:no-cors\nto Apps Script Web App URL"]

  FillContact --> Validate
  FillNom --> Validate
  Validate -->|"Invalid"| ShowErr["Show browser\nvalidation error"]
  Validate -->|"Valid"| BuildRow
  BuildRow --> PostJSON
end

Contact --> FillContact
Nominate --> FillNom

subgraph GOOGLE["🟢 Google Cloud"]
  direction TB
  GAS["Apps Script Web App\ndoPost(e)\nParses JSON → tab + row"]
  TabCheck{"Tab exists?\nContact / Nominations"}
  AppendRow["sheet.appendRow(row)"]
  ErrResp["Return error JSON"]

  GAS --> TabCheck
  TabCheck -->|"Yes"| AppendRow
  TabCheck -->|"No"| ErrResp
end

subgraph SHEET["📊 Google Sheet"]
  direction LR
  TabContact["Contact tab\nTimestamp | Name | Email | Subject | Message"]
  TabNom["Nominations tab\nTimestamp | Date | Nominee | DOB | Phone\nAddress | Email | Biography\nNominator | Seconder fields..."]
end

PostJSON -->|"HTTPS POST"| GAS
AppendRow -->|"Writes row"| TabContact
AppendRow -->|"Writes row"| TabNom
PostJSON -->|"no-cors: browser shows\nsuccess regardless"| ShowOK["Show success message\nto visitor"]
```

## Stack summary

| Layer | Technology | Role |
|-------|------------|------|
| Frontend | React 19 + Vite 6 + React Router | SPA pages and client-side routing |
| Styling | Tailwind CSS | Build-time utility classes |
| Hosting | Vercel | Builds `dist/` and serves over HTTPS |
| Source control | GitHub (`solidkenn/seniorofexcellencent`) | Triggers deploy on push to `main` |
| Form backend | Google Apps Script Web App | Receives POST, appends rows to a sheet |
| Data store | Google Sheet | Tabs: **Contact**, **Nominations** |

## Routes

| Path | Page | Layout |
|------|------|--------|
| `/` | Home | Shared (Header + Footer) |
| `/about` | About | Shared |
| `/events` | Events | Shared |
| `/gallery` | Gallery | Shared |
| `/in-memoriam` | In Memoriam | Shared |
| `/contact` | Contact | Shared |
| `/nominate` | Nomination form | Standalone (minimal header) |

## SPA routing on Vercel

`vercel.json` rewrites all non-file requests to `index.html` so refreshes on routes like `/about` work. Static assets under `/assets/` are served as files first.

## Form submission

1. User submits **Contact** or **Nominate** form.
2. `src/lib/sheetForm.js` POSTs JSON: `{ tab, row }` to the Apps Script Web App URL.
3. Apps Script (`assets/google-apps-script-reference.gs`) runs `doPost`, opens the sheet by tab name, and `appendRow(row)`.

**Contact row:** Timestamp, Name, Email, Subject, Message  

**Nominations row:** Timestamp, nomination date, nominee fields, nominator fields, seconder fields (see `src/pages/Nominate.jsx`).

### Important: `no-cors` mode

Forms use `fetch` with `mode: 'no-cors'`. The browser cannot read the response from Google, so the UI shows success after the request is sent—not after confirming the row was saved. Verify submissions in the Google Sheet after testing.

## Key files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Route definitions |
| `src/lib/sheetForm.js` | Web App URL and POST helper |
| `assets/google-apps-script-reference.gs` | Apps Script template for the sheet |
| `vercel.json` | SPA rewrites for Vercel |
| `public/assets/` | Images and static files at `/assets/...` |

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output → dist/
```
