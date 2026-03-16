/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jacob Jawakar",
  title: "Hi all, I'm Jacob",
  subTitle: emoji(
    "A passionate Data Engineer 🚀 with strong interest in building scalable data pipelines and analytics solutions using Python / SQL / PySpark / Power BI and modern data technologies."
  ),
  resumeLink:
    "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jaco-sys",
  linkedin: "https://www.linkedin.com/in/jacob-jawakar-3a3ba02b2/",
  gmail: "jacobjawakar16@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING DATA ENGINEER PASSIONATE ABOUT BUILDING DATA PIPELINES AND ANALYTICS SYSTEMS",
  skills: [
    emoji(
      "⚡ Build scalable data pipelines and ETL workflows using Python and SQL"
    ),
    emoji("⚡ Process and analyze large datasets using PySpark and distributed data processing"),
    emoji(
      "⚡ Create interactive dashboards and business insights using Power BI"
    ),
    emoji("⚡ Work with databases, data warehousing, and data modeling for analytics")
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Apache Spark",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Microsoft Fabric",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Ms-Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "Html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Bigdata",
      fontAwesomeClassname: "fas fa-database"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SRM University",
      logo: require("./assets/images/srm-institute.png"),
      subHeader: "Master of Science in Computer Application",
      duration: "june 2023 - May 2025",
      
    },
    {
      schoolName: "Don Bosco College Of Arts & Science",
      logo: require("./assets/images/don-bosco-logo.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "June 2020 - May 2023",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python ", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Sql/Pyspark",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Enginnering",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT HELPED ME TO UNDERSTAND DEEP ABOUT DATA ",
  projects: [
    {
      image: require("./assets/images/traffic-lights-sign-logo.png"),
      projectName: "Traffic Death Analysis",
      projectDesc: "Built a **PySpark ETL pipeline for 153K+ road accident records and created Power BI dashboards for analysis.**",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/jaco-sys/pakisthan_teraffic_accidents"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/power-bi.png"),
      projectName: "Student Course Analysis",
      projectDesc: "Developed a Power BI dashboard for student course performance and enrollment analysis",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/jaco-sys/PowerBI-Student-Course-Analytics-Dashboard"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications 🏆 "),
  subtitle:
    " Certifications that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-700)",
      subtitle:
        "Microsoft Certified Fabric Analytics Engineer Associate skilled in building data pipelines, managing data warehouses, and delivering analytics solutions using Microsoft Fabric.",
      image: require("./assets/images/microsoft-logo.png"),
      imageAlt: "Microsoft certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/jacobJawakar-7376/A7B1FDA66ED55713?sharingId=5C12B2F34C17121A"
        }
        
      ]
    },
    {
      title: "Udemy Python Bootcamp",
      subtitle:
        "Completed Python Bootcamp covering Python programming, data structures, problem solving, and building real-world applications.",
      image: require("./assets/images/udemy-logo-.png"),
      imageAlt: "Udemy certification",
      footerLink: [
        {
          name: "Cerfitication",
          url: "https://www.udemy.com/certificate/UC-c1e264f8-4389-4980-bea4-4988b8be2e7d/"
        }
      ]
    },

    {
      title: "Python data Analytics",
      subtitle: "Completed certification in Python Data Analytics covering data manipulation, visualization, and analytical techniques",
      image: require("./assets/images/coursera-logo.png"),
      imageAlt: "coursera certification",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/verify/MFQW3P6FNPZ9"}
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "just want to say hi? My Inbox is open for all.",
  number: "+91 6380912897",
  email_address: "jacobjawakar16@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
