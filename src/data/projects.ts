import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "corn-disease-doctor",
    title: "Corn Disease Doctor",
    category: "ai",
    featured: true,
    featuredLevel: "primary",
    description: "Optimized YOLOv8 image-classification models for corn disease detection, balancing accuracy and inference performance for practical deployment.",
    problem: "Early detection of corn diseases (Blight, Common Rust, Gray Leaf Spot) is crucial for food security. Traditional manual inspection is slow and error-prone.",
    solution: "We aimed to build an automated, efficient diagnostic tool accessible via web browser. Leveraged the state-of-the-art YOLOv8s-cls architecture.",
    role: "AI Engineer & Model Developer",
    technologies: ["Python", "PyTorch", "YOLOv8", "Streamlit"],
    metrics: [
      { label: "Accuracy", value: "96.7%" },
      { label: "Inference time", value: "~12.7 ms" }
    ],
    thumbnail: "https://res.cloudinary.com/dlr8ib0xj/image/upload/v1763778124/corndoctor-thumb_q0avgg.png",
    media: [
      { type: "image", src: "/images/corndoctor-photo.png", alt: "Corn Disease Doctor Streamlit interface" }
    ],
    links: [
      { type: "live", label: "Live Demo", url: "https://cornleafdiseasesems5.streamlit.app/" },
      { type: "github", label: "GitHub", url: "https://github.com/StuntLead/corn_leaf_disease_sems5" }
    ]
  },
  {
    slug: "dreamtalk",
    title: "DreamTalk: Generative Dream Narratives",
    category: "ai",
    featured: true,
    featuredLevel: "primary",
    description: "Fine-tuned GPT-2 on 27k+ DreamBank narratives and evaluated generation quality using perplexity and BERTScore.",
    problem: "Standard language models are trained on logical, structured text. However, dreams are chaotic, non-linear, and deeply symbolic. The challenge was to force a logical model to 'unlearn' structure without descending into gibberish.",
    solution: "Fine-tuned OpenAI's GPT-2 Small on the DreamBank dataset (27k+ dream reports). Developed a regex-based complete_dream() function to dynamically generate natural, dream-like endings. Built a Streamlit app allowing real-time control over Creativity and Randomness.",
    role: "AI Engineer & Full-Stack Developer",
    technologies: ["Python", "PyTorch", "GPT-2", "Hugging Face", "Streamlit"],
    metrics: [
      { label: "Perplexity", value: "~23.17" },
      { label: "BERTScore F1", value: "0.85" }
    ],
    thumbnail: "https://res.cloudinary.com/dlr8ib0xj/image/upload/v1763778124/dreamtalk-thumb_ytofpr.png",
    media: [
      { type: "image", src: "/images/dreamtalk-photo.png", alt: "DreamTalk Streamlit interface" }
    ],
    links: [
      { type: "live", label: "Live Demo", url: "https://dreamgeneratorappsems4.streamlit.app/" },
      { type: "huggingface", label: "Hugging Face", url: "https://huggingface.co/StuntLead/dream_generator_gpt2" },
      { type: "github", label: "GitHub", url: "https://github.com/StuntLead/dream_generator_app_sems4" }
    ]
  },
  {
    slug: "danain",
    title: "DANAin",
    category: "software",
    featured: true,
    featuredLevel: "secondary",
    description: "Built a functional crowdfunding frontend prototype supporting complex registration, investment, and notification flows before the backend API was available.",
    problem: "Bridging the funding gap for young entrepreneurs and SMEs in Indonesia by connecting innovators directly with investors.",
    solution: "Built a fully functional frontend prototype simulating the entire user experience, including dual-role registration, investment mechanisms, and a notification system using localStorage.",
    role: "Lead Frontend Developer & UX Researcher",
    team: [
      { name: "Fernando Darren R.", role: "Lead Frontend Developer & UX Researcher" },
      { name: "Vania Azalia", role: "Frontend Developer" },
      { name: "Vincent Tanjaya", role: "Frontend Developer" }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    thumbnail: "https://res.cloudinary.com/dlr8ib0xj/image/upload/v1763778123/danain-thumb_uqu8mk.png",
    media: [
      { type: "image", src: "/images/danain-1.jpeg", alt: "DANAin interface screenshot 1" },
      { type: "image", src: "/images/danain-2.jpeg", alt: "DANAin interface screenshot 2" },
      { type: "image", src: "/images/danain-3.jpeg", alt: "DANAin interface screenshot 3" },
      { type: "image", src: "/images/danain-4.jpeg", alt: "DANAin interface screenshot 4" },
      { type: "embed", src: "https://drive.google.com/file/d/1VOHOaEzvxKzu3KDVQYbw7daBOvx6JYp3/preview", title: "DANAin Google Drive embed" }
    ],
    links: [
      { type: "github", label: "GitHub", url: "https://github.com/Felix-Panjaitan/DanaIn" }
    ]
  },
  {
    slug: "gigitaja",
    title: "GigitAja",
    category: "product",
    status: "Ongoing",
    featured: true,
    featuredLevel: "secondary",
    description: "Built an interactive mobile-first proof of concept for a food-surplus platform connecting excess food supply with potential recipients.",
    problem: "Indonesia faces a heartbreaking paradox: discarding over 20 million tons of food annually while addressing SDG goals 12, 2, and 13.",
    solution: "Crafted a mobile-first experience that is functional and engaging for Gen-Z. Built a high-fidelity, fully interactive prototype simulating the end-to-end user journey using localStorage.",
    role: "Technical Co-Founder & Lead Prototyper",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage API"],
    thumbnail: "https://res.cloudinary.com/dlr8ib0xj/image/upload/v1763778123/gigitaja-thumb_nwr40k.png",
    media: [
      { type: "image", src: "https://res.cloudinary.com/dlr8ib0xj/image/upload/v1763778123/gigitaja-thumb_nwr40k.png", alt: "GigitAja Thumbnail" },
      { type: "image", src: "/images/sdg12.png", alt: "SDG 12 Context" },
      { type: "image", src: "/images/sdg2.png", alt: "SDG 2 Context" },
      { type: "image", src: "/images/sdg13.webp", alt: "SDG 13 Context" }
    ],
    links: [
      { type: "live", label: "Live Prototype", url: "https://stuntlead.github.io/GigitAjaPrototype/index.html" }
    ]
  },
  {
    slug: "movie-recommendation",
    title: "Movie Recommendation System",
    category: "ai",
    featured: true,
    featuredLevel: "secondary",
    description: "Evaluated and helped implement a hybrid movie recommendation workflow combining collaborative filtering with content-based recommendations.",
    problem: "Solving the 'paradox of choice' on streaming platforms and effectively handling the cold-start problem for new users.",
    solution: "Built a hybrid movie recommender system using Collaborative Filtering (SVD) for deep personalization and Content-Based Filtering.",
    role: "Implementation Contributor & Model Analyst",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "TMDB API", "SVD"],
    thumbnail: "https://res.cloudinary.com/dlr8ib0xj/image/upload/v1763778124/recommend-thumb_n0wdc3.png",
    media: [
      { type: "image", src: "/images/recommender-app.png", alt: "Movie Recommendation Application Screenshot" },
      { type: "video", src: "/videos/recommender-demo.mp4", title: "Movie Recommendation Demo" },
      { type: "image", src: "/images/recommender-team-photo.JPG", alt: "Team Photo" }
    ],
    links: [
      { type: "live", label: "Live Demo", url: "https://ml-project-recommender-kel5.streamlit.app/" },
      { type: "github", label: "GitHub", url: "https://github.com/Varixen98/ml_uap_project_recommender_system_smst_4" }
    ]
  }
];
