import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {DiPhp,DiPython,DiDjango} from "react-icons/di";
import {SiJsonwebtokens,SiMysql} from "react-icons/si";
import {
  SiExpressServer,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiSocketdotio,
  SiJest,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { Icon } from "@chakra-ui/react";

export const Skills = [
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaReact}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    work: "I have used  react in my projects and have experience in using it in atleast 20 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaNodeJs}
        w={10}
        h={10}
        color="green"
      />
    ),
    title: "NodeJS",
    description:
      "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user.",
    work: "I have used Node in my projects and have experience in using it in atleast 15 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiExpressServer}
        w={10}
        h={10}
        color="green"
      />
    ),
    title: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    work: "I have used Express in my projects and have experience in using it in atleast 15 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiMongodb}
        w={10}
        h={10}
        color="green"
      />
    ),
    title: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB eschews the use of tables and implements data as flat documents with efficient storage and retrieval.",
    work: "I have used MongoDB in my projects and have experience in using it in atleast 5 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={DiPhp}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "PHP",
    description:
      "PHP is a recursive acronym for PHP: Hypertext Preprocessor. PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites",
    work: `I have used PHP in my projects and have experience in using it in atleast 7 different projects `,
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiMysql}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "SQL",
    description:
      "SQL stands for Structured Query Language which is basically a language used by databases. This language allows to handle the information using tables and shows a language to query these tables and other objects related (views, functions, procedures, etc.)",
    work: `I have used SQL in my projects and have experience in using it in atleast 7 different projects `,
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={DiPython}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "Python",
    description:
      "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name Python is a nod to the British comedy group Monty Python",
    work: `I have used Python in my projects and have experience in using it in atleast 5 different projects`,
  },

 
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={DiDjango}
        w={10}
        h={10}
        color="grey"
      />
    ),
    title: "Django",
    description:
      "Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel",
    work: "I have used Django in my projects and have experience in using it in atleast 5 different projects",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiNextdotjs}
        w={10}
        h={10}
        color="grey"
      />
    ),
    title: "NextJS",
    description:
      "Next.js is a JavaScript framework for building efficient and accessible websites and applications. It is maintained by the React community and the open-source ecosystem.",
    work: "I have used Next.js in my projects and have experience in using it in atleast 2 different projects",
  },
  
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiPostgresql}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "Postgres",
    description:
      "PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness.",
    work: "I have used Postgres in my projects and have experience in using it in atleast 10 different projects",
  },

 
  

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaSass}
        w={10}
        h={10}
        color="red"
      />
    ),
    title: "Sass",
    description:
      "Sass is an extension of CSS that adds nested rules, variables, mixins, selector inheritance, and more. Sass is maintained by Twitter and a community of individual developers and companies. Sass can be used as a base in the development of single-page or mobile applications.",
    work: "I have used Sass along side CSS in all my projects   ",
  },

  

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiJsonwebtokens}
        w={10}
        h={10}
        color="orange"
      />
    ),
   
    title: "JWT",
    description:
      "JWT is a JSON Web Token. It is maintained by the Node.js Foundation and a community of individual developers and companies. JWT can be used as a base in the development of single-page or mobile applications.",
    work: "I have used JWT in my projects for authentication and have experience in using it in atleast 5 different projects",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiHtml5}
        w={10}
        h={10}
        color="orange"
      />
    ),
    title: "HTML",
    description:
      "HTML is the standard markup language for creating web pages. It is maintained by the World Wide Web Consortium (W3C). HTML can be used as a base in the development of single-page or mobile applications.",
    work: "I have used HTML in my projects and have experience in using it in atleast 5 different projects ",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiCss3}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "CSS",
    description:
      "CSS is a style sheet language used for describing the presentation of a document written in a markup language. CSS is maintained by the World Wide Web Consortium (W3C). CSS can be used as a base in the development of single-page or mobile applications.",

    work: "I have used Sass along side CSS in all my projects  ",
  },
];

export const porjects = [
  {
    title: "Medixo",
    description: ` Allow the user to take appointments with doctors online`,
    image: "https://i.imgur.com/E98L55O.png",
    tags: ["Nextjs", "Django","Tailwind"],
    link: "https://medixo-front.vercel.app/",
    github: "https://github.com/Geeks-Python",
  },
  {
    title: "PythonStation",
    description: `playing racing game by interacting with Steering Wheel using motion detections `,
    image: "https://i.imgur.com/LChlISc.png",
    tags: ["Python", "Pygame", "Open-cv"],
    link: "https://github.com/Geeks-Python/PythonStation",
    github: "https://github.com/Geeks-Python/PythonStation",
  },
  {
    title: "studystation",
    description: `An online programing courses website where users can take courses to earn new programming skill set or improve it.`,
    image: "https://i.imgur.com/pD2N8yS.png",
    tags:["React", "NodeJS", "Express","MongoDB"],
    link: "https://studystation.netlify.app/",
    github: "https://github.com/Attack-On-React",
  },

  {
    title: "CodeicBoot",
    description: `A website for online programming courses where users can take courses to gain or improve a new programming skillset.`,
    image: "https://i.imgur.com/mfm8rHf.png",
    tags:  ["Vanilla JS", "HTML", "CSS"],
    link: "https://javascript-warriors.github.io/CodeicBoot/",
    github: "https://github.com/JavaScript-Warriors/CodeicBoot",
  },
  {
    title: "Library",
    description: `Our Periodical Library gives you the access and the ability to borrow the Books, Periodicals, Magazines, Researches.`,
    image: "https://i.imgur.com/XsTCuTE.png",
    tags:  ["PHP","MySQL","JavaScript", "HTML", "CSS"],
    link: "https://github.com/RihanFoudeh/library",
    github: "https://github.com/RihanFoudeh/library",
  },
];
