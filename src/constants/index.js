import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    
    cpp,
    git,
    java,
    go,
    dJango,
    nextjs,
    pinnacleEdu,
    usosu,
    mincrosft,
    
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Passionate Learner",
      icon: creator,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "Creative Thinker",
    //   icon: mobile,
    // },
  ];
  
  const technologies = [
    {
      name: "git",
      icon: git,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Go",
      icon: go,
    },
    {
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name:"nextjs",
      icon: nextjs,
    },
    {
      name: "dJango",
      icon: dJango,
    },
  ];
  

  const experiences = [
    {
      title: "Marketing Analyst Intern",
      company_name: "US Overseas Student Union",
      icon: usosu,
      iconBg: "#383E56", 
      date: "Mar 2023 - May 2023",
      points: [
        "Utilized data-driven strategies to identify and cultivate potential collaborations, broadening our event's appeal and reach.",
        "Created and managed a comprehensive database for storing and analyzing marketing data, facilitating informed decision-making and the formulation of efficient marketing strategies.",
        "Employed data analytics to uncover hidden patterns and trends, providing valuable insights that guided our marketing initiatives and boosted event success by 60%"
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "US Overseas Student Union",
      icon: usosu,
      iconBg: "#E6DEDD", 
      date: "Apr 2023 - Present",
      points: [
        "Effectively transformed the organization's online presence, employing PHP and database management skills to build and maintain their website.",
        "Designed and implemented responsive website layouts, optimized site performance, and ensured an engaging and user-friendly interface."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Pinnacle Education Consulting",
      icon: pinnacleEdu,
      iconBg: "#383E56", 
      date: "May 2023 - Present",
      points: [
        "Conceptualized and constructed a comprehensive web application from scratch, leveraging expertise in React, the Next.js framework, and Tailwind CSS for frontend design and development.",
        "Seamlessly integrated OpenAI API into our platform, harnessing the power of artificial intelligence to bolster web application functionality.",
        "Devised and implemented potent SEO strategies, resulting in a 48% increase in website visibility and improved user engagement."
      ],
    },
    {
      title: "Teals Volunteer",
      company_name: "Volunteer Experience",
      icon: mincrosft,
      iconBg: "#E6DEDD", 
      date: "July 2023 – Present",
      points: [
        "Played a key role in educating both teachers and students about computer science.",
        "Helped teachers learn how to effectively instruct computer programming and directly mentored students. I utilized my computer science expertise in a unique educational setting and made a significant impact on the development of future technologists."
      ],
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
  
  export { services, technologies, experiences, projects };