/*Array meetups stores all the meetup card details: 
Format to create them: 
1. Chronological order(Descending order)
2. Follow same template 👇
*/
const meetups = [
  {
    title: "Meetup 52",
    img: "./assets/img/Meetup1.jpg",
    desc: "Weekly Meetup 52 covered DevOps, recursion, JavaScript, and interview experiences.",
    date: "2025-11-04",
    momLink: "https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing",
    resourcesLink :"https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing"
  },
  {
    title: "Meetup 51",
    img: "./assets/img/Meetup2.jpg",
    desc: "Weekly Meetup 51 covered DevOps, recursion, JavaScript, and interview experiences.",
    date: "2025-11-11",
    momLink: "https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing",
    resourcesLink :"https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing"
  },
  {
    title: "Meetup 50",
    img: "./assets/img/Meetup1.jpg",
    desc: "Weekly Meetup 50 covered DevOps, recursion, JavaScript, and interview experiences.",
    date: "2025-11-18",
    momLink: "https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing",
    resourcesLink :"https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing"
  },
  {
    title: "Meetup 49",
    img: "./assets/img/Meetup1.jpg",
    desc: "Weekly Meetup 52 covered DevOps, recursion, JavaScript, and interview experiences.",
    date: "2025-11-04",
    momLink: "https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing",
    resourcesLink :"https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing"
  },
  {
    title: "Meetup 48",
    img: "./assets/img/Meetup2.jpg",
    desc: "Weekly Meetup 51 covered DevOps, recursion, JavaScript, and interview experiences.",
    date: "2025-11-11",
    momLink: "https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing",
    resourcesLink :"https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing"
  },
  {
    title: "Meetup 47",
    img: "./assets/img/Meetup1.jpg",
    desc: "Weekly Meetup 50 covered DevOps, recursion, JavaScript, and interview experiences.",
    date: "2025-11-18",
    momLink: "https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing",
    resourcesLink :"https://drive.google.com/file/d/1P6vC5NU-9Ayc4hoZofX97tP891T8s4Gs/view?usp=sharing"
  },
  
];
const carouselInner = document.querySelector(".carousel-inner");

//function to create html divs for single meetup card
function createCard(meetup) {
  return `
    <div class="col-12 col-lg-4 meetup-card selected-card" data-date="${meetup.date}">
      <div class="m-card h-100">
        <img src="${meetup.img}" class="card-img-top blog-card-img" />
        <div class="card-body meetup-body">
          <h5>${meetup.title}</h5>
          <p class="meetup-desc">${meetup.desc}</p>
          <div class="meetup-actions mt-auto">
            <a href="${meetup.momLink}" target="_blank" class="meetup-btn btn btn-outline-dark">
              View MOM
            </a>
            <a href="${meetup.momLink}" target="_blank" class="meetup-btn btn btn-outline-dark">
              Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

//function to dynamically buid the carousel structure
function buildCarousel(meetups) {
  carouselInner.innerHTML = "";

  
  let itemsPerSlide = window.innerWidth < 768 ? 1 : 3;

  for (let i = 0; i < meetups.length; i += itemsPerSlide) {
    let slide = document.createElement("div");
    slide.className = "carousel-item";
    if (i === 0) slide.classList.add("active");

    let row = document.createElement("div");
    row.className = "row g-3";

    let chunk = meetups.slice(i, i + itemsPerSlide);

    chunk.forEach(m => {

      
      const col = document.createElement("div");
      col.innerHTML = createCard(m);
      row.appendChild(col.firstElementChild);

    });

    slide.appendChild(row);
    carouselInner.appendChild(slide);
  }
}
buildCarousel(meetups);