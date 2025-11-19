// import PHP from "../img/php.png";
import Bootstrap from "../img/bootstrap.png";
// import Codeigniter from "../img/codeigniter.svg";
import CSS from "../img/css.png";
// import Docker from "../img/docker.png"
import Express from "../img/express.webp";
// import Git from "../img/git.png";
// import Github from "../img/github.svg";
import HTML from "../img/html.png";
import Js from "../img/js.png";
// import Laravel from "../img/laravel.png";
// import Mongo from "../img/mongo.png";
// import MySql from "../img/mysql.png";
import Next from "../img/neext.svg";
import Node from "../img/node.png";
import Postgres from "../img/postgres.jpg";
import React from "../img/react.png";
import Tailwind from "../img/tailwind.png";
import Typescript from "../img/typescript.png";

//image
import Bg1 from "../img/bg/bankids.png";
import Bg2 from "../img/bg/nanavarna.png";
import Bg3 from "../img/bg/fige.png";
import Bg4 from "../img/bg/dorma.png";
import Bg5 from "../img/bg/porto.png";
import Bg6 from "../img/bg/topsis.png";

const dataProjects = [
  {
    id: 1,
    title: "Bank Kids",
    category: "Education Platform ",
    desc: "Bank kids simulation game application for early childhood financial literacy",
    image: Bg1,
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "Typescript", icon: Typescript },
      { name: "Next.Js", icon: Next },
      { name: "Tailwind", icon: Tailwind },
    ],
    link: "https://bank-kids.vercel.app",
  },
  {
    id: 2,
    title: "Nana Varna",
    category: "Education Platform",
    desc: "Game Simulation is a learning media for children to recognize colors.",
    image: Bg2,
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "Typescript", icon: Typescript },
      { name: "Next.Js", icon: Next },
      { name: "Tailwind", icon: Tailwind },
    ],
    link: null,
  },
  {
    id: 3,
    title: "Find Geometry",
    category: "Education Platform",
    desc: "Learning media games introduce geometry to children",
    image: Bg3,
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "Typescript", icon: Typescript },
      { name: "Next.Js", icon: Next },
      { name: "Tailwind", icon: Tailwind },
    ],
    link: "https://finds-geometri.vercel.app/",
  },
  {
    id: 4,
    title: "Dorma Mada Perkasa",
    category: "Company Profile",
    desc: "Company profile website according to the requests and characteristics of the company",
    image: Bg4,
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "Javascript", icon: Js },
      { name: "React.js", icon: React },
      { name: "Bootstrap", icon: Bootstrap },
    ],
    link: null,
  },
  {
    id: 5,
    title: "Portofolio",
    category: "Portofolio Website",
    desc: "Portofolio website with simple and minimalist design",
    image: Bg5,
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "Typescript", icon: Typescript },
      { name: "Next.js", icon: Next },
      { name: "Tailwind", icon: Tailwind },
    ],
    link: "https://binsar-portofolio.vercel.app",
  },
  {
    id: 6,
    title: "Topsis",
    category: "Decision Support System",
    desc: "A web-based system to determine children's talents using the TOPSIS decision-making method, helping parents and educators identify strengths more accurately.",
    image: Bg6,
    tech: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "Javascript", icon: Js },
      { name: "React", icon: React },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Express.js", icon: Express },
      { name: "Node", icon: Node },
    ],
    link: null,
  },
];

export default dataProjects;
