// data array for gallery items sorted by date (most recent at first)

/*
rules to build this below array of objects in future:

1. build from top, like a stack. (the most recent should be on top)
2. filtertype: if its weekly meetup leave it empty else if its events or contests add filter-highlight
3. remaining properties just follow the same template.
*/
const galleryData = [
  
  {
    title: 'Weekly MeetUp',
    desc: 'Uvashree Senthilkumar ,delivered an insightful introduction to 𝗗𝗮𝘁𝗮 𝗦𝗰𝗶𝗲𝗻𝗰𝗲, shedding light on its growing importance, fundamental concepts.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20110.jpg',
    date: '14 December, 2024',
    filterType: ''
  },
   {
    title: 'Weekly MeetUp',
    desc: 'HARI SRI RAGAVI S ,captivated the audience with a live demonstration of 𝗞𝗮𝗹𝗶 𝗟𝗶𝗻𝘂𝘅, showcasing essential Linux commands like 𝘄𝗵𝗼𝗮𝗺𝗶, 𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲, 𝗽𝘄𝗱, 𝗺𝗸𝗱𝗶𝗿, 𝗰𝗱, 𝗲𝘁𝗰. ',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20109.jpg',
    date: '14 December, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'HARI SRI RAGAVI S ,captivated the audience with a live demonstration of 𝗞𝗮𝗹𝗶 𝗟𝗶𝗻𝘂𝘅, showcasing essential Linux commands like 𝘄𝗵𝗼𝗮𝗺𝗶, 𝗵𝗼𝘀𝘁𝗻𝗮𝗺𝗲, 𝗽𝘄𝗱, 𝗺𝗸𝗱𝗶𝗿, 𝗰𝗱, 𝗲𝘁𝗰. ',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20108.jpg',
    date: '14 December, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Laxman R U, shared his 𝐩𝐥𝐚𝐜𝐞𝐦𝐞𝐧𝐭 𝐣𝐨𝐮𝐫𝐧𝐞𝐲, detailing each round he faced and offering practical tips that resonated with all of us preparing for the job market.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20107.jpg',
    date: '8 October, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Mohamed Jasim ,gave a technical session on 𝐛𝐢𝐭 𝐦𝐚𝐧𝐢𝐩𝐮𝐥𝐚𝐭𝐢𝐨𝐧, showcasing its efficiency in solving many coding problems and inspiring everyone to dive deeper into this essential concept.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20106.jpg',
    date: '8 October, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Uvashree Senthilkumar, delivered a mind-blowing session 𝐀𝐈 𝐚𝐧𝐝 𝐢𝐭𝐬 𝐝𝐨𝐦𝐚𝐢𝐧𝐬. She covered core AI concepts and walked us through various ML algorithms, making complex topics accessible and engaging for everyone.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20105.jpg',
    date: '8 October, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'We hosted the interactive event "𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗧𝗘𝗖𝗛𝗡𝗢𝗟𝗢𝗚𝗬", where members enthusiastically participated ,identifying various technologies through clues and descriptions.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20104.jpg',
    date: '1 October, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'peruvayila vinodh ,delivered a comprehensive session on the 𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻 𝗼𝗳 𝗝𝗮𝘃𝗮.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20103.jpg',
    date: '1 October, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Rishab H ,𝘀𝗵𝗮𝗿𝗲𝗱 𝗵𝗶𝘀 𝗱𝗲𝘁𝗮𝗶𝗹𝗲𝗱 𝗽𝗹𝗮𝗰𝗲𝗺𝗲𝗻𝘁 𝗮𝗻𝗱 𝗶𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲𝘀, breaking down the various stages involved in the process. He also introduced a range of useful resources and strategies to tackle each phase .',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20102.jpg',
    date: '1 October, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Mohamed Jasim provided an in-depth explanation of the Sliding Window technique.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20101.jpg',
    date: '20 September, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Lakshmi Priya Aravamuthan, provided an in-depth explanation of Ethereum, covering its core concepts and potential applications.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%20100.jpg',
    date: '20 September, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Allen Roddick, delivered an insightful explanation on Power BI with a live demonstration, showcasing its real-world applications.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img99.jpg',
    date: '20 September, 2024',
    filterType: ''
  },
  {
    title: 'Replica-Rush',
    desc: 'we hosted an exhilarating web clone contest, Replica Rush, where our talented members showcased their skills by replicating a given web page within a stipulated time.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2098.jpg',
    date: '22 August, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Replica-Rush',
    desc: 'we hosted an exhilarating web clone contest, Replica Rush, where our talented members showcased their skills by replicating a given web page within a stipulated time.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2097.jpg',
    date: '22 August, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Replica-Rush',
    desc: 'we hosted an exhilarating web clone contest, Replica Rush, where our talented members showcased their skills by replicating a given web page within a stipulated time.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2096.jpg',
    date: '22 August, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Allen Roddick delivered an informative session on DevOps, covering various tools essential for modern development practices.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2095.jpg',
    date: '20 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhavakumar Dhandapani, shared his Smart India Hackathon experience, offering invaluable guidance to our members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2094.jpg',
    date: '20 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Dr.P.J.Sathish Kumar, Professor, Department of CSE, motivated our members to participate in the prestigious Smart India Hackathon, emphasizing its significance for budding innovators.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2093.jpg',
    date: '20 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Pathra Shakthi, impressed us with her explanation of Quantum computing concepts,entanglement, and qubits, along with an overview of how classical computing differs from quantum computing.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2092.jpg',
    date: '13 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Lakshmi Priya Aravamuthan, gave an introduction to Blockchain technology, explaining its concepts and discussing how it powers cryptocurrencies.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2091.jpg',
    date: '13 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Rishab H, delivered an insightful session on memory management in Java, detailing its connection with the order of execution of Java code.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2090.jpg',
    date: '13 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'We kicked off the event with an interactive ice-breaking session called "Guess the Technology," which encouraged active participation and sparked curiosity among our members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2089.jpg',
    date: '6 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Monisha V, delivered an engaging presentation on Node.js, offering valuable insights that captivated both beginners and experienced developers. ',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2088.jpg',
    date: '6 August, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Pooja B, shared her expertise on Speech Synthesis, providing an in-depth exploration of the latest trends and applications in the field. ',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2087.jpg',
    date: '6 August, 2024',
    filterType: ''
  },
  {
    title: 'Automate.PY',
    desc: 'It is a team-based contest was designed to enhance the automation skills of our members by providing a competitive platform for them .',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2086.jpg',
    date: '31 July, 2024',
    filterType: 'filter-highlight'
  },{
    title: 'Automate.PY',
    desc: 'It is a team-based contest was designed to enhance the automation skills of our members by providing a competitive platform for them .',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2085.jpg',
    date: '31 July, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Automate.PY',
    desc: 'It is a team-based contest was designed to enhance the automation skills of our members by providing a competitive platform for them .',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2084.jpg',
    date: '31 July, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhavakumar D ,explained us about 𝐒𝐎𝐋𝐈𝐃 principles, 𝐆𝐎𝐅 (Gang of Four) design pattern. ',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2083.jpg',
    date: '30 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Harini G delivered an insightful session on Looker, a powerful browser-based data analytics tool.Her explantion gave us a good understanding of How to use Looker for Data Analytics.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2082.jpg',
    date: '30 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Mohamed Jasim, delivered a detailed explanation of, Automation using Python demonstrating its practical applications. ',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2081.jpg',
    date: '30 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'We celebrated one year of Coders Forum .We had an orientation for our new members sharing the purpose of our community and benefits of joining us.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2080.jpg',
    date: '25 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Mohammed Aashif .H ,shared insights on data analytics and gave  a complete road map to learn data analytics.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2079.jpg',
    date: '16 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Naveen Kumar, presented an overview on 𝐜𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐚𝐭𝐭𝐚𝐜𝐤𝐬. It was a wake-up call to the various cyber threats out there and how crucial it is to stay vigilant.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2078.jpg',
    date: '16 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Mr.Rengaraj D,shares his knowledge on the evolution of Linux,its powerful use cases,and its unparalleled flexibility.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2077.jpg.jpeg',
    date: '1 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc:'Mr.Rengaraj D,shares his knowledge on the evolution of Linux,its powerful use cases,and its unparalleled flexibility.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img76.jpg.jpeg',
    date: '1 July, 2024',
    filterType: ''
  },
    {
    title: 'Weekly MeetUp',
    desc: 'Mr.Rengaraj D,shares his knowledge on the evolution of Linux,its powerful use cases,and its unparalleled flexibility.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img%2075.jpg.jpeg',
    date: '1 July, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Sanjay K, a pre-final year student, explained about the neural networks and the training of ML model using python in Machine Learning.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img65.jpg',
    date: '28 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Sakkthivel T, a pre-final year student, delved into the workings and architectural aspects of Amazon Web Services, exploring the tools of cloud computing.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img64.jpg',
    date: '28 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhavakumar D, a pre-final year student, gave a lightning talk on the significance of Java and its diverse applications in the current world.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img63.jpg',
    date: '28 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Rishab H, a pre-final year student, emphasized a lightning talk on Hard Disk Data recovery working mechanism.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img62.jpg',
    date: '28 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Shruthi S, a second-year student, elucidated the complexity of SoundSynth-Streamlined Speech Summarization system, with a live demonstration of its capabilities.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img61.jpg',
    date: '28 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Ponnandhakumar P, a pre-final year student, explained the working of a Python-coded Telegram bot that he has developed and deployed it using API Keys.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img60.jpg',
    date: '28 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Aalia Fathima, a second year student, discussed about insightful explanation on Search Engine Optimization crucial for optimizing websites and enhancing online visibility.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img59.jpg',
    date: '21 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Emmanuel Prithish S, a second year student, gave a lightning talk on Machine Learning algorithms.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img58.jpg',
    date: '21 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Sanjay K, a pre-final year student, delivered a detailed overview of Amazon Athena for analyzing data stored in Amazon S3 using standard SQL.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img57.jpg',
    date: '21 March, 2024',
    filterType: ''
  },
  {
    title: 'March- HACKATHON',
    desc: 'Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img74.jpg',
    date: '15 March, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'March - HACKATHON',
    desc: 'Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img73.jpg',
    date: '15 March, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'March - HACKATHON',
    desc: 'Winners of the March Hackathon, where innovation and expertise collide in a showcase of problem-solving brilliance.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img72.jpg',
    date: '15 March, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'March - HACKATHON',
    desc: 'Winners of the March Hackathon, where innovation and expertise collide in a showcase of problem-solving brilliance.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img71.jpg',
    date: '15 March, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'March - HACKATHON',
    desc: 'Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img70.jpg',
    date: '15 March, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'March - HACKATHON',
    desc: 'Participants demonstrated their problem-solving skills and expertise, showcasing their innovative solutions during the energetic atmosphere of hackathon.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img69.jpg',
    date: '15 March, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Varshini S, a second year student, conducted a game on Technical connections based on programming languages.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img55.jpg',
    date: '14 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Johith Raj S S, a second year student, discussed about the concept of Multiple linear regression in machine learning.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img54.jpg',
    date: '14 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Ajitha M, a second year student, explained about the components and features of React JS.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img53.jpg',
    date: '14 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'An insightful two-round quiz was organized on Database Management System and Programming Languages, allowing participants to showcase their knowledge and skills comprehensively.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img52.jpg',
    date: '5 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Johith Raj S S, a second year student, demonstrated the concept of linear regression uing python in machine learning.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img51.jpg',
    date: '5 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhavakumar D,a pre-final year student, demonstrated QR code generation and decoding using Python.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img50.jpg',
    date: '5 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'A responsive quiz was conducted on python which offered participants an engaging opportunity to understand the concepts in depth.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img49.jpg',
    date: '1 March, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Johith Raj S S, a second year student, explained the concept of linear regression in machine learning.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img48.jpg',
    date: '1 March, 2024',
    filterType: ''
  },
  {
    title: 'Coding Contest - Coffee with Java',
    desc: 'Winners of February monthly coding contest - Coffee with Java, capturing the moment.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img68.jpg',
    date: '26 February, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Coding Contest - Coffee with Java',
    desc: 'Participants exhibited their problem-solving prowess in the programming contests, showcasing their skills and expertise effectively.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img67.jpg',
    date: '26 February, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Coding Contest - Coffee with Java',
    desc: 'Participants exhibited their problem-solving prowess in the programming contests, showcasing their skills and expertise effectively.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img66.jpg',
    date: '26 February, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhavakumar D, a pre-final year student, shared valuable insights on JavaScript code to unveil answers, demonstrating strategies for code comprehension.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img46.jpg',
    date: '23 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: "Rishab H, a pre-final year student, explored JavaScript's transformative capabilities, focusing on its complex methods for constructing web pages.",
    imgUrl: 'https://ik.imagekit.io/codersforum/img45.jpg',
    date: '23 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Kumar K, a pre-final year student, engaged in a detailed discussion concerning programming strategies and insights, particularly from the perspective of interview preparation.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img44.jpg',
    date: '20 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Sakkthivel T, a pre-final year student, delved into the building a Mass Email Automation System using Amazon Web Services, showcasing its architecture and functionalities.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img43.jpg',
    date: '20 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Jeswin Joseph J, a pre-final year student, provided a detailed overview of Django templates, emphasizing its workflow and essential role in web development.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img42.jpg',
    date: '20 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Kumar K,a pre-final year student, discussed the insights of Power BI and demonstrated a Data Visualization on Real Mart Analysis.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img41.jpg',
    date: '6 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'A Quiz game was enthusiastically conducted on C programming and javascript for participants to showcase their expertise and understanding across a diverse array of coding languages and concepts.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img40.jpg',
    date: '6 February, 2024',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Jerrish N,a pre-final year student, explained the features and workflow of Unity 3D.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img39.jpg',
    date: '6 February, 2024',
    filterType: ''
  },
  {
    title: 'PEC Code Quest',
    desc: 'Winners of PEC Code Quest, an Inter-Department Coding Contest conducted through Hackerrank.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img36.jpg',
    date: '23 January, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'PEC Code Quest',
    desc: 'Contestants Solving complex challenges in the Final round of PEC Code Quest.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img37.jpg',
    date: '23 January, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'PEC Code Quest',
    desc: 'Contestants solving challenges in the Semi-Final Round of PEC Code Quest.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img38.jpg',
    date: '22 January, 2024',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Rishab H, a pre-final year student, discussed about JS promise,await and also uses of it in async functions.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img35.jpeg',
    date: '22 December, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhavkumar D, a pre-final year student, discussed and demonstrated audio conferencing application in java with his real-time project.',       
    imgUrl: 'https://ik.imagekit.io/codersforum/img34.jpeg',
    date: '22 December, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Madhumitha V, a second year student, explained about Internet of Things,CV module and presented her project "Drowsiness Detection" on IOT.',   
    imgUrl: 'https://ik.imagekit.io/codersforum/img33.jpeg',
    date: '7 September, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Shruti S, a second year student, discussed about Google Firebase and explained her IOT project "Automatic fish feeder".',
    imgUrl: 'https://ik.imagekit.io/codersforum/img32.jpeg',
    date: '7 September, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Mohammed Jasim M, a second year student, gave a talk on Pygame and explained his project "Airspace".',
    imgUrl: 'https://ik.imagekit.io/codersforum/img31.jpeg',
    date: '7 September, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Hariharan B, a second year student, explained about the Pygame and demonstrated his project "Snake game".',
    imgUrl: 'https://ik.imagekit.io/codersforum/img30.jpeg',
    date: '31 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Arundhathi T, a pre-final year student, gave a brief note on Internet of Things.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img29.jpeg',
    date: '31 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Michael Josil M, a pre-final year student, imparted a detailed description about the Google Cloud.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img28.jpeg',
    date: '31 August, 2023',
    filterType: ''
  },
  {
    title: 'Coding Contest - #HASHKING',
    desc: 'Winners of August monthly coding contest - #HASHKING, immersing the moment.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img27.jpeg',
    date: '29 August, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Coding Contest - #include <craze.c>',
    desc: 'Winners of August monthly coding contest - #include <craze.c>, embracing the event.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img26.jpeg',
    date: '29 August, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'August Monthly Coding Contest',
    desc: "A showcase of programmers' atypical coding knowledge, as they test their problem-solving skills.",
    imgUrl: 'https://ik.imagekit.io/codersforum/img25.jpeg',
    date: '29 August, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Karthick V, a pre-final year student, explained the Django fundamentals with a live demo.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img24.jpeg',
    date: '17 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Ramanan K.B, a final year student, gave a guest lecture on how to choose a Framework with his own project.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img23.jpeg',
    date: '17 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Suresh H, a final year student, gave an insightful discussion on Frontend and Backend framework.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img22.jpeg',
    date: '17 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Raj Dhyaneshvar, a final year student, sparking curiosity with a lightning session on API Keys.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img21.jpeg',
    date: '10 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Rishab H, a pre-final year student, delved into  Git, Github and Netlify, simplifying version control and Web Hosting for all of us.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img20.jpeg',
    date: '10 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Jeswin Joseph J shared invaluable insights into Figma, guiding through its features and possibilities.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img19.jpeg',
    date: '10 August, 2023',
    filterType: ''
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img18.jpeg',
    date: '9 August, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img17.jpeg',
    date: '8 August, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img16.jpeg',
    date: '8 August, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Weekly MeetUp',
    desc: "Madhavakumar D, in an interactive and entertaining talk, discusses his skill and understanding in Python's KeyBoard Module.",
    imgUrl: 'https://ik.imagekit.io/codersforum/img13.jpeg',
    date: '4 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Jeswin Rhymond J, a pre-final year student, utilizing the MeetUp to get his questions answered.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img14.jpeg',
    date: '4 August, 2023',
    filterType: ''
  },
  {
    title: 'Weekly MeetUp',
    desc: 'Vasanth R, a Pre-Final Year student, gave a Lightning Talk about his current research.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img15.jpeg',
    date: '4 August, 2023',
    filterType: ''
  },
  {
    title: 'Coding Contest - [MATRICKS]',
    desc: "A showcase of participants' exceptional programming knowledge, as they test their problem-solving ability.",
    imgUrl: 'https://ik.imagekit.io/codersforum/img10.jpeg',
    date: '27 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Coding Contest - [MATRICKS]',
    desc: "A showcase of participants' exceptional programming knowledge, as they test their problem-solving ability.",
    imgUrl: 'https://ik.imagekit.io/codersforum/img11.jpeg',
    date: '27 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Coding Contest - [MATRICKS]',
    desc: 'Winners of July monthly coding contest - [MATRICKS], capturing the moment.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img12.jpeg',
    date: '27 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Club Inauguration',
    desc: 'Karthick V of III CSE D, Greeting the group with a welcome note',
    imgUrl: 'https://ik.imagekit.io/codersforum/img7.jpeg',
    date: '25 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Club Inauguration',
    desc: 'Snapshot of the special moment when our coding community came together, to mark the Inauguration of Coders Forum Club.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img8.jpg',
    date: '25 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Club Inauguration',
    desc: 'Mrs. Anitha Moses, Co-Ordinator, addressed the gathering. Her words left a lasting impact, inspiring and motivating all the audience.',        
    imgUrl: 'https://ik.imagekit.io/codersforum/img9.jpeg',
    date: '25 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img4.jpeg',
    date: '21 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img5.jpeg',
    date: '21 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img6.jpeg',
    date: '21 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img1.jpeg',
    date: '20 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img2.jpeg',
    date: '20 July, 2023',
    filterType: 'filter-highlight'
  },
  {
    title: 'Selection Round',
    desc: 'Participants, Presenting their innovative projects during the Selection Round, which was held to choose qualified Club Members.',
    imgUrl: 'https://ik.imagekit.io/codersforum/img3.jpeg',
    date: '20 July, 2023',
    filterType: 'filter-highlight'
  }
];


function escapeHTML(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// helps rendering description with no bugs
for (const obj of galleryData) {
  obj.desc = escapeHTML(obj.desc);  
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

// Initialize GLightbox
GLightbox({
  selector: ".portfolio-lightbox",
  touchNavigation: true,
});
