// data array for gallery items sorted by date (most recent at first)
const galleryData = [
  {
    title: "Weekly MeetUp",
    desc: "Sanjay K, a pre-final year student, explained about the neural networks and the training of ML model using python in Machine Learning.",
    imgUrl: "assets/img/gallery/img65.jpg",
    date: "28 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Sakkthivel T, a pre-final year student, delved into the workings and architectural aspects of Amazon Web Services, exploring the tools of cloud computing.",
    imgUrl: "assets/img/gallery/img64.jpg",
    date: "28 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Madhavakumar D, a pre-final year student, gave a lightning talk on the significance of Java and its diverse applications in the current world.",
    imgUrl: "assets/img/gallery/img63.jpg",
    date: "28 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Rishab H, a pre-final year student, emphasized a lightning talk on Hard Disk Data recovery working mechanism.",
    imgUrl: "assets/img/gallery/img62.jpg",
    date: "28 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Shruthi S, a second-year student, elucidated the complexity of SoundSynth-Streamlined Speech Summarization system, with a live demonstration of its capabilities.",
    imgUrl: "assets/img/gallery/img61.jpg",
    date: "28 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Ponnandhakumar P, a pre-final year student, explained the working of a Python-coded Telegram bot that he has developed and deployed it using API Keys.",
    imgUrl: "assets/img/gallery/img60.jpg",
    date: "28 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Aalia Fathima, a second year student, discussed about insightful explanation on Search Engine Optimization crucial for optimizing websites and enhancing online visibility.",
    imgUrl: "assets/img/gallery/img59.jpg",
    date: "21 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Emmanuel Prithish S, a second year student, gave a lightning talk on Machine Learning algorithms.",
    imgUrl: "assets/img/gallery/img58.jpg",
    date: "21 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Sanjay K, a pre-final year student, delivered a detailed overview of Amazon Athena for analyzing data stored in Amazon S3 using standard SQL.",
    imgUrl: "assets/img/gallery/img57.jpg",
    date: "21 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "March- HACKATHON",
    desc: "Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.",
    imgUrl: "assets/img/gallery/img74.jpg",
    date: "15 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "March - HACKATHON",
    desc: "Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.",
    imgUrl: "assets/img/gallery/img73.jpg",
    date: "15 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "March - HACKATHON",
    desc: "Winners of the March Hackathon, where innovation and expertise collide in a showcase of problem-solving brilliance.",
    imgUrl: "assets/img/gallery/img72.jpg",
    date: "15 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "March - HACKATHON",
    desc: "Winners of the March Hackathon, where innovation and expertise collide in a showcase of problem-solving brilliance.",
    imgUrl: "assets/img/gallery/img71.jpg",
    date: "15 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "March - HACKATHON",
    desc: "Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.",
    imgUrl: "assets/img/gallery/img70.jpg",
    date: "15 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "March - HACKATHON",
    desc: "Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.",
    imgUrl: "assets/img/gallery/img69.jpg",
    date: "15 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Varshini S, a second year student, conducted a game on Technical connections based on programming languages.",
    imgUrl: "assets/img/gallery/img55.jpg",
    date: "14 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Johith Raj S S, a second year student, discussed about the concept of Multiple linear regression in machine learning.",
    imgUrl: "assets/img/gallery/img54.jpg",
    date: "14 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Ajitha M, a second year student, explained about the components and features of React JS.",
    imgUrl: "assets/img/gallery/img53.jpg",
    date: "14 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "An insightful two-round quiz was organized on Database Management System and Programming Languages, allowing participants to showcase their knowledge and skills comprehensively.",
    imgUrl: "assets/img/gallery/img52.jpg",
    date: "5 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Johith Raj S S, a second year student, demonstrated the concept of linear regression uing python in machine learning.",
    imgUrl: "assets/img/gallery/img51.jpg",
    date: "5 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Madhavakumar D,a pre-final year student, demonstrated QR code generation and decoding using Python.",
    imgUrl: "assets/img/gallery/img50.jpg",
    date: "5 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "A responsive quiz was conducted on python which offered participants an engaging opportunity to understand the concepts in depth.",
    imgUrl: "assets/img/gallery/img49.jpg",
    date: "1 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Johith Raj S S, a second year student, explained the concept of linear regression in machine learning.",
    imgUrl: "assets/img/gallery/img48.jpg",
    date: "1 March, 2024",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - Coffee with Java",
    desc: "Winners of February monthly coding contest - Coffee with Java, capturing the moment.",
    imgUrl: "assets/img/gallery/img68.jpg",
    date: "26 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - Coffee with Java",
    desc: "Participants exhibited their problem-solving prowess in the programming contests, showcasing their skills and expertise effectively.",
    imgUrl: "assets/img/gallery/img67.jpg",
    date: "26 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - Coffee with Java",
    desc: "Participants exhibited their problem-solving prowess in the programming contests, showcasing their skills and expertise effectively.",
    imgUrl: "assets/img/gallery/img66.jpg",
    date: "26 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Madhavakumar D, a pre-final year student, shared valuable insights on JavaScript code to unveil answers, demonstrating strategies for code comprehension.",
    imgUrl: "assets/img/gallery/img46.jpg",
    date: "23 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Rishab H, a pre-final year student, explored JavaScript's transformative capabilities, focusing on its complex methods for constructing web pages.",
    imgUrl: "assets/img/gallery/img45.jpg",
    date: "23 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Kumar K, a pre-final year student, engaged in a detailed discussion concerning programming strategies and insights, particularly from the perspective of interview preparation.",
    imgUrl: "assets/img/gallery/img44.jpg",
    date: "20 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Sakkthivel T, a pre-final year student, delved into the building a Mass Email Automation System using Amazon Web Services, showcasing its architecture and functionalities.",
    imgUrl: "assets/img/gallery/img43.jpg",
    date: "20 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Jeswin Joseph J, a pre-final year student, provided a detailed overview of Django templates, emphasizing its workflow and essential role in web development.",
    imgUrl: "assets/img/gallery/img42.jpg",
    date: "20 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Kumar K,a pre-final year student, discussed the insights of Power BI and demonstrated a Data Visualization on Real Mart Analysis.",
    imgUrl: "assets/img/gallery/img41.jpg",
    date: "6 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "A Quiz game was enthusiastically conducted on C programming and javascript for participants to showcase their expertise and understanding across a diverse array of coding languages and concepts.",
    imgUrl: "assets/img/gallery/img40.jpg",
    date: "6 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Jerrish N,a pre-final year student, explained the features and workflow of Unity 3D.",
    imgUrl: "assets/img/gallery/img39.jpg",
    date: "6 February, 2024",
    filterType: "filter-card",
  },
  {
    title: "PEC Code Quest",
    desc: "Winners of PEC Code Quest, an Inter-Department Coding Contest conducted through Hackerrank.",
    imgUrl: "assets/img/gallery/img36.jpg",
    date: "23 January, 2024",
    filterType: "filter-card",
  },
  {
    title: "PEC Code Quest",
    desc: "Contestants Solving complex challenges in the Final round of PEC Code Quest.",
    imgUrl: "assets/img/gallery/img37.jpg",
    date: "23 January, 2024",
    filterType: "filter-card",
  },
  {
    title: "PEC Code Quest",
    desc: "Contestants solving challenges in the Semi-Final Round of PEC Code Quest.",
    imgUrl: "assets/img/gallery/img38.jpg",
    date: "22 January, 2024",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Rishab H, a pre-final year student, discussed about JS promise,await and also uses of it in async functions.",
    imgUrl: "assets/img/gallery/img35.jpeg",
    date: "22 December, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Madhavkumar D, a pre-final year student, discussed and demonstrated audio conferencing application in java with his real-time project.",
    imgUrl: "assets/img/gallery/img34.jpeg",
    date: "22 December, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: 'Madhumitha V, a second year student, explained about Internet of Things,CV module and presented her project "Drowsiness Detection" on IOT.',
    imgUrl: "assets/img/gallery/img33.jpeg",
    date: "7 September, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: 'Shruti S, a second year student, discussed about Google Firebase and explained her IOT project "Automatic fish feeder".',
    imgUrl: "assets/img/gallery/img32.jpeg",
    date: "7 September, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: 'Mohammed Jasim M, a second year student, gave a talk on Pygame and explained his project "Airspace".',
    imgUrl: "assets/img/gallery/img31.jpeg",
    date: "7 September, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: 'Hariharan B, a second year student, explained about the Pygame and demonstrated his project "Snake game".',
    imgUrl: "assets/img/gallery/img30.jpeg",
    date: "31 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Arundhathi T, a pre-final year student, gave a brief note on Internet of Things.",
    imgUrl: "assets/img/gallery/img29.jpeg",
    date: "31 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Michael Josil M, a pre-final year student, imparted a detailed description about the Google Cloud.",
    imgUrl: "assets/img/gallery/img28.jpeg",
    date: "31 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - #HASHKING",
    desc: "Winners of August monthly coding contest - #HASHKING, immersing the moment.",
    imgUrl: "assets/img/gallery/img27.jpeg",
    date: "29 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - #include <craze.c>",
    desc: "Winners of August monthly coding contest - #include <craze.c>, embracing the event.",
    imgUrl: "assets/img/gallery/img26.jpeg",
    date: "29 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "August Monthly Coding Contest",
    desc: "A showcase of programmers' atypical coding knowledge, as they test their problem-solving skills.",
    imgUrl: "assets/img/gallery/img25.jpeg",
    date: "29 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Karthick V, a pre-final year student, explained the Django fundamentals with a live demo.",
    imgUrl: "assets/img/gallery/img24.jpeg",
    date: "17 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Ramanan K.B, a final year student, gave a guest lecture on how to choose a Framework with his own project.",
    imgUrl: "assets/img/gallery/img23.jpeg",
    date: "17 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Suresh H, a final year student, gave an insightful discussion on Frontend and Backend framework.",
    imgUrl: "assets/img/gallery/img22.jpeg",
    date: "17 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Raj Dhyaneshvar, a final year student, sparking curiosity with a lightning session on API Keys.",
    imgUrl: "assets/img/gallery/img21.jpeg",
    date: "10 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Rishab H, a pre-final year student, delved into  Git, Github and Netlify, simplifying version control and Web Hosting for all of us.",
    imgUrl: "assets/img/gallery/img20.jpeg",
    date: "10 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Jeswin Joseph J shared invaluable insights into Figma, guiding through its features and possibilities.",
    imgUrl: "assets/img/gallery/img19.jpeg",
    date: "10 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img18.jpeg",
    date: "9 August, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img17.jpeg",
    date: "8 August, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img16.jpeg",
    date: "8 August, 2023",
    filterType: "filter-app",
  },
  {
    title: "Weekly MeetUp",
    desc: "Madhavakumar D, in an interactive and entertaining talk, discusses his skill and understanding in Python's KeyBoard Module.",
    imgUrl: "assets/img/gallery/img13.jpeg",
    date: "4 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Jeswin Rhymond J, a pre-final year student, utilizing the MeetUp to get his questions answered.",
    imgUrl: "assets/img/gallery/img14.jpeg",
    date: "4 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Weekly MeetUp",
    desc: "Vasanth R, a Pre-Final Year student, gave a Lightning Talk about his current research.",
    imgUrl: "assets/img/gallery/img15.jpeg",
    date: "4 August, 2023",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - [MATRICKS]",
    desc: "A showcase of participants' exceptional programming knowledge, as they test their problem-solving ability.",
    imgUrl: "assets/img/gallery/img10.jpeg",
    date: "27 July, 2023",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - [MATRICKS]",
    desc: "A showcase of participants' exceptional programming knowledge, as they test their problem-solving ability.",
    imgUrl: "assets/img/gallery/img11.jpeg",
    date: "27 July, 2023",
    filterType: "filter-card",
  },
  {
    title: "Coding Contest - [MATRICKS]",
    desc: "Winners of July monthly coding contest - [MATRICKS], capturing the moment.",
    imgUrl: "assets/img/gallery/img12.jpeg",
    date: "27 July, 2023",
    filterType: "filter-card",
  },
  {
    title: "Club Inauguration",
    desc: "Karthick V of III CSE D, Greeting the group with a welcome note",
    imgUrl: "assets/img/gallery/img7.jpeg",
    date: "25 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Club Inauguration",
    desc: "Snapshot of the special moment when our coding community came together, to mark the Inauguration of Coders Forum Club.",
    imgUrl: "assets/img/gallery/img8.jpg",
    date: "25 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Club Inauguration",
    desc: "Mrs. Anitha Moses, Co-Ordinator, addressed the gathering. Her words left a lasting impact, inspiring and motivating all the audience.",
    imgUrl: "assets/img/gallery/img9.jpeg",
    date: "25 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img4.jpeg",
    date: "21 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img5.jpeg",
    date: "21 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img6.jpeg",
    date: "21 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img1.jpeg",
    date: "20 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img2.jpeg",
    date: "20 July, 2023",
    filterType: "filter-app",
  },
  {
    title: "Selection Round",
    desc: "Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.",
    imgUrl: "assets/img/gallery/img3.jpeg",
    date: "20 July, 2023",
    filterType: "filter-app",
  },
];


// basic structure for rendering gallery items
{
  /* <div class="col-lg-4 col-md-6 portfolio-item filter-card">
  <div class="portfolio-wrap">
    <img
      src="assets/img/events/Inaguration-poster.png"
      class="img-fluid w-100"
      style="height: 250px; object-fit: cover"
      alt=""
      loading="lazy"
    />
    <div class="portfolio-info">
      <h4>Club Inauguration</h4>
      <h6 style="color: #f5f5f5">
        The official inauguration of our club with faculty, students, and
        guests.
      </h6>
      <p>25 July, 2023</p>
      <div class="portfolio-links">
        <a
          href="assets/img/events/Inaguration-poster.png"
          data-gallery="portfolioGallery"
          class="portfolio-lightbox"
        >
          <i class="bi bi-arrows-angle-expand"></i>
        </a>
      </div>
    </div>
  </div>
</div>; */
}

const container = document.querySelector(
  "#portfolio-imgs .row.d-flex.flex-wrap.gap-3.justify-content-center"
);
galleryData.forEach((item) => {
  const component = document.createElement("div");
  component.className = `col-lg-4 col-md-6 portfolio-item ${item.filterType}`;
  component.innerHTML = `<div class="portfolio-wrap">
    <img
      src="${item.imgUrl}"
      class="img-fluid w-100"
      style="height: 250px; object-fit: cover"
      alt=""
      loading="lazy"
    />
    <div class="portfolio-info">
      <h4>${item.title}</h4>
      <h6 style="color: #f5f5f5">
        ${item.desc}
      </h6>
      <p>${item.date}</p>
      <div class="portfolio-links">
        <a
          href="${item.imgUrl}"
          data-gallery="portfolioGallery"
          class="portfolio-lightbox"
          data-title="${item.title}"
          data-description="<p class='portfolio-lightbox-description'>${item.desc}</p><small class='portfolio-lightbox-date'>${item.date}</small>"
        >
          <i class="bi bi-arrows-angle-expand"></i>
        </a>
      </div>
    </div>
  </div>`;
  container.appendChild(component);
});

GLightbox({
  selector: ".portfolio-lightbox",
  touchNavigation: true,
});

