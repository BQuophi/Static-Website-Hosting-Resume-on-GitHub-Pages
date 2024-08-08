const profileData = {
    title: "Resume",
    name: "Bernard Zephaniah Addo-Addo",
    sub_title: "Data Scientist/Data Analyst",
    logoURL: "assets/images/dp.jpg",
    about: {
      intro: `Results-driven data professional with a background in actuarial and financial analysis with a proven ability to fulfill business needs and objectives through research, data analysis, and collaborative engagement with key stakeholders. Strong analytical skills, adept at leveraging data analysis tools like Excel, SQL & Python for robust data querying, conducting in-depth analysis to identify patterns and trends, constructing predictive models, constructing data pipelines for data ingestion, storage, and management to develop actionable data-driven solution insights. Eager to contribute skills and knowledge to support business initiatives, enhance performance, and achieve sustainable growth.`,
      contact: {
        email: "benzephaniah@outlook.com",
        phone: "054-025-1498",
        address: "Remote, US",
      },
    },
    links: [
      {
        title: "LinkedIn",
        src: "https://bit.ly/linkedin_benzeph",
        iconClass: "fa-brands fa-linkedin-in",
      },
      {
        title: "Github",
        src: "https://github.com/BQuophi",
        iconClass: "fa-brands fa-github",
      },
    ],
    skills: [
      {
        title: "Data Analysis",
        value: "Python, Excel, SQL, R, SPSS",
      },
      {
        title: "Data Visualization",
        value: "Tableau, Power BI, Mixpanel",
      },
      {
        title: "Tools and Technologies",
        value: "Airflow, Langchain, Retrieval Augmented Generation, FastAPI, HTML, OpenCV, Scikit Learn",
      },
      {
        title: "Machine Learning & NLP",
        value: "Machine Learning, Natural Language Processing, Large Language Models",
      },
      {
        title: "Version Control",
        value: "Git",
      },
      {
        title: "Other Skills",
        value: "Web Scraping, Technical Writing, Predictive Modelling, Statistical Analysis, Data Pipeline, Product Analytics, Teamwork, Communication with Empathy",
      },
    ],
    experiences: [
      {
        organization: "Clicked",
        title: "Machine Learning for Predictive Analytics Mini Sprint",
        date: "April 2024",
        details: [
          `Utilized predictive modelling techniques to scope a solution that meets a client’s business challenge of employee attrition with an accuracy of 85%.`,
          `Elicit, document, and analyze requirements around business challenges to produce data-driven solutions.`,
          `Worked effectively with others under short time constraints, documented project details and findings for clear communication with stakeholders.`,
        ],
      },
      {
        organization: "Unify",
        title: "LLM Engineer (Contributor)",
        date: "April 2024 – Present",
        details: [
          `Mentored on how to integrate Unify's neural router technology into top AI open-source repositories like Langchain and LlamaIndex.`,
          `Developed a Q&A agent using LangChain and IBM Watsonx Granite LLM by implementing a Retrieval Augmented Generation (RAG) pipeline.`,
          `Contribution to AI, LLM projects and review of LLM research documentations.`,
          `Collaborated with global team members, participated in weekly meetings and webinars, and received mentorship and technical guidance on LLM advancement.`,
        ],
      },
      {
        organization: "Inngen",
        title: "Data Engineer",
        date: "March 2024 – June 2024",
        details: [
          `Extracted data from multiple data sources to ingest into a database, with data transformations using SQL in a data pipeline process.`,
          `Generated large records of data using Faker for ingestion into a Postgres database using Python with containerization using Docker.`,
          `Implemented workflow orchestration using Airflow.`,
          `Conducted data visualization using Python and PowerBI and worked on deployment strategies.`,
          `Worked on a scalable, fault-tolerant data pipeline for an ecommerce platform.`,
        ],
      },
      {
        organization: "Hamoye",
        title: "Data Science Intern",
        date: "September 2023 – December 2023",
        details: [
          `Managed a project to predict school completion rates in developing countries, utilizing data analysis techniques to inform future interventions.`,
          `Developed machine learning models to predict and analyze the rate of adoption of renewable over non-renewable energy sources.`,
        ],
      },
      {
        organization: "Zummit Africa",
        title: "Junior Data Scientist",
        date: "April 2022 – March 2023",
        details: [
          `Increased customer onboarding efficiency through development and implementation of an ID Card Information Extraction OCR Model.`,
          `Built various machine learning solutions with FastAPI, including a Sentiment Analyzer API for analyzing customer reviews to understand sentiment and improve customer experience (potential impact on retention).`,
          `Reviewed academic articles on machine learning advancements and implemented relevant techniques in projects, demonstrating continuous learning and technical expertise.`,
          `Documented project details and findings for clear communication with stakeholders on projects like Customer Churn Prediction, Plant Disease Detection with Keras, etc.`,
        ],
      },
    ],
    projects: [
      {
        title: "SENTIMENT ANALYZER API",
        duration: "Ongoing",
        link: "https://github.com/BQuophi/Sentiment_Analyzer_API",
        desc: `Developed an API using FastAPI to analyze text sentiment (positive, negative, etc.) for customer reviews.`,
      },
      {
        title: "AUTOMATED REDDIT DATA PIPELINE",
        duration: "Ongoing",
        link: "https://github.com/BQuophi/Ghana-Stock-Exchange-Data-Pipeline",
        desc: `Extracted data from Reddit using an API, transformed data with Pandas, and automated the process using Apache Airflow running on an Amazon EC2 instance for storage in an Amazon S3 bucket.`,
      },
      {
        title: "LANGCHAIN-RAG-QA-AGENT-LLM-PROJECT",
        duration: "Ongoing",
        link: "https://github.com/BQuophi/LangChain-RAG-QA-Agent-LLM-PROJECT",
        desc: `Developed a Q&A agent using LangChain and IBM Watsonx Granite LLM by implementing a Retrieval Augmented Generation (RAG) pipeline.`,
      },
      {
        title: "TEXT ANALYSIS WITH R (NLP Project)",
        duration: "Ongoing",
        link: "https://github.com/BQuophi/Text_Analysis_with_R",
        desc: `Conducted an in-depth text analysis project using R by tokenizing and analyzing the text of "Frankenstein".`,
      },
    ],
    education: [
      {
        alma: "University Of Ghana",
        duration: "Bachelor of Science in Actuarial Science",
        std: "Activities: Deputy Head (Programming Club), Academic Committee Member, Volunteer Peer Tutor",
        score: "Research Thesis: Loan Default Prediction using Machine Learning Techniques",
      },
    ],
    certifications: [],
    events: [],
  };
  