import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import blog from "../assets/projects/blog.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. I am committed to continuous learning and improvement to stay at the forefront of technology.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb 2024 - Present",
    role: "Full Stack Developer",
    company: "Total Synergy Concepts",
    description: `I am currently engaged in converting a company's Classic ASP website to React.js, while also integrating additional functionalities. This project involves modernizing the existing platform to improve performance, enhance user experience, and provide a more robust and scalable solution.`,
    technologies: ["React.js", "Tailwind", "SQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Nodit",
    image: project1,
    description:
      "This web app facilitates community building, allowing users to create, join, and engage in public and private communities through post likes and comments.",
    technologies: [ "React","TailWind", "Node.js", "MongoDB"],
  },
  {
    title: "CryptoStats",
    image: project2,
    description:
      "This web app provides cryptocurrency information, trends, and news. Users can add coins to their watchlist for easy tracking.",
    technologies: [ "React","Tailwind", "Firebase"],
  },
  {
    title: " Sentinel Shield",
    image: project3,
    description:
      "Developed an API ensuring user safety during chat by seamlessly detecting and filtering NSFW content, phishing URLs, and inappropriate language. Implemented robust child safetyfeatures, actively safeguarding users from potential online risks.",
    technologies: ["Python", "Mobilenet", "NodeJs", "XGboost"],
  },
  {
    title: "Blogging Platform",
    image: blog,
    description:
      "Developed a secure blog application allowing users to add, edit, and categorize blogs with photos:Implemented personalized commenting system, ensuring users can only edit their own comments and requiring login for blog access.",
    technologies: ["ReactJs", "NodeJs", "Express", "MongoDB"],
  },
  {
    title: "Topsis",
    image: project4,
    description:
      "Introduced a Python package for TOPSIS (Technique for Order Preference by Similarity to IdealSolution): to streamline multi-criteria decision-making. Published on PyPi.org, this tool allows easy command-line ranking of datasets.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  phoneNo: "+918360527346",
  email: "sailishmakkar650@gmail.com",
};
