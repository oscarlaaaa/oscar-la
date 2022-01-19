const projects = [
  {
    title: "Badminton Singles API",
    type: "API",
    categories: ["web"],
    timeframe: "3 months",
    slogan:
      "I got IP banned while making this project so I hope you appreciate it.",
    technologies: "Python, AWS API Gateway, AWS Lambda, MySQL",
    github: "https://github.com/oscarlaaaa/badminton-api",
    link: "https://badminton-api.com",
    videourl: null,
    mainimg: "https://i.imgur.com/kkO6VZr.png",
    images: ["https://i.imgur.com/f93bvwn.png", "https://i.imgur.com/b4jvjO8.png"],
    description:
      "A web-scraper API that regularly scrapes BWF player, match, and tournament data and compiles them into an easy-to-consume, publicly available RESTful API.",
    features: [
      "Regularly scrapes, compiles, and stores all relevant tournaments, players, and matches above BWF World Tour 100 level between 2007 and presnt day",
      "Exposes multiple convenient API endpoints for easy consumption",
      "Flexible endpoints to provide tailored data/results in every query",
      "Detailed landing page with descriptions and examples on how to use the API effectively",
      "Asynchronous-first design to ensure quick and stable response times",
    ],
  },
  {
    title: "Cats In Space!",
    type: "Game",
    categories: ["game"],
    timeframe: "3 days",
    slogan:
      "Join forces with the Catmmando army and protect your space fortress!",
    technologies: "Unity, C#",
    devpost: "https://devpost.com/software/cosmic-fortress",
    link: "https://play.unity.com/mg/other/cats-in-space",
    videourl: null,
    mainimg:
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/660/380/datas/original.png",
    images: [
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/660/394/datas/original.png",
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/660/407/datas/original.png",
      "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/665/195/datas/original.jpg",
    ],
    team: [
      { name: "Sally Poon", link: "https://github.com/sallyklpoon" },
      { name: "Raymond Wong", link: "https://github.com/ray165" },
      { name: "Nolan Nordwall", link: "https://github.com/Nosewall" },
    ],
    description:
      "Have you ever wondered what happens when you send a cat into space? You get a tower-defense game! Space Cats is a 2D tower-defense game built for Hack The North 2021, we misinterpreted the judging section and ended up going for a space theme. Nonetheless, this project has allowed us to foray into the intricacies of game design and the Unity game engine.",
    features: [
      "Randomized map generation - different playthrough every run!",
      "Working player health and money system",
      "Space cats that shoot airplanes!!",
      "Upbeat and exciting sound design",
    ],
  },
  {
    title: "Drive Badminton Centre Info System",
    type: "Web Application/Enterprise",
    categories: ["web", "full-stack", "enterprise"],
    timeframe: "9 months (axed :C)",
    slogan:
      "this combines the two things i love: badminton, and not having to read bad handwriting.",
    technologies: "RubyOnRails, React.js, PostgreSQL, Electron.js",
    videourl: null,
    mainimg: "https://dummyimage.com/600x400/000/fff",
    images: [],
    team: [{ name: "Vivian Wu", link: "https://github.com/vvnwu" }],
    description:
      'Formed from our love for badminton and a burning sense of "I could make something better than that", we have pitched a badminton information system that integrates all relevant business factors including stringing, court bookings, lessons, and more! My first paid programming job B)',
    features: [
      "Researched, formulated, and pitched an integrated information system to solve business deficiencies.",
      "Outlined roadmap, cost estimates, and possible features with the feedback of the business owner.",
      "Currently learning RubyOnRails and structuring app features, layout, and code structure.",
    ],
  },
  {
    title: "ScoutNinja",
    type: "Mobile Web Application/API/Game",
    categories: ["web", "game", "full-stack", "mobile"],
    timeframe: "6 weeks",
    slogan: "why go outside when you can go outside, inside?",
    technologies:
      "Javascript, PostgreSQL, React.js, Axios, Prisma, Heroku, Google Firebase, Bootstrap",
    link: "https://scoutninja.herokuapp.com",
    github: "https://github.com/oscarlaaaa/scout-ninja",
    videourl: "GDy6DT4wyDQ",
    images: [
      "https://i.imgur.com/tFPYMmN.png",
      "https://i.imgur.com/LZoMBTw.png",
      "https://i.imgur.com/PgOPQcV.png",
      "https://i.imgur.com/sSEVdhX.png",
    ],
    team: [
      { name: "Harry He", link: "https://github.com/cynicalmanatee" },
      { name: "Kenneth Ng", link: "https://github.com/kennethclng/" },
      { name: "Sehwan Lee", link: "https://github.com/saskaros" },
    ],
    description:
      'Searching! Exploring! Sharing! Built for our COMP2800 projects course under the theme of "promoting friendly connections", our group decided to make a mobile scavenger hunt game. Taking inspiration from Geoguesser, users will create their own scavenger hunts and share with their friends. Compete for the highest spot on the leaderboards, or simply play for fun!',
    features: [
      "Dynamic authentication using Google Firebase for a unique user experience.",
      "Persistent data storage using PostgreSQL to handle all user, game, friend, and scoring information.",
      "Uniquely styled UI/UX design made mostly from scratch (and love).",
      "Fully functional ranking and leaderboard system to provide a competitive incentive to play.",
      "Customizable user profiles that are displayed to all other players.",
      "Bare-bones friends list (WIP).",
      "Enjoyable gameplay loop centered around creating unique challenges and sending them to your friends.",
    ],
  },
  {
    title: "Job Hunt Simulator",
    type: "Game",
    categories: ["game"],
    timeframe: "3 days",
    awards: ["Top 10 Project - AtlasHacks2 2021"],
    slogan:
      "\"can't find a job? just use the shotgun method!\" - someone who didn't mean to be taken literally",
    technologies: "Unity, C#",
    devpost: "https://devpost.com/software/placeholder-g1ncqu",
    github: "https://github.com/oscarlaaaa/shotgun-resume",
    videourl: "vW42zt5WsRo",
    images: [
      "https://i.imgur.com/cJuodZY.png",
      "https://i.imgur.com/Xj54Cwm.png",
      "https://i.imgur.com/XpIsRKw.png",
      "https://i.imgur.com/54jgiNW.png",
    ],
    team: [
      {
        name: "Samuel Tjahjadi",
        link: "https://github.com/SamuelT95",
        role: "Gun and Environment Manager",
      },
      {
        name: "Harry He",
        link: "https://github.com/cynicalmanatee",
        role: "Enemy and Boss Designer",
      },
      {
        name: "Henry Meng",
        link: "https://github.com/fish10222",
        role: "Enemy Pathfinding and Function Developer",
      },
    ],
    description:
      'Inspired by the infamous "Shotgun Method" of job applications, this game designed for AtlasHacks2 2021 takes job hunting a bit too literal. Shoot resumes at managers with a shotgun (that we forgot to replace with a printer model; whoops!) in hopes of landing your dream job, just be careful of the final technical interview!!',
    features: [
      "Enjoyable (mostly-functional) gameplay loop of shooting managers, fighting the technical interview, and upgrading skills.",
      "Enemy spawner, pathfinding, custom model, and cute animations.",
      "Functional upgrade system.",
      "Custom-built environments that lend to an expansive, exciting experience.",
      "Enthralling (subjective) boss battle with custom boss model and projectiles.",
      "Realistic gun sound effects.",
    ],
  },

  {
    title: "Zorped",
    type: "Discord Bot",
    categories: ["misc"],
    timeframe: "2 weeks",
    slogan: '"how to trigger 2021 students : zorp" - joshua martinez, 2021',
    technologies: "Java, MySQL, Discord4j",
    github: "https://github.com/oscarlaaaa/zorped-dnd",
    videourl: null,
    mainimg: "https://i.imgur.com/N7KCNKD.png",
    images: [
      "https://i.imgur.com/3ltMnca.png",
      "https://i.imgur.com/NSZXFbn.png",
    ],
    team: [{ name: "Harry He", link: "https://github.com/cynicalmanatee" }],
    description:
      "Named after an infamous question in our Java question, Zorped is a Discord bot with reminder functionalities, allowing users to store, view, and delete reminders as well as providing regular updates when the reminder event is soon.",
    features: [
      "Name inspired by our infamous COMP1510 final exam.",
      "Persistent data storage using MySQL to accurately hold all reminders.",
      "Simple command system that provides easy access to all bot functionality including adding, deleting, and updating.",
      "Timer and time-checking system to provide reminders at regular intervals prior.",
      "Adorable cat profile picture (not biased).",
    ],
  },
  {
    title: "Locaf",
    type: "Mobile Web Application",
    categories: ["web", "mobile", "full-stack"],
    timeframe: "3 months",
    slogan: "need a place to study? locaf no further!",
    technologies: "HTML, CSS, JS, Google Firebase, Google Firestore",
    link: "https://locaf-f1e23.web.app/",
    github: "https://github.com/oscarlaaaa/Locaf",
    videourl: null,
    mainimg: "https://i.imgur.com/a0tXgn1.png",
    images: [
      "https://i.imgur.com/ArBmLgo.png",
      "https://i.imgur.com/erMjOEy.png",
      "https://i.imgur.com/H7KiTss.png",
      "https://i.imgur.com/KUWa5Ui.png",
    ],
    team: [
      { name: "Richard Mac", link: "https://github.com/richardmac604" },
      { name: "Neeraj Kumar", link: "https://github.com/Neerajkumar555" },
      { name: "Parsa Boojari", link: "https://github.com/Prs-bjr-81" },
    ],
    description:
      "Location + Cafe = Locaf. A mobile web application that curates productive environments for users to study based off of inputted preferences, Locaf serves to help users find locations where they can be most productive as well as supporting local businesses by making them more accessible.",
    features: [
      "Basic storage/query functions for locations and user info using Firestore.",
      "Dynamic authentication system to provide a unique and curated user experience.",
      "Search functionality with adjustable preferences.",
      "Explore section that provides suggestions for different categories of locations.",
      "Location review, commenting, and rating system.",
      "Responsive layout that accomodates both mobile and web views.",
    ],
  },
];

export default projects;
