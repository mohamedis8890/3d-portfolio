import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  postgresql,
  firebase,
  canva,
  docker,
  svu,
  udacity,
  aws,
  google,
  freecodecamp,
  firegram,
  weather,
  nextjs,
  relator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const certifications = [
  {
    title: "Bachelor of Accounting",
    company_name: "South Valley University",
    icon: svu,
    iconBg: "#fff",
    date: "Feb 2007 - May 2011",
    points: [
      "Learned applicable accounting procedures and standards that are needed in a wide range of organization types and sizes.",
      "Learned how to account for  corporations, sole proprietorship firms, charity organizations, clubs, banks and even the government agencies.",
      "Learned about modern computer-aided accounting systems like ERP.",
    ],
  },
  {
    title: "Responsive Web Design",
    company_name: "FreeCodeCamp",
    icon: freecodecamp,
    iconBg: "#fff",
    date: "Jun 2019 - Jul 2019",
    points: [
      "The certification spun about 300 hours of course work.",
      "Taghut me essential but modern web skills such as HTML, CSS, Bootstrap.",
      "Taghut me to design and build responsive web apps that run smoothly and render seamlessly on all devices.",
    ],
  },
  {
    title: "Advanced Web Development",
    company_name: "Udacity",
    icon: udacity,
    iconBg: "#fff",
    date: "Jun 2020 - Jul 2020",
    points: [
      "Learned the basics of Rest APIs and how to build an API.",
      "Learned SQL and how to build and integrate a PostgreSql database.",
      "Learned to implement an Identity and Access Management system with Auth0.",
    ],
  },
  {
    title: "Google IT Support Certification",
    company_name: "Google",
    icon: google,
    iconBg: "#fff",
    date: "Aug 2021 - Sep 2021",
    points: [
      "Learned the basics of Computing and Networking.",
      "Learned the basics of how to secure an infrastructure.",
      "Learned to administer Linux and Windows web servers.",
    ],
  },
  {
    title: "React Development Cross-Skilling",
    company_name: "Udacity",
    icon: udacity,
    iconBg: "#fff",
    date: "Jan 2022 - Jan 2022",
    points: [
      "Learned to build declarative user interfaces for the web with React.",
      "Learned to create modular and custom components that can be reused all over my application.",
      "Learned about React Router are and how to create multiple routes on my application, making it more dynamic.",
      "Learned about React hooks and how they are important for the performance and speed of my web app.",
    ],
  },
  {
    title: "AWS Certified Cloud Practitioner",
    company_name: "AWS",
    icon: aws,
    iconBg: "#fff",
    date: "Jan 2022 - Jan 2022",
    points: [
      "Got a fundamental understanding of IT services and their uses in the AWS Cloud.",
      "Became able to demonstrate cloud fluency and foundational AWS knowledge.",
      "Became able to identify essential AWS services necessary to set up AWS-focused projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Relator",
    description:
      "Realestate listing web app that can search for rent and sale realestate and display all of its features and sale/rent price.",
    tags: [
      {
        name: "Next.js",
        color: "text-slate-400",
      },
      {
        name: "chakraui",
        color: "text-teal-500",
      },
      {
        name: "rapidapi",
        color: "text-blue-400",
      },
    ],
    image: relator,
    source_code_link: "https://github.com/mohamedis8890/realstate",
    demo_link: "https://realstate-nine.vercel.app/",
  },
  {
    name: "FireGram",
    description:
      "A serverless photo gallery that supports uploading photos and persisting them on Google's Firebase & Firestore, comming soon: authentication & authorization, so that users can upload their own photos and control their visiblity to the public.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "text-yellow-400",
      },
    ],
    image: firegram,
    source_code_link: "https://github.com/mohamedis8890/firegram",
    demo_link: "https://firegram-kappa.vercel.app/",
  },
  {
    name: "Weather Anywhere",
    description:
      "A weather app that utilizes Google's Places API to display weather data and a photo of any place around the world and can locate user's location and display it's data. For deployment, this app has a CI/CD cylcle implemented with Github Actions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "google_places_api",
        color: "text-blue-600",
      },
      {
        name: "styled_components",
        color: "text-pink-400",
      },
      {
        name: "github_actions",
        color: "text-zinc-200",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/mohamedis8890/react-weather",
    demo_link: "https://mohamedis8890.github.io/react-weather/",
  },
];

export { services, technologies, certifications, testimonials, projects };
