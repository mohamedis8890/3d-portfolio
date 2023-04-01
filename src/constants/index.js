import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
  carrent,
  jobit,
  tripguide,
  nextjs,
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
  /*{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },*/
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, certifications, testimonials, projects };
