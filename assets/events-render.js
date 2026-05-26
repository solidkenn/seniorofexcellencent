(function () {
  var events = (window.EVENTS_DATA || []).slice().sort(function (a, b) {
    return a.sortDate.localeCompare(b.sortDate);
  });

  var FEATURED_COUNT = 4;
  var featured = events.slice(0, FEATURED_COUNT);

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;');
  }

  function dataAttrs(ev) {
    return (
      ' data-title="' + escapeAttr(ev.title) + '"' +
      ' data-date="' + escapeAttr(ev.date) + '"' +
      ' data-image="' + escapeAttr(ev.image) + '"' +
      ' data-alt="' + escapeAttr(ev.alt) + '"' +
      ' data-description="' + escapeAttr(ev.description) + '"' +
      (ev.imageTop ? ' data-image-top="true"' : '')
    );
  }

  function renderFeaturedCard(ev, index) {
    var isDark = ev.featuredDark;
    var articleClass = isDark
      ? 'bg-zinc-900 rounded-lg overflow-hidden shadow-sm border border-zinc-800 text-white flex flex-col'
      : 'bg-white rounded-lg overflow-hidden shadow-sm border border-zinc-900/10 flex flex-col';
    var dateBadge = isDark
      ? 'bg-primary-container text-black'
      : 'bg-black text-white';
    var summaryClass = isDark ? 'text-zinc-300' : 'text-secondary';
    var linkClass = isDark ? 'text-primary-container' : 'text-primary';
    var imgClass = 'h-56 w-full object-cover' + (ev.imageTop ? ' object-top bg-white' : '');

    return (
      '<article class="' + articleClass + '">' +
      '<img class="' + imgClass + '" src="' + escapeAttr(ev.image) + '" alt="' + escapeAttr(ev.alt) + '"/>' +
      '<div class="p-8 flex flex-col flex-1">' +
      '<span class="' + dateBadge + ' text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded self-start">' + ev.date + '</span>' +
      '<h3 class="font-h3 text-h3 mt-5 mb-3">' + ev.title + '</h3>' +
      '<p class="' + summaryClass + ' font-body-md text-base leading-relaxed flex-1">' + ev.summary + '</p>' +
      '<a class="mt-6 inline-flex items-center gap-2 ' + linkClass + ' font-bold text-sm hover:underline" href="#' + ev.id + '">' +
      '<span>See in Calendar</span>' +
      '<span class="material-symbols-outlined text-lg">arrow_forward</span>' +
      '</a></div></article>'
    );
  }

  function renderTimelineEntry(ev, isLast) {
    /* Background/border colors: events.html (light) + dark-mode.css (dark) nth-child rules */
    var cardClass =
      'event-modal-trigger event-timeline-card flex-1 mb-6 rounded-lg border p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all motion-safe:hover:-translate-y-1 text-left w-full';

    if (isLast) {
      cardClass = cardClass.replace(' mb-6', '');
    }

    var connector = isLast
      ? ''
      : '<div class="timeline-connector w-0.5 bg-primary-container/30 flex-1 min-h-[48px] mt-2"></div>';

    return (
      '<div id="' + ev.id + '" class="calendar-timeline-entry flex gap-6" data-month="' + ev.month + '">' +
      '<div class="flex flex-col items-center">' +
      '<div class="w-16 h-16 rounded-full bg-primary-container flex flex-col items-center justify-center shrink-0">' +
      '<span class="text-black font-bold text-xl leading-none">' + ev.day + '</span>' +
      '<span class="text-black font-bold text-[10px] uppercase tracking-wider leading-tight">' + ev.monthAbbr + '</span>' +
      '</div>' + connector + '</div>' +
      '<button type="button" class="' + cardClass + '"' + dataAttrs(ev) + '>' +
      '<span class="event-timeline-date font-label-caps tracking-widest text-xs">' + ev.date + '</span>' +
      '<h3 class="font-h3 text-h3 mt-2 mb-2">' + ev.title + '</h3>' +
      '<p class="event-timeline-desc font-body-md text-base leading-relaxed">' + ev.summary + '</p>' +
      '<span class="mt-4 inline-flex items-center gap-1 event-timeline-cta font-bold text-sm">' +
      'View details <span class="material-symbols-outlined text-base">arrow_forward</span></span>' +
      '</button></div>'
    );
  }

  var featuredGrid = document.getElementById('featured-events-grid');
  var timeline = document.getElementById('calendar-timeline');

  if (featuredGrid) {
    featuredGrid.innerHTML = featured.map(renderFeaturedCard).join('');
  }

  if (timeline) {
    timeline.innerHTML = events.map(function (ev, i) {
      return renderTimelineEntry(ev, i === events.length - 1);
    }).join('');
  }

  initEventsPage();
})();

function initEventsPage() {
  var modal = document.getElementById('event-modal');
  var overlay = document.getElementById('event-modal-overlay');
  var closeBtn = document.getElementById('event-modal-close');
  var img = document.getElementById('event-modal-image');
  var dateEl = document.getElementById('event-modal-date');
  var titleEl = document.getElementById('event-modal-title');
  var descEl = document.getElementById('event-modal-description');
  var lastTrigger = null;

  function openModal(trigger) {
    var d = trigger.dataset;
    img.src = d.image || '';
    img.alt = d.alt || d.title || 'Event image';
    img.classList.remove('object-top', 'bg-white');
    if (d.imageTop === 'true') {
      img.classList.add('object-top', 'bg-white');
    }
    dateEl.textContent = d.date || '';
    titleEl.textContent = d.title || '';
    descEl.textContent = d.description || '';
    lastTrigger = trigger;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger) {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  document.querySelectorAll('.event-modal-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn);
    });
  });

  var monthFilterBtns = document.querySelectorAll('.month-filter-btn');
  var timelineEntries = document.querySelectorAll('.calendar-timeline-entry');
  var inactiveMonthClasses = ['border-zinc-200', 'bg-surface-container-low'];
  var activeMonthClasses = ['border-primary-container', 'bg-primary-container', 'text-black'];

  function setMonthButtonActive(btn, isActive) {
    inactiveMonthClasses.forEach(function (c) { btn.classList.toggle(c, !isActive); });
    activeMonthClasses.forEach(function (c) { btn.classList.toggle(c, isActive); });
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    var icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.classList.toggle('text-primary-container', !isActive);
    }
  }

  function updateTimelineConnectors() {
    var visible = Array.prototype.filter.call(timelineEntries, function (entry) {
      return !entry.classList.contains('hidden');
    });
    timelineEntries.forEach(function (entry) {
      var connector = entry.querySelector('.timeline-connector');
      if (connector) {
        connector.classList.add('hidden');
      }
    });
    visible.forEach(function (entry, index) {
      var connector = entry.querySelector('.timeline-connector');
      if (connector && index < visible.length - 1) {
        connector.classList.remove('hidden');
      }
    });
  }

  function filterTimelineByMonth(month) {
    timelineEntries.forEach(function (entry) {
      var show = month === 'all' || entry.getAttribute('data-month') === month;
      entry.classList.toggle('hidden', !show);
    });
    updateTimelineConnectors();
  }

  monthFilterBtns.forEach(function (btn) {
    setMonthButtonActive(btn, btn.getAttribute('data-month') === 'all');
    btn.addEventListener('click', function () {
      var month = btn.getAttribute('data-month');
      monthFilterBtns.forEach(function (b) {
        setMonthButtonActive(b, b === btn);
      });
      filterTimelineByMonth(month);
    });
  });

  updateTimelineConnectors();

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
