$(document).ready(function() {
  $(".stagger-btn").on("click", function(e) {
    e.stopPropagation();
    const $container = $(this).closest(".stagger-dropdown");
    $container.toggleClass("open");
    const isOpen = $container.hasClass("open");
    $(this).attr("aria-expanded", String(isOpen));
    $container.find(".stagger-menu").attr("aria-hidden", String(!isOpen));
    if (isOpen) setTimeout(() => $container.find(".stagger-item").first().focus(), 150);
  });

  $(".stagger-item").on("click", function(e) {
    const selected = $(this).text().trim();
    const $container = $(this).closest(".stagger-dropdown");
    $container.find(".stagger-btn span").text(selected);
    $container.removeClass("open");
    $container.find(".stagger-btn").attr("aria-expanded", "false");
    $container.find(".stagger-menu").attr("aria-hidden", "true");
  });

  $(document).on("click", function() {
    $(".stagger-dropdown").removeClass("open");
    $(".stagger-dropdown .stagger-btn").attr("aria-expanded", "false");
    $(".stagger-dropdown .stagger-menu").attr("aria-hidden", "true");
  });

  $(document).on("keydown", function(e) {
    const $active = $(document.activeElement);
    if (e.key === "Escape") $(".stagger-dropdown").removeClass("open");
    if ($active.hasClass("stagger-btn") && e.key === "ArrowDown") {
      e.preventDefault();
      const $container = $active.closest(".stagger-dropdown");
      $container.addClass("open");
      $container.find(".stagger-item").first().focus();
    }
  });
});


   $(document).ready(function () {
      function performSearch() {
        let query = $("#searchInput").val().trim();
        if (query) {
          alert("Searching for: " + query); 
        }
      }
      $("#searchForm").on("submit", function (e) {
        e.preventDefault();
        performSearch();
      });
      $(".search-icon").on("click", function () {
        performSearch();
      });
    });

  function showMeetupByDate(dateStr) {
  let found = false;

  document.querySelectorAll(".carousel-item").forEach(slide => {
    let slideHasMatch = false;

    slide.querySelectorAll(".meetup-card").forEach(card => {
      if (card.dataset.date === dateStr) {
        card.style.display = "block";
        slideHasMatch = true;
        found = true;
      } else {
        card.style.display = "none";
      }
    });
    slide.style.display = slideHasMatch ? "block" : "none";
  });
  const carousel = bootstrap.Carousel.getOrCreateInstance(
    document.querySelector("#blogCarousel")
  );
  carousel.to(0);

  return found;
}


function resetMeetups() {
  document.querySelectorAll(".carousel-item").forEach(slide => {
    slide.style.display = "";
    slide.querySelectorAll(".meetup-card").forEach(card => {
      card.style.display = "";
    });
  });
}
  
    window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
    const overlay = document.createElement("div");
    overlay.classList.add("page-loader-overlay");
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 1000);
  });

  document.querySelectorAll("a").forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;
        e.preventDefault();
        document.body.classList.add("page-transition");
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });


const datepicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");
const yearInput = datepicker.querySelector(".year-input");
const monthInput = datepicker.querySelector(".month-input");
const cancelBtn = datepicker.querySelector(".cancel");
const applyBtn = datepicker.querySelector(".apply");
const nextBtn = datepicker.querySelector(".next");
const prevBtn = datepicker.querySelector(".prev");
const dates = datepicker.querySelector(".dates");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

dateInput.addEventListener("click", () => {
  datepicker.hidden = false;
});

cancelBtn.addEventListener("click", () => {
  datepicker.hidden = true;
});

document.addEventListener("click", (e) => {
  const datepickerContainer = datepicker.parentNode;
  if (!datepickerContainer.contains(e.target)) {
    datepicker.hidden = true;
  }
});

applyBtn.addEventListener("click", () => {
  const selectedDateStr = selectedDate.toISOString().split("T")[0];

  dateInput.value = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const matched = showMeetupByDate(selectedDateStr);
  if (!matched) {
    resetMeetups();
  }
  datepicker.hidden = true;
});


nextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});

prevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

monthInput.addEventListener("change", () => {
  month = monthInput.selectedIndex;
  displayDates();
});

yearInput.addEventListener("change", () => {
  const newYear = parseInt(yearInput.value, 10) || new Date().getFullYear();
  year = Math.min(2100, Math.max(1900, newYear));
  yearInput.value = year;
  displayDates();
});

const updateYearMonth = () => {
  monthInput.selectedIndex = month;
  yearInput.value = year;
};

const handleDateClick = (e) => {
  const button = e.target;

  const selected = dates.querySelector(".selected");
  selected && selected.classList.remove("selected");

  button.classList.add("selected");

  selectedDate = new Date(year, month, parseInt(button.textContent));
};

const highlightedDates = [
  "2025-11-04",
  "2025-11-11",
  "2025-11-18",
];

const createButton = (text, isDisabled = false) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;

  if (!isDisabled) {
    const buttonDateObj = new Date(year, month, text);
    const buttonDateStr = buttonDateObj.toISOString().split("T")[0];

    const today =
      buttonDateObj.toDateString() === new Date().toDateString();
    const selected =
      buttonDateObj.toDateString() === selectedDate.toDateString();
    const isHighlighted =
      highlightedDates.includes(buttonDateStr);

    button.classList.toggle("today", today);
    button.classList.toggle("selected", selected);
    button.classList.toggle("highlighted", isHighlighted);
  }

  return button;
};


const displayDates = () => {
  updateYearMonth();
  dates.innerHTML = "";

  const lastOfPrevMonth = new Date(year, month, 0);
  for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
    if (lastOfPrevMonth.getDay() === 6) break;
    const text =
      lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
    dates.appendChild(createButton(text, true));
  }

  const lastOfMonth = new Date(year, month + 1, 0);
  for (let i = 1; i <= lastOfMonth.getDate(); i++) {
    const btn = createButton(i, false);
    btn.addEventListener("click", handleDateClick);
    dates.appendChild(btn);
  }

  const firstOfNextMonth = new Date(year, month + 1, 1);
  for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
    if (firstOfNextMonth.getDay() === 0) break;
    const text =
      firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;
    dates.appendChild(createButton(text, true));
  }
};

displayDates();

const meetupWrapper = document.getElementById("meetup-wrapper");
const allMeetupCards = document.querySelectorAll(".meetup-card");
const carouselControls = document.querySelectorAll('[data-bs-slide]');

function showMeetupByDate(dateStr) {
  let found = false;

  allMeetupCards.forEach(card => {
    card.classList.remove("is-selected");
    if (card.dataset.date === dateStr) {
      card.style.display = "block";
      card.classList.add("mx-auto", "is-selected"); 
      found = true;
    } else {
      card.style.display = "none";
    }
  });
  carouselControls.forEach(btn => btn.style.display = "none");
  meetupWrapper.classList.add("d-flex", "justify-content-center");
  return found;
}

function resetMeetups() {
  allMeetupCards.forEach(card => {
    card.style.display = "";
    card.classList.remove("mx-auto");
  });
  carouselControls.forEach(btn => btn.style.display = "");
  meetupWrapper.classList.remove("d-flex", "justify-content-center");
}

