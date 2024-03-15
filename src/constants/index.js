import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    sql,
    tableau,
    powerBI,
    python,
    alteryx,
    python_1,
    tableau_1,
    sql_icon,
    sql_1,
    powerbi_1,
    python_2,
    tableau_2,
    python_3
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
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Analyst",
      icon: web,
    },
    {
      title: "Dashboard Developer",
      icon: mobile,
    },
    {
      title: "ETL Developer",
      icon: backend,
    },
    {
      title: "Business Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "Power BI",
      icon: powerBI,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Alteryx",
      icon: alteryx,
    },
    {
      name: "tableau",
      icon: tableau,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Graduate Mechanical Engineer",
      company_name: "Brisbane City Council (Transport for Brisbane)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2020 - July 2020",
      points: [
        "Collaborated with internal mechanics and technicians to plan, prepare, and execute comprehensive testing of the modified air-conditioning system for the Volvo B7 buses in the fleet.",
        "Wrote an analysis report, which detailed the testing outcomes, conclusions, and recommended modifications, and presented the findings to the fleet engineer, which resulted in the approval for the integration of modifications across the entire fleet.",
        "Played a pivotal role in a collaborative team effort that produced distinctive decals for the entire Brisbane bus fleet, addressing COVID-19 safety measures and promoting card-only payment methods."
      ],
    },
    {
      title: "Graduate Mechanical Engineer",
      company_name: "Brisbane City Council (Brisbane Infrastructure)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2020 - December 2021",
      points: [
        "Managed a team of four to successfully execute a comprehensive audit of aviation lights on the Eleanor Schonell Bridge. Collaborated with the communication team to inform the public, engaged with Translink to secure necessary permits for a one-night bridge closure, and organised traffic control to ensure the safety of the workers.",
        "Directed a team of ten to successfully deliver asphalt repairs on the Walter Taylor Bridge. Coordinated with the communication team to notify the public, collaborated with local police to obtain approvals for a four-night bridge closure, and hired traffic control to ensure the safety of the public and workers. The project was completed ahead of schedule and on budget.",
        "Led an internal team of six in the successful removal of crow's nests on the Brisbane Story Bridge. Worked with the communication team for public awareness initiatives and worked with the police to secure permissions for bridge closures and road safety measures. This project was completed on time and on budget.",
        "Oversaw an internal team of five in successfully cleaning the underside of the northern section of the Brisbane Story Bridge. Collaborated with an external private contractor to implement temporary scaffolding, ensuring the safety of the public during the project. Also, worked with external stakeholders to come up with a schedule for cleaning to happen. Successfully completed the project within the designated timeframe and budgetary constraints."
      ],
    },
    {
      title: "Customer Service Agent (ATO)",
      company_name: "ProbeCX",
      icon: shopify,
      iconBg: "#383E56",
      date: "January 2022 - November 2023",
      points: [
        "Demonstrated exceptional performance by achieving 98% or above in adherence, conformance, and attendance key performance indicators.",
        "Adhered to federal laws, ensuring the confidentiality, privacy, and integrity of customer information.",
        "Managed and appropriately escalated customer complaints or queries, while maintaining a focus on customer satisfaction and resolution.",
        "Provided valuable support to the manager in onboarding new staff, contributing to their seamless integration into the team, and, offered coaching when necessary.",
      ],
    },
    {
      title: "Data Analytics Consultant",
      company_name: "The Data School Down Under",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "February 2023 - February 2024",
      points: [
        "Successfully delivered web scraped data from private health insurance websites (i.e. Bupa, nib, iSelect) using custom Python code, which was transformed using Alteryx for a client in the private health insurance industry. The data assisted the client in organising their product and pricing strategy to be more competitive in the health insurance market.",
        "Transformed, analysed, and visualised IT help desk data for a Catholic education provider based in Parramatta. The client used the Tableau dashboard to identity which schools were having the most issues and the type of issues so that resources can be allocated accordingly.",
        "Visualised energy profiles in Tableau across different industries for a large energy retailer. The dashboard helped the client get an understanding of usage patterns to adapt their marketing strategy based on the industry.",
        "Analysed coal mining data for a Queensland government department, assessing the industry’s status in terms of active mines, how much they produced, and who they were competing with. Forecasting was also conducted on the revenue generated from mining royalties. These findings were presented in an exploratory Power BI report. The client was satisfied with the results, and they expressed interest in exploring revenue from royalties in more detail.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "50-Day Python Challenge",
      source: python,
      description:
        "In my pursuit of learning Python, I decided to follow “50 Days of Python, A Challenge a Day” by Benjamin Bennett Alexander, and learn Python by doing challenges.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "50dayChallenge",
          color: "green-text-gradient",
        },
      ],
      image: python_1,
      source_code_link: "https://github.com/tmich1997/50-days-of-python-challenge",
    },
    {
      name: "Marvel API Dashboard",
      source: tableau,
      description:
        "Utilised Alteryx to extract and transform data from the official Marvel API about Captain America, and visualised the evolution of comic book artwork with Tableau.",
      tags: [
        {
          name: "tableau",
          color: "blue-text-gradient",
        },
        {
          name: "marvel",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
        {
          name: "alteryx",
          color: "blue-text-gradient",
        },
      ],
      image: tableau_1,
      source_code_link: "https://public.tableau.com/views/CaptainAmericaShieldofValor-MARVELAPI/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    },
    {
      name: "SQL Murder Mystery",
      source: sql_icon,
      description:
        "I wanted to improve my SQL skills and I found a challenge involving a murder and used only SQL (using an SQLite database) to solve the murder mystery.",
      tags: [
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "sqlLite",
          color: "green-text-gradient",
        },
      ],
      image: sql_1,
      source_code_link: "https://github.com/tmich1997/sql-murder-mystery",
    },
    {
      name: "Power BI WoW Challenge",
      source: powerBI,
      description:
        "This Power BI Workout Wednesday (WoW) challenge was to visualise the change in the average length of a baseball game from 1960 to 2023.",
      tags: [
        {
          name: "powerBI",
          color: "blue-text-gradient",
        },
        {
          name: "wow2023",
          color: "green-text-gradient",
        },
        {
          name: "dax",
          color: "pink-text-gradient",
        },
      ],
      image: powerbi_1,
      source_code_link: "https://www.novypro.com/project/wow2023-w20-power-bi-remake-of-tableau-length-of-baseball-games",
    },
    {
      name: "IMDB Web Scraper",
      source: python,
      description:
        "Web scraping data about the TV show Friends from IMDB using Python Requests library and transforming the data using the Pandas library.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "imdb",
          color: "green-text-gradient",
        },
        {
          name: "jupyterNotebook",
          color: "pink-text-gradient",
        },
      ],
      image: python_2,
      source_code_link: "https://github.com/tmich1997/imdb-friends-web-scraper",
    },
    {
      name: "Space X API Dashboard",
      source: tableau,
      description:
        "Utilised Alteryx to extract and transform data from the Space X API, and visualised the cost effectiveness of the rockest compared to other rockets from history.",
      tags: [
        {
          name: "tableau",
          color: "blue-text-gradient",
        },
        {
          name: "spaceX",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
        {
          name: "alteryx",
          color: "blue-text-gradient",
        },
      ],
      image: tableau_2,
      source_code_link: "https://public.tableau.com/views/SpaceXAPI/Origin?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link",
    },
    {
      name: "Naruto API",
      source: python,
      description:
        "Utilised Python to extract and transform data from the Naruto API (Dattebayo). An ERD diagram was also made to guide how the tables are connected.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "naruto",
          color: "green-text-gradient",
        },
        {
          name: "restAPI",
          color: "pink-text-gradient",
        },
        {
          name: "jupyter",
          color: "blue-text-gradient",
        },
      ],
      image: python_3,
      source_code_link: "https://github.com/tmich1997/naruto-api-data",
    },
  ]
  
  const educations = [
    {
      title: "Bachelor of Engineering (Mechanical) (Honours)",
      university_name: "University of the Sunshine Coast",
      date: "June 2015 - June 2019",
      points: [
        "Completed the degree with an Honours Class I",
        "2017 L.E.W. Mosel Prize: Highest achieving Second Year Civil Engineering student.",
        "2019 University Commendation for Academic Excellence."
      ]
    },
    {
      title: "Graduate Certificate in Data Science (Applied)",
      university_name: "University of Adelaide",
      date: "January 2022 - August 2022",
      points: [
        "Successfully completed courses related to data science, data modelling, data visualisation, and data transformations",
        "Utilised industry software and libraries like Python, R & RStudio, Matplotlib, NumPy, and Pandas",
        "Completed assessment projects which involved exploratory data analysis, building predictive models, and dealing with messy data"
      ]
    },
    {
      title: "Software Engineering: Transform (Bootcamp)",
      university_name: "Academy Xi",
      date: "February 2022 - December 2022",
      points: [
        "10-month bootcamp with course cirriculum powered by Flatiron School",
        "Full-stack development in React, JavaScript, SQL, Ruby, and Rails",
        "Completed 5-projects with varying complexities"
      ]
    },



  ];
  
  export { services, technologies, experiences, projects, educations };