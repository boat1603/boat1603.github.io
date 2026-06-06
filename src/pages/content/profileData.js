export const profile = {
  name: "Peerawat Rojratchadakorn",
  nickname: "Boat",
  role: "Senior AI Engineer",
  headline:
    "Senior AI Engineer building production AI systems across LLM, speech AI, full-stack engineering, cloud, and MLOps.",
  summary:
    "I work across applied AI system engineering: model integration, backend services, product surfaces, cloud deployment, CI/CD, Kubernetes, and training workflows. Recent work spans conversational banking, market conduct monitoring, real-time AI trainers, OCR/document AI, and Thai language model pretraining.",
  location: "Bangkok, Thailand",
  email: "peerawat.roj@gmail.com",
  phone: "+66819999230",
  languages: "Thai native, English working proficiency",
  current: "Senior AI Engineer at DataX Company Limited",
  image: "/images/profile-scbx-retouched.png",
  imagePosition: "0% 50%",
  resumeUrl:
    "https://drive.google.com/file/d/1OU_hKhZrO5pIjnshParP10VE906Eesqv/view?usp=sharing",
  links: [
    {
      label: "Email",
      href: "mailto:peerawat.roj@gmail.com",
    },
    {
      label: "Website",
      href: "https://boat1603.github.io",
    },
    {
      label: "GitHub",
      href: "https://github.com/boat1603",
    },
  ],
};

export const capabilities = [
  {
    title: "AI, LLM & Speech",
    description:
      "Applied AI systems that combine LLMs, ASR/TTS, OCR/document understanding, and computer vision.",
    skills: [
      "LLM",
      "GPT models",
      "Gemini",
      "gpt-realtime",
      "ASR/TTS",
      "Agentic AI",
      "OCR",
      "Computer Vision",
      "PyTorch",
      "PyTorch Lightning",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Production service logic, orchestration, APIs, and integration layers for AI products.",
    skills: ["Python", "Go", "JavaScript", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    title: "Cloud & MLOps",
    description:
      "Deployment and release pipelines for AI services across cloud and Kubernetes environments.",
    skills: [
      "Azure",
      "Azure Container Apps",
      "AKS",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Argo CD",
      "TorchServe",
    ],
  },
  {
    title: "Frontend & Product",
    description:
      "Usable product surfaces that make AI workflows understandable to real users.",
    skills: ["React", "Material UI", "Dashboard UX", "Product prototyping"],
  },
  {
    title: "AI Training Infrastructure",
    description:
      "Distributed training workflows for Thai language model research and open-source AI work.",
    skills: [
      "DeepSpeed",
      "Slurm",
      "LANTA HPC",
      "Multi-GPU",
      "Multi-node training",
    ],
  },
];

export const heroHighlights = [
  {
    label: "SCBX",
    title: "AI coaching and market conduct systems",
    detail:
      "Worked on AI trainers, market conduct evaluation, and Thai-native AI patent-related work.",
    meta: "Patent reg. no. 2501003154",
    logo: "/images/scbx-logo.jpg",
    link: "/experience",
    targetId: "experience-scbx-highlight",
  },
  {
    label: "LINE SHOPPING",
    title: "Incubation 2024 winner",
    detail:
      "Led AI/ML work for AOIJAI, a seller-facing AI assistant concept with Chat with SQL and store insights.",
    meta: "Winner, March 2024",
    logo: "/images/line-shopping-logo-square.png",
    logoVariant: "full",
    link: "/projects",
    targetId: "project-line-shopping-highlight",
  },
  {
    label: "Super AI",
    title: "Gold Medal recipient",
    detail:
      "Completed applied AI bootcamp and hackathon tracks across CV, NLP, data science, signal processing, and IoT.",
    meta: "Season 2",
    logo: "/images/superai-logo.png",
    logoVariant: "full",
    link: "/projects",
    targetId: "project-superai-highlight",
  },
];

export const experiences = [
  {
    company: "DataX Company Limited",
    logo: "/images/data-x-logo.jpg",
    role: "Senior AI Engineer",
    location: "Bangkok, Thailand",
    period: "Feb 2026 - Present",
    summary:
      "Designing core components of production conversational and agentic AI systems for a group conversational banking project.",
    overview:
      "A public-safe summary of current production AI work: the role focuses on service responsibility, orchestration, AI integration, cloud deployment, and release foundations for conversational banking.",
    responsibilities: [
      "Designed service logic and orchestration layers around conversational and agentic AI capabilities.",
      "Integrated AI components into backend services using Go and Python.",
      "Helped shape deployment foundations across Azure, AKS, Terraform-managed infrastructure, Jenkins, and Argo CD.",
      "Worked across AI engineering, backend engineering, and infrastructure concerns so the system can move from prototype behavior into production delivery.",
    ],
    systems: [
      "Conversational banking service components",
      "Agentic AI integration points",
      "Cloud deployment and release pipeline foundations",
      "Infrastructure-as-code workflow using Terraform",
    ],
    outcomes: [
      "Currently contributing to production implementation for a group conversational banking project.",
      "Cross-functional work across AI integration, backend service behavior, and deployment workflow.",
    ],
    tags: ["Conversational AI", "Go", "Python", "Azure", "AKS", "Terraform"],
    stack: ["Go", "Python", "Azure", "AKS", "Jenkins", "Argo CD", "Terraform"],
  },
  {
    company: "SCBX Public Company Limited",
    logo: "/images/scbx-logo.jpg",
    role: "AI Engineer & Senior AI Engineer",
    location: "Bangkok, Thailand",
    period: "Mar 2024 - Jan 2026",
    summary:
      "Built AI capabilities for market conduct monitoring, sales auditing, and real-time voice-to-voice coaching.",
    overview:
      "Worked on applied AI systems for banking and insurance use cases, connecting speech AI, LLM evaluation, real-time interaction, and product-facing workflows.",
    responsibilities: [
      "Built ASR and LLM capabilities for market conduct monitoring and insurance sales auditing.",
      "Developed real-time voice-to-voice AI coaching flows for relationship manager and insurance sales training.",
      "Implemented two trainer approaches: a gpt-realtime-based version and an in-house speech/LLM stack.",
      "Supported conversational AI POCs and agentic AI integration planning, including work around GCP environments.",
      "Contributed to SCBX Thai-native AI patent work, registration no. 2501003154.",
    ],
    systems: [
      "Market conduct monitoring and sales interaction auditing",
      "Checklist-based conversation evaluation",
      "Voice-to-voice training simulations",
      "Conversational AI and agentic AI POCs",
    ],
    outcomes: [
      "Supported automated review coverage for sales interactions.",
      "Reported up to 93.6% accuracy on an internal test set for market conduct evaluation, based on public SCBX material.",
      "Helped scale personalized sales practice with immediate AI feedback.",
    ],
    tags: [
      "ASR",
      "LLM",
      "Speech AI",
      "gpt-realtime",
      "GCP",
      "Azure",
      "Azure Container Apps",
      "Patent",
    ],
    stack: [
      "ASR",
      "TTS",
      "LLM",
      "gpt-realtime",
      "Python",
      "GCP",
      "Azure",
      "Azure Container Apps",
    ],
    references: [
      {
        label: "SCBX market conduct article",
        href: "https://www.scbx.com/th/scbx-exclusive/market-conduct/",
      },
      {
        label: "SCBX AI trainers article",
        href: "https://www.scbx.com/th/scbx-exclusive/ai-trainers/",
      },
      {
        label: "SCBX Thai-native AI patent page",
        href: "https://www.scbx.com/th/research/patents/thai-native-ai/",
      },
    ],
  },
  {
    company: "Looloo Technology",
    logo: "/images/looloo-logo.png",
    role: "ML Engineer",
    location: "Bangkok, Thailand",
    period: "Oct 2022 - Feb 2024",
    summary:
      "Built document AI capabilities for accounting and business document understanding.",
    overview:
      "Focused on semi-structured OCR and language-model-based document understanding for real-world accounting documents.",
    responsibilities: [
      "Built semi-structured OCR models to extract and understand accounting documents.",
      "Developed document understanding systems using language-model approaches.",
      "Worked on pretraining document understanding language models for accounting and business document domains.",
      "Connected model experimentation with practical production requirements around noisy, real-world documents.",
    ],
    systems: [
      "Accounting document OCR",
      "Semi-structured document understanding",
      "Document language model pretraining",
    ],
    outcomes: [
      "Improved capability coverage for real business documents beyond simple template extraction.",
      "Built a stronger bridge between OCR, language modeling, and business document workflows.",
    ],
    tags: ["Document AI", "OCR", "Language Models", "PyTorch"],
    stack: ["Python", "PyTorch", "Hugging Face", "OCR", "Document AI"],
  },
  {
    company: "Synapes (Thailand) Co., Ltd.",
    logo: "/images/synapes-logo.jpg",
    role: "AI Engineer",
    location: "Chiang Mai, Thailand",
    period: "Apr 2022 - Oct 2022",
    summary:
      "Built computer vision models and backend architecture for a camera security platform.",
    overview:
      "Worked on real-time video analytics for camera security, from model capability to serving and backend architecture.",
    responsibilities: [
      "Built computer vision models for human counting, gender classification, vehicle classification, and anomaly detection.",
      "Developed video-based event detection for fall and fighting scenarios.",
      "Designed backend architecture covering RTSP streams, Shinobi, TorchServe model serving, and FastAPI services.",
      "Created practical demos that made model behavior understandable to non-model stakeholders.",
    ],
    systems: [
      "Video object detection and tracking",
      "Action/anomaly recognition",
      "Camera security platform backend",
      "Model serving through TorchServe and FastAPI",
    ],
    outcomes: [
      "Turned isolated computer vision models into a more complete video analytics platform architecture.",
      "Produced visual demos for people counting, object detection, fall detection, and fighting detection.",
    ],
    tags: ["Computer Vision", "TorchServe", "FastAPI", "RTSP"],
    stack: ["Python", "PyTorch", "Streamlit", "FastAPI", "TorchServe", "AWS EC2"],
    visuals: [
      {
        src: "/work/synapes/object-det-demo.png",
        alt: "Synapes object detection dashboard demo",
        label: "Object detection and camera analytics demo",
      },
      {
        src: "/work/synapes/falldown-demo.png",
        alt: "Synapes fall detection demo",
        label: "Fall detection demo",
      },
      {
        src: "/work/synapes/fighting-demo.jpg",
        alt: "Synapes fighting detection demo",
        label: "Fighting detection demo",
      },
    ],
  },
  {
    company: "AiPEN Studio and freelance projects",
    logo: "/images/aipen-logo.jpg",
    role: "AI Consultant / Data Scientist / AI Backend Developer",
    location: "Bangkok, Thailand",
    period: "Jul 2021 - Sep 2022",
    summary:
      "Delivered speech AI, backend structures, and AI POC services for freelance and consulting projects.",
    overview:
      "Worked across AI consulting, Thai speech modeling, backend API design, and POC architecture for early-stage applied AI projects.",
    responsibilities: [
      "Consulted on AI POCs across computer vision and recommendation system projects.",
      "Designed AI infrastructure approaches for prototype-to-demo workflows.",
      "Developed Thai speech-to-text and text-to-speech models and exposed them through API services.",
      "Designed Python FastAPI backend structures and Node.js services for AI and computer vision projects.",
    ],
    systems: [
      "Thai speech-to-text and text-to-speech API services",
      "AI POC backend templates",
      "Computer vision and recommendation consulting workflows",
      "Node.js service migration from older PHP codebases",
    ],
    outcomes: [
      "Delivered usable AI demos and service structures for freelance AI projects.",
      "Built early experience connecting model work with product/API delivery.",
    ],
    tags: ["Speech AI", "FastAPI", "Node.js", "Consulting"],
    stack: ["Python", "PyTorch", "Hugging Face", "FastAPI", "Node.js", "PHP"],
    visuals: [
      {
        type: "audio",
        src: "/work/aipen/Aipen1.wav",
        label: "Thai speech AI demo sample 1",
      },
      {
        type: "audio",
        src: "/work/aipen/LoongToo.wav",
        label: "Thai speech AI demo sample 2",
      },
    ],
  },
  {
    company: "B.S.E. Electronic",
    logo: "/images/bse-logo.png",
    role: "Web Developer / Website Administrator",
    location: "Bangkok, Thailand",
    period: "May 2021 - Oct 2022",
    summary:
      "Built and maintained web applications for MQTT-based IoT device control.",
    overview:
      "Handled website administration and IoT web application development for device control, alerting, and cloud deployment.",
    responsibilities: [
      "Built React and JavaScript web applications for MQTT-based IoT device operations.",
      "Integrated LINE Notify for device alerts and operational notifications.",
      "Maintained the business website and handled AWS deployment and hosting.",
      "Worked across frontend, backend, IoT protocol integration, and cloud infrastructure.",
    ],
    systems: [
      "IoT device control web app",
      "MQTT integration",
      "LINE Notify alerting",
      "AWS-hosted website and application deployment",
    ],
    outcomes: [
      "Created a practical web interface for device operation and monitoring.",
      "Connected IoT control workflows with notifications and cloud hosting.",
    ],
    tags: ["React", "IoT", "MQTT", "AWS"],
    stack: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "MQTT",
      "Mosquitto",
      "Docker",
      "AWS",
    ],
    visuals: [
      {
        src: "/work/bse/bse-website.JPG",
        alt: "BSE business website screenshot",
        label: "Website administration",
      },
      {
        src: "/work/bse/bse-demo1.png",
        alt: "BSE IoT device control web app screenshot",
        label: "IoT control web app",
      },
      {
        src: "/work/bse/bse-demo2.png",
        alt: "BSE IoT dashboard screenshot",
        label: "IoT dashboard view",
      },
    ],
  },
  {
    company: "MFEC Public Company Limited",
    logo: "/images/mfec-logo.jpg",
    role: "Data Scientist Intern",
    location: "Bangkok, Thailand",
    period: "Jun 2020 - Jul 2020",
    summary:
      "Implemented a Python news recommendation system during a data science internship.",
    overview:
      "Early applied data science work focused on recommendation, NLP, analytics, and dashboard-style presentation.",
    responsibilities: [
      "Designed and implemented a news recommendation system in Python.",
      "Worked with NLP/data analytics workflows and dashboard reporting tools.",
      "Presented model behavior through a practical demo dashboard.",
    ],
    systems: [
      "News recommendation system",
      "NLP/data analytics workflow",
      "Dashboard-style reporting",
    ],
    outcomes: [
      "Built a complete internship project from data processing through recommendation output and demo presentation.",
    ],
    tags: ["Python", "Recommendation", "NLP", "Analytics"],
    stack: ["Python", "GCP", "BigQuery", "Google Data Studio", "Flask"],
    visuals: [
      {
        src: "/work/mfec/mfec-demo.png",
        alt: "MFEC news recommendation system dashboard",
        label: "News recommendation dashboard",
      },
    ],
  },
];

export const projects = [
  {
    title: "OpenThaiGPT Training Volunteer",
    logo: "/images/openthaigpt-logo-square.png",
    logoText: "OTG",
    logoVariant: "full",
    type: "Open-source",
    period: "2023 - May 2024",
    role: "Volunteer contributor",
    impact:
      "Supported Thai language model development and training workflows for open-source contributors.",
    description:
      "Implemented ELECTRA/GPT pretraining pipelines with PyTorch Lightning and supported distributed training with DeepSpeed, Slurm, and LANTA HPC.",
    details: [
      "Implemented model pretraining workflows and training configuration patterns.",
      "Supported multi-GPU and multi-node training setup.",
      "Wrote contributor-facing guidance for Git, Slurm, LANTA HPC, and model training checklists.",
    ],
    stack: ["PyTorch Lightning", "DeepSpeed", "Slurm", "LANTA HPC"],
    references: [
      {
        label: "Thai-TrOCR model",
        href: "https://huggingface.co/openthaigpt/thai-trocr",
      },
      {
        label: "Contribution guidelines",
        href: "https://openthaigpt.gitbook.io/openthaigpt-guideline",
      },
    ],
    featured: true,
  },
  {
    title: "LINE SHOPPING Incubation 2024",
    logo: "/images/line-shopping-logo-square.png",
    logoText: "LINE",
    logoVariant: "full",
    type: "Award / startup",
    period: "March 2024",
    role: "AI/ML Engineering Lead",
    impact:
      "Winner with AOIJAI, an AI assistant concept for LINE SHOPPING sellers.",
    description:
      "Led AI/ML work for seller-facing features, including product content generation, Chat with SQL for store insights, pricing suggestions, campaign recommendations, and performance analytics.",
    details: [
      "Translated seller pain points into AI features for content, insight, and recommendation use cases.",
      "Connected LLM-based product assistance with seller analytics and recommendation ideas.",
      "Helped present the concept as a business-ready AI assistant for merchants.",
    ],
    stack: ["LLM", "Chat with SQL", "Recommendation", "Seller tools", "Analytics"],
    image: "/portfolio/line-shopping-incubator-2024.jpg",
    imageAlt: "AOIJAI team winning LINE SHOPPING Incubator 2024",
    references: [
      {
        label: "Khaosod coverage",
        href: "https://www.khaosod.co.th/sentangsedtee/sentang-news/article_274972",
      },
    ],
    featured: true,
  },
  {
    title: "Super AI Engineer Season 2 Gold Medal",
    logo: "/images/superai-logo.png",
    logoText: "SAI",
    logoVariant: "full",
    type: "Award / AI bootcamp",
    period: "2022",
    role: "Gold Medal recipient",
    impact:
      "Gold Medal recipient in Super AI Engineer Season 2, covering five applied AI domains.",
    description:
      "Completed intensive hands-on training and hackathon challenges across computer vision, NLP, data science, signal processing, and IoT.",
    details: [
      "Solved multi-domain AI tasks under time constraints.",
      "Presented and competed in final Super AI Engineer Season 2 activities.",
      "Built the technical foundation that later supported production AI engineering work.",
    ],
    stack: ["Computer Vision", "NLP", "Data Science", "Signal Processing", "IoT"],
    image: "/portfolio/superai_image.jpg",
    imageAlt: "Peerawat wearing Super AI Engineer Season 2 gold medal",
    references: [
      {
        label: "Super AI Engineer",
        href: "https://superai.aiat.or.th/",
      },
    ],
    featured: true,
  },
  {
    title: "BP EYE",
    logoText: "BP",
    type: "Startup / incubation",
    period: "2022",
    role: "AI/ML builder",
    impact:
      "Startup project in AIEAT incubation focused on AI-assisted blood pressure measurement workflows.",
    description:
      "Built an edge-oriented AI concept around camera/device-assisted measurement and practical deployment constraints.",
    details: [
      "Explored applied AI for health-related measurement workflows.",
      "Worked with model and deployment constraints around embedded/edge usage.",
      "Created visual materials that explain the product concept and user flow.",
    ],
    stack: ["Python", "PyTorch", "Jetson", "Edge AI"],
    image: "/portfolio/BP-Eye.png",
    imageAlt: "BP EYE startup concept visual",
    featured: false,
  },
  {
    title: "AIAT MOOC Platform",
    logo: "/images/aiat-logo.png",
    logoText: "AIAT",
    logoVariant: "full",
    type: "Product delivery",
    period: "2023 - 2025",
    role: "Part-time project manager",
    impact:
      "Coordinated delivery of an AI learning platform built on the Open edX open-source platform.",
    description:
      "Managed tasks, studied feature feasibility, and supported microservice deployment for course access, coding exercise, video hosting, payment, and analytics workflows.",
    details: [
      "Created tasks and coordinated development using an Agile/Scrum workflow.",
      "Studied course payment, access groups, coding exercises, video hosting, and analytics requirements.",
      "Supported microservice deployment for a learning platform context.",
    ],
    stack: ["Open edX", "Agile", "Microservices", "Product delivery"],
    image: "/portfolio/aiat-mooc.png",
    imageAlt: "AIAT MOOC learning platform screenshot",
    featured: false,
  },
  {
    title: "Super AI Web Registration",
    logo: "/images/superai-logo.png",
    logoText: "AIAT",
    logoVariant: "full",
    type: "Platform",
    period: "2022 - 2025",
    role: "Web platform contributor",
    impact:
      "Supported web registration platform work for Super AI Engineer Seasons 3-5.",
    description:
      "Connected user data to AIAT MOOC and automated communication workflows using AWS SES.",
    details: [
      "Developed and maintained web registration workflows for a national AI program.",
      "Connected registration data to AIAT MOOC learning access.",
      "Automated email communication through AWS SES.",
    ],
    stack: ["React", "AWS SES", "Registration platform"],
    image: "/portfolio/superai_registration_form.png",
    imageAlt: "Super AI Engineer web registration form screenshot",
    featured: false,
  },
  {
    title: "Computer Vision Experiments",
    logoText: "CV",
    type: "AI experiments",
    period: "2020 - 2021",
    role: "AI project builder",
    impact:
      "Built early applied vision projects across detection, segmentation, and measurement tasks.",
    description:
      "Includes cone detection for racing cars, garbage detection, water segmentation, and analog gauge reading.",
    details: [
      "Built practical computer vision experiments around object detection and segmentation.",
      "Explored applied model behavior through visible demos.",
      "Used these projects to build a foundation for later production computer vision and document AI work.",
    ],
    stack: ["Python", "TensorFlow", "MATLAB", "Computer Vision"],
    gallery: [
      {
        src: "/portfolio/cone-detection.JPG",
        alt: "Cone detection computer vision demo",
      },
      {
        src: "/portfolio/garbage-detection.png",
        alt: "Garbage detection computer vision demo",
      },
      {
        src: "/portfolio/water-segmentation.png",
        alt: "Water segmentation computer vision demo",
      },
      {
        src: "/portfolio/analog-gauge-reader.JPG",
        alt: "Analog gauge reader computer vision demo",
      },
    ],
    featured: false,
  },
];

export const hackathonExperiences = [
  {
    title: "Super AI Engineer Final Hackathon",
    type: "Final hackathon",
    period: "6-7 Aug 2022",
    role: "Rank 3 by average score",
    impact:
      "Completed five AI tasks in 23 hours across image processing, NLP, data science, signal processing, and IoT.",
    description:
      "The final Super AI Engineer hackathon tested breadth, speed, and practical problem solving across multiple AI domains.",
    details: [
      "Worked under a strict 23-hour competition window.",
      "Solved tasks across five AI domains rather than a single model category.",
      "Received rank 3 from average score.",
    ],
    stack: [
      "Python",
      "Image Processing",
      "NLP",
      "Data Science",
      "Signal Processing",
      "IoT",
    ],
    gallery: [
      {
        src: "/hackathon/SuperAIFinalHackathonImg.jpg",
        alt: "Super AI Engineer Final Hackathon event photo",
      },
      {
        src: "/hackathon/SuperAIFinalHackathon.jpg",
        alt: "Super AI Engineer Final Hackathon certificate or result visual",
      },
    ],
  },
  {
    title: "AI & Robotics Hackathon 2022",
    type: "Hackathon",
    period: "June 2022",
    role: "AI competitor",
    impact:
      "Worked on crop classification using Sentinel-2 satellite imagery.",
    description:
      "A practical AI and robotics challenge focused on applying machine learning to geospatial and agricultural data.",
    details: [
      "Built a crop classification workflow from Sentinel-2 data.",
      "Applied Python-based modeling under hackathon constraints.",
    ],
    stack: ["Python", "Crop Classification", "Sentinel-2"],
    image: "/hackathon/AW_ARV_Certificate_Peerawat Rojratchadakorn.jpg",
    imageAlt: "AI and Robotics Hackathon 2022 certificate",
  },
  {
    title: "Super AI Development Program Hackathon Tracks",
    type: "Multi-track hackathon",
    period: "Dec 2021 - Apr 2022",
    role: "Super AI Engineer participant",
    impact:
      "Built hands-on solutions across online pitching, document analysis, translation, image classification, and robotics/AIoT tracks.",
    description:
      "A series of applied AI challenges that built breadth across model development, ML engineering, cloud, and IoT communication.",
    details: [
      "Kaggle-style online pitching: handwritten digit recognition and Thai QA.",
      "Image document analysis: font, size, and style classification.",
      "Machine translation: Thai-English and English-Thai translation workflows.",
      "Robotics and AIoT: MQTT communication between mBot2, Halocode devices, backend, and web app.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "MQTT",
      "Huawei Cloud",
      "IoT",
    ],
    gallery: [
      {
        src: "/hackathon/SuperAIKaggleOnline.png",
        alt: "Super AI Kaggle online pitching visual",
      },
      {
        src: "/hackathon/SuperAIAppman.png",
        alt: "Super AI image document analysis visual",
      },
      {
        src: "/hackathon/SuperAINMT.png",
        alt: "Super AI machine translation challenge visual",
      },
      {
        src: "/hackathon/SuperAIARV.png",
        alt: "Super AI image classification challenge visual",
      },
      {
        src: "/hackathon/SuperAIRoboticsandAIoT.png",
        alt: "Super AI robotics and AIoT challenge visual",
      },
    ],
  },
  {
    title: "Shopee Code League 2021",
    type: "Online competition",
    period: "2021",
    role: "Participant",
    impact:
      "Practiced data analytics, transformer-based NLP, and address extraction challenges.",
    description:
      "Competition experience focused on applied analytics and NLP problem solving.",
    details: [
      "Worked on address extraction and NLP-style competition tasks.",
      "Strengthened practical model evaluation and data workflow habits.",
    ],
    stack: ["Python", "Data Analytics", "Transformers", "Address Extraction"],
  },
  {
    title: "Shopee Code League 2020",
    type: "Online competition",
    period: "2020",
    role: "Participant",
    impact:
      "Practiced applied data analytics and image classification challenges.",
    description:
      "Early competition experience that helped build practical ML workflow foundations.",
    details: [
      "Worked through data analytics and image classification tasks.",
      "Built experience with fast iteration under competition constraints.",
    ],
    stack: ["Python", "Data Analytics", "TensorFlow", "Image Classification"],
    image: "/hackathon/shoppee2020.png",
    imageAlt: "Shopee Code League 2020 competition visual",
  },
];

export const credentials = [
  {
    title: "SCBX Thai-native AI patent work",
    detail: "Contributed to patent-related AI work, registration no. 2501003154.",
  },
  {
    title: "Super AI Engineer Season 2",
    detail:
      "Gold Medal from an AI upskill/reskill bootcamp and hackathon covering image processing, NLP, data science, signal processing, and IoT.",
    image: "/portfolio/superai_image.jpg",
  },
  {
    title: "LINE SHOPPING Incubation 2024",
    detail:
      "Winner in March 2024 as AI/ML Engineering Lead for AOIJAI, an AI buddy for LINE SHOPPING sellers with chat with SQL and seller insight features.",
    image: "/portfolio/line-shopping-incubator-2024.jpg",
  },
  {
    title: "Chulalongkorn University",
    detail:
      "B.Eng. Electrical Engineering in Control Systems and Communication, GPA 3.02.",
    logo: "/images/chula-logo.png",
  },
];
