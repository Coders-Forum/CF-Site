const achievers = [
  {
    id: "2022PECCS155",
    name: "Gayathri J",
    img: "assets/img/achievers/gayathri.jpeg",
    achievements: [
      "Winner of February Monthly Contest, 2025 - Decrypt and Code",
    ],
  },
  {
    id: "2023PECCS486",
    name: "Shabeshvaran S",
    img: "assets/img/achievers/shabeshvaran.jpeg",
    achievements: ["Winner of January Monthly Contest, 2025 - Techscribe"],
  },
  {
    id: "2023PECCS588",
    name: "Saikumar J",
    img: "assets/img/achievers/saikumar.jpg",
    achievements: ["Winner of September Monthly Contest, 2024 - Pattern Craft"],
  },
  {
    id: "2022PECCS504",
    name: "Monish B",
    img: "assets/img/achievers/monish.jpg",
    achievements: ["Winner of August Monthly Contest, 2024 - Replica Rush"],
  },
  {
    id: "2023PECCS840",
    name: "Bharath V",
    img: "assets/img/achievers/bharath.jpg",
    achievements: ["Winner of July Monthly Contest, 2024 - Automate.PY"],
  },
  {
    id: "2023PECCS556",
    name: "Rahul N",
    img: "assets/img/achievers/rahul.jpg",
    achievements: ["Winner of July Monthly Contest, 2024 - Automate.PY"],
  },
  {
    id: "2023PECCS432",
    name: "Uvashree S",
    img: "assets/img/achievers/uvashree.jpg",
    achievements: ["Active Contributor"],
  },
  {
    id: "2022PECCS625",
    name: "Allen Roddick A",
    img: "assets/img/achievers/allen.png",
    achievements: [
      "Active Contributor",
      "Winner of July Monthly Contest, 2024 - Automate.PY",
    ],
  },
  {
    id: "2022PECCS206",
    name: "Lakshmi Priya A",
    img: "assets/img/achievers/lakshmi_priya_2.jpeg",
    achievements: ["Active Contributor"],
  },
  {
    id: "2022PECCS578",
    name: "Johith Raj S S",
    img: "assets/img/achievers/johith.jpg",
    achievements: ["Active Contributor"],
  },
  {
    id: "2021PECCS306",
    name: "Kumar K",
    img: "assets/img/achievers/kum.jpg",
    achievements: ["Active Contributor"],
  },
  {
    id: "2022PECCS227",
    name: "Nikhitha K.V",
    img: "assets/img/achievers/nikitha.jpg",
    achievements: [
      "Winner of August Monthly Contest, 2024 - Replica Rush",
      "Winner of February Monthly Contest, 2024 - Coffee With Java",
    ],
  },
  {
    id: "2021PECAI236",
    name: "Atchaiyaraj S",
    img: "assets/img/achievers/atc.jpg",
    achievements: ["Winner of PEC Code Quest"],
  },
  {
    id: "2021PECAI229",
    name: "Adrian Calvin K.A",
    img: "assets/img/achievers/ac.jpg",
    achievements: ["Winner of PEC Code Quest"],
  },
  {
    id: "2021PECCS296",
    name: "Jeswin Rhymond J",
    img: "assets/img/achievers/Rhymond.jpeg",
    achievements: ["Winner of September Monthly Contest, 2023 - King Python"],
  },
  {
    id: "2020PECCS149",
    name: "Mohana Priya S.R",
    img: "assets/img/achievers/Mohana.jpeg",
    achievements: [
      "Winner of August Monthly Contest, 2023 - #include &lt;craze.c&gt;",
    ],
  },
  {
    id: "2020PECCS145",
    name: "Maria Robin Andrew",
    img: "assets/img/achievers/Maria.jpeg",
    achievements: ["Winner of August Monthly Contest, 2023 - #HashKing"],
  },
  {
    id: "2020PECCS399",
    name: "Elavarasar P",
    img: "assets/img/achievers/elevarasar.jpeg",
    achievements: ["Winner of July Monthly Contest, 2023 - MATRICKS"],
  },
];

function renderCard(person) {
  const achievementLines = person.achievements
    .map((a) => `<p><b>${a}</b></p>`)
    .join("");

  return `
      <div class="container" data-aos="fade-up" id="${person.id}">
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
          <div class="col-lg-10">
            <div class="photo-frame">
              <div class="card custom-card premium-card" style="background: url(assets/img/card-bg.png);">
                <div class="row no-gutters wall-of-fame-row">

                  <div class="col-md-3 order-1 d-flex align-items-center justify-content-center">
                    <img src="${person.img}"
                         class="d-block img-fluid wall-of-fame-image"
                         alt="${person.name}"
                         loading="lazy"
                         style="max-height:300px; object-fit:contain; width:190px; margin-bottom:-40px;">
                  </div>

                  <div class="col-md-9 order-1 wall-of-fame-column">
                    <div class="section-title-wf d-flex flex-column align-items-center justify-content-center">
                      <h2 style="text-align:center; margin-bottom:30px;"><b>${person.name}</b></h2>
                      <p style="text-align:center;"><br><b>${person.id}</b></p>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center" style="margin-top:20px;">
                      ${achievementLines}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
}

// Render all cards into the section
const section = document.getElementById("walloffame");
section.innerHTML = achievers.map(renderCard).join("");

// Trigger premium-card load animation
section.querySelectorAll(".premium-card").forEach((card) => {
  const img = card.querySelector("img");
  const reveal = () => card.classList.add("is-loaded");
  if (img && img.complete) reveal();
  else if (img) {
    img.addEventListener("load", reveal);
    img.addEventListener("error", reveal);
  } else reveal();
});

// Refresh AOS to detect newly rendered cards
if (typeof AOS !== "undefined") AOS.refreshHard();
