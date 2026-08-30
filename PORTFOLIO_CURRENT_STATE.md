# PORTFOLIO CURRENT STATE REPORT

This report is a complete, factual snapshot of the current state of the portfolio repository. It does not contain redesign suggestions or code modifications.

==================================================
## PHASE 1 — REPOSITORY DISCOVERY
==================================================

1. **Framework / architecture**
   - **Framework/library used:** None (Vanilla HTML)
   - **Programming languages:** HTML, CSS, JavaScript
   - **Build tool:** None found
   - **Package manager:** None found
   - **Routing approach:** Standard HTML multi-page links (`index.html`, `project-corndoctor.html`, etc.) and anchor links for same-page sections (`#about`, `#projects`, etc.).
   - **Styling approach:** Tailwind CSS (loaded via CDN) combined with custom CSS (`assets/css/style.css`).
   - **UI libraries:** None
   - **Animation libraries:** Custom IntersectionObserver logic in `assets/js/main.js` and CSS animations.
   - **Icon libraries:** Inline SVGs used directly in HTML.
   - **Data/content storage approach:** Hardcoded directly within the HTML files.
   - **Deployment platform/configuration if identifiable:** Unclear from source (likely standard static hosting like GitHub Pages or Vercel, but no config files present).
   - **Analytics if present:** Not found.
   - **SEO-related packages/configuration:** Basic HTML meta tags only.
   - **Any external APIs/services being called:** Tailwind CSS (CDN), Google Fonts, Placehold.co (for fallback images).

2. **Repository structure**
   ```text
   /
   ├── index.html
   ├── project-corndoctor.html
   ├── project-danain.html
   ├── project-dreamtalk.html
   ├── project-gigitaja.html
   ├── project-recommender.html
   ├── project-research.html
   └── assets/
       ├── css/
       │   └── style.css
       ├── images/
       │   └── (23 image files, e.g., nando.png, corndoctor-photo.png, favicon.ico)
       ├── js/
       │   └── main.js
       └── videos/
           └── recommender-demo.mp4
   ```

3. **Entry points**
   - **Main app entry:** `index.html`
   - **Homepage:** `index.html`
   - **Layout/navbar/footer:** Present in `index.html` and duplicated across all `project-*.html` files.
   - **Project data source:** Hardcoded in `index.html` and individual `project-*.html` files.
   - **Experience data source:** Not found (section doesn't exist).
   - **Education data source:** Not found (section doesn't exist).
   - **Skills data source:** Hardcoded in `index.html`.
   - **Certification data source:** Not found.
   - **Contact/social data source:** Hardcoded in `index.html`.
   - **Resume/CV source if present:** Not found.

==================================================
## PHASE 2 — COMPLETE CONTENT EXTRACTION
==================================================

### A. Personal Identity / Hero Section
- **Full name:** Fernando Darren Rachman
- **Professional headline:** AI Engineer & Product Builder
- **Subtitles:** Bridging complex Artificial Intelligence algorithms and robust Software Engineering to build scalable, Intelligent Applications.
- **Current status:** Not explicitly stated
- **Location:** Not explicitly stated
- **University:** Implicitly BINUS University (via email address `fernando.rachman@binus.ac.id`)
- **Degree:** Not explicitly stated (Digital Business Innovation & Computer Science mentioned as student backgrounds in GigitAja project)
- **Specialization/stream:** Not explicitly stated
- **Graduation year:** Not explicitly stated
- **GPA if displayed:** Not explicitly stated
- **Availability statements:** "Ready to solve your toughest engineering challenges." / "I am ready to bring this synergy of innovation and engineering to your team."
- **CTA buttons:** "View My Work", "Contact Me"
- **Profile image references:** `assets/images/nando.png`
- **Resume links:** Not found
- **Any rotating/typewriter text:** None
**Source files:** `index.html`

### B. About Me
**Source files:** `index.html`

- Hello, I'm Fernando
- In a tech landscape often divided between abstract research and practical application, I stand at the convergence. I am an **AI Engineer** and **Product Developer** obsessed with one goal: **turning complex algorithms into intuitive, high-impact products.**
- I don't just write code; I architect ecosystems. Whether I am fine-tuning Large Language Models to grasp human nuance, deploying real-time Computer Vision systems for agricultural precision, or building robust Full-Stack architectures, my approach remains the same: **Technology must solve REAL problems.**
- I bring a rare blend of **deep technical expertise** (Python, PyTorch, React) and **strategic product thinking**. I don't just ask "Can we build it?", I ensure it is built scalably, efficiently, and with the end-user in mind.
- I am ready to bring this synergy of innovation and engineering to your team.

### C. Work Experience
No work experience section is present in the current portfolio.

### D. Projects
**DISPLAYED ON WEBSITE**

#### 1. Corn Doctor: AgriTech Vision / Corn Disease Doctor
- **Exact project title:** Corn Doctor: AgriTech Vision (Index) / Corn Disease Doctor (Detail)
- **Category:** AI & Data / COMPUTER VISION & AGRICULTURE
- **Short description:** Optimized YOLOv8 classification models for real-time plant disease detection on edge devices.
- **Complete long description:** The Challenge: Early detection of corn diseases (Blight, Common Rust, Gray Leaf Spot) is crucial for food security. Traditional manual inspection is slow and error-prone. We aimed to build an automated, efficient diagnostic tool accessible via web browser. The Solution & My Contribution: We leveraged the state-of-the-art YOLOv8s-cls architecture. I led the experimental phase, training three model variants: Original (224px), Enhanced Augmentation, and Modified Input (320px). Surprisingly, the Original configuration outperformed others with an accuracy of 96.7% and the fastest inference time (~12.7ms), proving that bigger inputs don't always mean better results for specific datasets. I then deployed this optimized model into a user-friendly Streamlit interface. Key Takeaways: This project taught me the art of model selection and trade-offs. While higher resolution inputs usually improve detection, they drastically increased inference time (+86%) with negligible accuracy gain in this case. I learned to prioritize efficiency for deployment over raw theoretical complexity.
- **Role/contribution:** AI Engineer & Model Developer (Group Project)
- **Project Team:** Fernando Darren Rachman: AI Model Fine-Tuning & Streamlit Integration, Rizal: Dataset Preparation & Model Research
- **Technologies:** YOLOv8 (Ultralytics), Python, PyTorch, Streamlit, Pandas, NumPy
- **Key Skills Acquired:** Computer Vision (YOLOv8), Transfer Learning, Model Benchmarking, Streamlit Deployment
- **Metrics/results:** 96.7% accuracy, fastest inference time (~12.7ms)
- **GitHub URL:** https://github.com/StuntLead/corn_leaf_disease_sems5
- **Live demo URL:** https://cornleafdiseasesems5.streamlit.app/
- **Tags/Badges:** Computer Vision (index), YOLOv8, PyTorch
- **Source files:** `index.html`, `project-corndoctor.html`

#### 2. DreamTalk: Narrative AI / DreamTalk: Generative Dream Narratives
- **Exact project title:** DreamTalk: Narrative AI (Index) / DreamTalk: Generative Dream Narratives (Detail)
- **Category:** AI & Data / NLP RESEARCH & DEVELOPMENT
- **Short description:** Fine-tuned GPT-2 on psychological datasets to generate surreal dream narratives via a Streamlit app.
- **Complete long description:** The Challenge: Standard language models are trained on logical, structured text (Wikipedia, books). However, dreams are chaotic, non-linear, and deeply symbolic. The challenge was to force a logical model (GPT-2) to "unlearn" structure and embrace the surreal narrative style of human dreams without descending into gibberish. The Solution: Fine-Tuning & Streamlit: I fine-tuned OpenAI's GPT-2 Small on the DreamBank dataset (27k+ dream reports). To ensure high-quality outputs, I implemented: Quantitative Evaluation: Achieved a low Perplexity score (~23.17) and a high BERTScore F1 (0.85), ensuring the text is both creative and semantically sound. Custom Narrative Logic: Developed a regex-based complete_dream() function to dynamically generate natural, dream-like endings. Interactive UI: Built a Streamlit app allowing users to control "Creativity" (Temperature) and "Randomness" (Top-K/P) in real-time. Key Takeaways: This project bridged the gap between Machine Learning research and Application Development. I learned that "better" metrics don't always mean "better" creativity—sometimes a higher perplexity yields more interesting dreams. It also honed my skills in deploying PyTorch models to production environments.
- **Role/contribution:** AI Engineer & Full Stack Dev (Solo Project)
- **Technologies:** Python, PyTorch, GPT-2 (Hugging Face), Streamlit, Pandas, Matplotlib
- **Key Skills Acquired:** LLM Fine-Tuning (GPT-2), Streamlit App Dev, Model Evaluation (BERTScore), Hugging Face Deployment
- **Datasets:** DreamBank dataset (27k+ dream reports)
- **Metrics/results:** Perplexity score (~23.17), BERTScore F1 (0.85)
- **GitHub URL:** https://github.com/StuntLead/dream_generator_app_sems4
- **Live demo URL:** https://dreamgeneratorappsems4.streamlit.app/
- **Other URLs:** Hugging Face: https://huggingface.co/StuntLead/dream_generator_gpt2
- **Tags/Badges:** Generative AI (index), LLM, Transformers
- **Source files:** `index.html`, `project-dreamtalk.html`

#### 3. Stock Forecasting Research / Hybrid Ensemble Model for Stock Price Forecasting
*(Also documented under Section E. Research / Publications)*
- **Exact project title:** Stock Forecasting Research (Index) / Hybrid Ensemble Model for Stock Price Forecasting (Detail)
- **Category:** Published Research
- **Short description:** Hybrid ensemble model for stock prediction. Published in Procedia Computer Science (Elsevier).
- **Complete long description:** Summary: We developed a sophisticated hybrid model combining ARIMA, Random Forest, and LSTM, enhanced with a meta-learner, to forecast stock prices with superior accuracy. This work addresses the volatility of financial markets by leveraging the strengths of both statistical and deep learning approaches. My Contribution: My role was to establish the foundational research and methodological strategy that guided our model's development. By synthesizing complex literature, I helped define the architectural approach that ultimately led to our high-accuracy results. I also had the honor of presenting our findings at the conference. What I Learned: This project instilled a drive for excellence through relentless perseverance, proving that innovation emerges from pushing through complex academic and technical challenges. This blend of technical tenacity and collaborative spirit has prepared me to thrive in rigorous engineering environments.
- **Role/contribution:** Core Researcher & Methodology Strategist (Group Project)
- **Research Team:** Wisnutomo Adji Nugroho (Lead Author & Model Development), Fernando Darren Rachman (Methodology Strategist & Core Researcher), Brainardo Kenneth Siahu (Methodology & Dataset Acquisition), Irene A. Iswanto & Setiawan Joddy (Academic Advisors)
- **Technologies:** Python, Scikit-learn, TensorFlow/Keras
- **Live demo URL:** None
- **Publication URL:** https://www.sciencedirect.com/science/article/pii/S1877050925026948
- **Tags/Badges:** Published Research (index), Time Series, Scikit-learn
- **Source files:** `index.html`, `project-research.html`

#### 4. GigitAja: Food Waste App / GigitAja: A Journey to Tackle Food Waste
- **Exact project title:** GigitAja: Food Waste App (Index) / GigitAja: A Journey to Tackle Food Waste (Detail)
- **Category:** Software Engineering / ONGOING PROJECT
- **Short description:** Social impact initiative bridging surplus food to hungry stomachs. Prototyping a mobile-first Gen-Z experience.
- **Complete long description:** Phase 00: Background - A Problem Worth Solving: Every great initiative is born from a pressing problem. For GigitAja, that problem is food waste. Indonesia faces a heartbreaking paradox: as one of the world's largest producers of food waste, we discard over 20 million tons of food annually. Phase 01: Project Initiation: As a Digital Business Innovation student, my partner, Aisyah Raissa Algebra, identified a business opportunity rooted in a solution. As a Computer Science student, I was inspired to take on the technical role. Phase 02: The Blueprint - Design & Prototyping: The challenge was to craft an experience that was not only functional but also engaging for Gen-Z. For rapid prototyping, I strategically used vanilla HTML, CSS, and JavaScript. Phase 03: The Tangible Result: The result is a high-fidelity, fully interactive prototype that simulates the end-to-end user journey. Using `localStorage`, I single-handedly built a functional proof-of-concept. Phase 04: The Horizon - Future Vision: The vision for GigitAja is to evolve into a native iOS application.
- **Role/contribution:** Technical Co-Founder & Lead Prototyper
- **Project Team:** Aisyah Raissa Algebra: Business & Vision
- **Technologies:** HTML5, CSS3, JavaScript (ES6+), LocalStorage API
- **Key Skills Acquired:** Rapid Prototyping, Mobile-First Design, UI/UX Implementation, Cross-Discipline Collaboration, Iterative Development, Business to Tech Translation
- **GitHub URL:** None
- **Live demo URL:** https://stuntlead.github.io/GigitAjaPrototype/index.html
- **Tags/Badges:** ONGOING (index), Product Eng, iOS Roadmap
- **Source files:** `index.html`, `project-gigitaja.html`

#### 5. DANAin Crowdfunding / DANAin - Hybrid Crowdfunding Platform
- **Exact project title:** DANAin Crowdfunding (Index) / DANAin - Hybrid Crowdfunding Platform (Detail)
- **Category:** Software Engineering / Group Project (SE)
- **Short description:** Engineered a crowdfunding web app prototype, handling complex user roles and transaction flows.
- **Complete long description:** Summary: DANAin is a prototype hybrid crowdfunding platform designed to bridge the funding gap for young entrepreneurs and SMEs in Indonesia. It directly connects innovators with investors, creating a more accessible, transparent, and inclusive investment ecosystem. My Impact & Initiative: My greatest impact was taking the initiative to build a fully functional frontend prototype independently, even before the backend API was ready. I simulated the entire user experience, including complex workflows like dual-role registration, investment mechanisms, and a notification system using localStorage. What I Learned: This project taught me the importance of technical independence and end-to-end project ownership. My dual role as a developer and UX researcher was invaluable in learning how to translate user needs into elegant technical solutions.
- **Role/contribution:** Lead Frontend Developer, UX Researcher
- **Research Team:** Christian Felix Panjaitan (Team Lead & Backend Developer), Brainardo Kenneth Siahu (Concept & Business Logic), Putri Rizkia P. Alifuddin (UI/UX Design & Documentation), Velicia Nissy Lonteng (UI/UX Design & User Research)
- **Technologies:** HTML5, CSS3, Tailwind CSS, JS (ES6+)
- **Key Skills Acquired:** Frontend Development, Prototyping & Simulation, UI/UX Research, Business Process Design
- **GitHub URL:** https://github.com/Felix-Panjaitan/DanaIn
- **Tags/Badges:** Fullstack (index), Web Dev, System Design
- **Source files:** `index.html`, `project-danain.html`

#### 6. Hybrid Recommender System / Movie Recommendation System
- **Exact project title:** Hybrid Recommender System (Index) / Movie Recommendation System (Detail)
- **Category:** AI & Data / ML Systems
- **Short description:** Deployed a Content-based & Collaborative filtering engine to solve the cold-start problem.
- **Complete long description:** Project Summary: To solve the "paradox of choice" on streaming platforms, we built a hybrid movie recommender system. It uses Collaborative Filtering (SVD) for deep personalization and Content-Based Filtering to effectively handle the cold-start problem for new users. My Impact: My main impact was on the qualitative evaluation stage, where I acted as the "first user" to test the system's end-to-end flow. I critically analyzed the relevance of the recommendations, ensuring the transition from content-based to collaborative filtering felt logical and intelligent. What I Learned: This project taught me that a great machine learning model is only as good as the interface that delivers it. I learned how to translate complex mathematical concepts like SVD into a simple, intuitive user experience.
- **Role/contribution:** Implementation Contributor & Model Analyst (Group Project)
- **Project Team:** Wisnutomo Adji Nugroho (Lead Model Training & App Development), Brainardo Kenneth Siahu (Report & Documentation)
- **Technologies:** Python, Streamlit, Pandas, Scikit-learn, TMDB API
- **Key Skills Acquired:** Model Evaluation, API Integration, Streamlit Dev, Qualitative Analysis, User-Centric Design, Problem Solving
- **GitHub URL:** https://github.com/Varixen98/ml_uap_project_recommender_system_smst_4
- **Live demo URL:** https://ml-project-recommender-kel5.streamlit.app/
- **Tags/Badges:** ML Systems (index), SVD, Streamlit
- **Source files:** `index.html`, `project-recommender.html`

**PRESENT IN SOURCE BUT NOT CURRENTLY DISPLAYED**
- None found.

### E. Research / Publications
- **Complete title:** Hybrid Ensemble Model for Stock Price Forecasting
- **Authors:** Wisnutomo Adji Nugroho (Lead Author), Fernando Darren Rachman, Brainardo Kenneth Siahu
- **Publisher:** Elsevier
- **Venue:** Procedia Computer Science
- **Year:** 2025
- **Volume/Pages:** Volume 269, Pages 901-910
- **DOI:** 10.1016/j.procs.2025.09.033
- **ScienceDirect/link:** https://www.sciencedirect.com/science/article/pii/S1877050925026948
- **Methodology/Models:** ARIMA, Random Forest, and LSTM, enhanced with a meta-learner.

### F. Education
No education section is present in the current portfolio.

### G. Skills
**Programming Languages**
- Python (NumPy, Pandas)
- Java (OOP)
- C Language (Data Structures)
- HTML, CSS & JavaScript
- SQL

**Frontend / Web**
- HTML, CSS & JavaScript
- REST API Development
- Streamlit & Cloud Deployment

**AI / Machine Learning**
- TensorFlow / Keras
- PyTorch
- Scikit-learn
- OpenCV & Computer Vision
- YOLOv8
- NLTK & Hugging Face (NLP)
- Generative AI & LLMs

**Data Science / Comp Science**
- Biopython (Comp. Biology)
- PPE (Python Power Electronics)
- Scientific Computing

**Design / Tools**
- UI/UX Design & Prototyping
- System Analysis & Design (UML)
- Git & Version Control

**Other Technical Skills**
- Augmented Reality (Assemblr)
- Computer Networks

**Visual Representation:** 
Plain text inside rounded tags with a secondary background color and border, displayed in a grid with two main categories: "AI & Computational Science" and "Software Engineering & Design".

### H. Certifications / Courses
No certifications section is present in the current portfolio.

### I. Awards / Achievements
No awards section is present in the current portfolio.

### J. Organizations / Leadership / Volunteering
No organizations section is present in the current portfolio.

### K. Contact Information
- **Email:** `fernando.rachman@binus.ac.id` (mailto link)
- **LinkedIn:** https://www.linkedin.com/in/fernando-darren-rachman

### L. Navigation & Site Structure
- **Navbar items:**
  - About (`#about`)
  - Projects (`#projects`)
  - Skills (`#skills`)
  - Contact (`#contact`)
  - Theme Toggle button
- **Page routes:**
  - `index.html`
  - `project-corndoctor.html`
  - `project-danain.html`
  - `project-dreamtalk.html`
  - `project-gigitaja.html`
  - `project-recommender.html`
  - `project-research.html`
- **Internal links:** "View My Work" (`#projects`), "Contact Me" (`#contact`), "Back to Home" (`index.html`)

==================================================
## PHASE 3 — VISUAL / UX CURRENT STATE
==================================================

### Overall visual style
- **Color palette:** Dark mode focused (`bg-primary: #0f172a`, `bg-secondary: #1e293b`), with light mode support. Accents include gradient blues to purples (`#3b82f6` to `#a855f7`).
- **Typography:** Inter font family.
- **Visual theme:** Glassmorphism (`bg-glass` with blur).
- **Dark/light mode:** Custom JS toggle, default dark mode.
- **Card style:** Rounded corners (`rounded-xl`), borders (`border-gray-700`), hover shadow/transform effects.
- **Gradients:** Linear gradients on main CTA buttons and primary titles.
- **Spacing:** Generous padding (`py-24`, `gap-12`) using Tailwind's spacing scale.

### Homepage layout
1. Header (Navbar, Sticky, Glassmorphism)
2. Hero (Profile image, Headline, Subtitle, CTA buttons)
3. About Me
4. Featured Projects (Filter tabs, Grid of project cards)
5. Technical Proficiency (Skills grid)
6. Contact
7. Footer

### Header/Navbar
Sticky top glassmorphism navbar. Hidden on mobile (`hidden md:flex`). Includes a theme toggle button.

### Hero
Centered layout. Profile picture with circular ring and pulse/scroll animation. Gradient text headline. Two CTA buttons.

### Projects
Cards with absolute positioned category tags. Hover effects scale the image and reveal text color changes. Filter buttons (All Work, AI & Data, Software Engineering) that work via vanilla JS.

### Skills
Split into two main blocks with borders and descriptions, followed by a flex-wrap container of tags.

### Footer
Simple copyright text centered at the bottom.

### Responsive behavior
Uses Tailwind's `md` and `lg` breakpoints to adjust grid columns (from 1 on mobile to 2 or 3 on desktop) and hide/show the navigation menu.

### Interactive behavior
- **Animations:** IntersectionObserver triggers `animate-on-scroll` for fade-up effects.
- **Hover effects:** Project cards elevate and borders highlight. Buttons scale.
- **Transitions:** Smooth color transitions when toggling dark/light mode.
- **Tabs:** Vanilla JS filters projects by hiding/showing cards with a fade-in animation.
- **Carousels:** Present in `project-danain.html` for images using custom JS.

==================================================
## PHASE 4 — TECHNICAL WEBSITE STATE
==================================================

### Frontend
HTML5, CSS3 (Vanilla + Tailwind CSS via CDN), JavaScript (Vanilla ES6+).

### Backend
Static site. No backend.

### Data
Hardcoded in HTML files.

### External Services
- Tailwind CSS (CDN)
- Google Fonts (Inter)
- Placehold.co (Fallback images via `onerror` attribute)

### Build & Deployment
No build scripts, package.json, or deployment configuration found. Pure static files.

### SEO
- **Page title:** Set correctly for each page (e.g. `Fernando Darren Rachman - AI Engineer Portfolio`).
- **Meta description:** Not found.
- **Keywords:** Not found.
- **OpenGraph metadata:** Not found.
- **Twitter card metadata:** Not found.
- **Canonical URL:** Not found.
- **Sitemap:** Not found.
- **robots.txt:** Not found.
- **Favicon:** `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` are referenced.

### Accessibility-related implementation
- **Alt text:** Used on most images.
- **Aria labels:** `aria-label="Toggle Dark Mode"` on the theme button.
- **Semantic HTML:** Uses `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.

### Performance-related implementation
- **External scripts:** Tailwind CSS loaded synchronously via CDN in the `<head>`.
- **Custom fonts:** Loaded from Google Fonts with `preconnect`.

==================================================
## PHASE 5 — DATA CONSISTENCY INVENTORY
==================================================

### Potential inconsistency
Location A:
`index.html`
Corn Doctor project name: "Corn Doctor: AgriTech Vision"

Location B:
`project-corndoctor.html`
Corn Doctor project name: "Corn Disease Doctor"

Source files:
`index.html`, `project-corndoctor.html`

### Potential inconsistency
Location A:
`index.html`
DreamTalk project name: "DreamTalk: Narrative AI"

Location B:
`project-dreamtalk.html`
DreamTalk project name: "DreamTalk: Generative Dream Narratives"

Source files:
`index.html`, `project-dreamtalk.html`

==================================================
## PHASE 6 — INFORMATION DENSITY
==================================================

### Longest text blocks
- **About Me:** ~130 words.
- **GigitAja Project Overview:** ~200 words.
- **DreamTalk Project Overview:** ~160 words.

### Number of items
- **Professional experiences:** 0
- **Organizational experiences:** 0
- **Projects:** 6
- **Publications:** 1
- **Skills:** 23
- **Certifications:** 0
- **Awards:** 0
- **Social links:** 2 (Email, LinkedIn)
- **Website sections:** 5 (Hero, About, Projects, Skills, Contact)

==================================================
## PHASE 7 — COMPLETE LINK INVENTORY
==================================================

| Label/Text | URL | Internal/External | Where Used | Source File |
|------------|-----|-------------------|------------|-------------|
| Email | `mailto:fernando.rachman@binus.ac.id` | External | Contact Section | `index.html` |
| LinkedIn | `https://www.linkedin.com/in/fernando-darren-rachman` | External | Contact Section | `index.html` |
| View My Work | `#projects` | Internal | Hero Section | `index.html` |
| Contact Me | `#contact` | Internal | Hero Section | `index.html` |
| Launch Diagnosis App | `https://cornleafdiseasesems5.streamlit.app/` | External | Corn Doctor Project | `project-corndoctor.html` |
| View on GitHub | `https://github.com/StuntLead/corn_leaf_disease_sems5` | External | Corn Doctor Project | `project-corndoctor.html` |
| Live App | `https://dreamgeneratorappsems4.streamlit.app/` | External | DreamTalk Project | `project-dreamtalk.html` |
| Hugging Face | `https://huggingface.co/StuntLead/dream_generator_gpt2` | External | DreamTalk Project | `project-dreamtalk.html` |
| Source Code | `https://github.com/StuntLead/dream_generator_app_sems4` | External | DreamTalk Project | `project-dreamtalk.html` |
| View on GitHub | `https://github.com/Felix-Panjaitan/DanaIn` | External | DANAin Project | `project-danain.html` |
| View Live Prototype | `https://stuntlead.github.io/GigitAjaPrototype/index.html` | External | GigitAja Project | `project-gigitaja.html` |
| View Live Demo | `https://ml-project-recommender-kel5.streamlit.app/` | External | Recommender Project | `project-recommender.html` |
| View on GitHub | `https://github.com/Varixen98/ml_uap_project_recommender_system_smst_4` | External | Recommender Project | `project-recommender.html` |
| View on ScienceDirect | `https://www.sciencedirect.com/science/article/pii/S1877050925026948` | External | Research Project | `project-research.html` |
| Project Links | `project-*.html` | Internal | Projects Section | `index.html` |

==================================================
## PHASE 8 — ASSET INVENTORY
==================================================

| Asset | File Path | Used Where | Description |
|-------|-----------|------------|-------------|
| Profile Photo | `assets/images/nando.png` | `index.html` | Main hero profile picture. |
| Corn Doctor App UI | `assets/images/corndoctor-photo.png` | `project-corndoctor.html` | Streamlit app screenshot. |
| DreamTalk UI | `assets/images/dreamtalk-photo.png` | `project-dreamtalk.html` | Streamlit app screenshot. |
| Recommender UI | `assets/images/recommender-app.png` | `project-recommender.html` | Streamlit app screenshot. |
| Recommender Team | `assets/images/recommender-team-photo.jpg` | `project-recommender.html` | Team group photo. |
| Recommender Demo | `assets/videos/recommender-demo.mp4` | `project-recommender.html` | Video demo of recommender app. |
| Presentation Photo | `assets/images/presentation-photo.jpg` | `project-research.html` | Photo of research presentation. |
| DANAin Screen 1 | `assets/images/danain-1.jpeg` | `project-danain.html` | App screenshot for carousel. |
| DANAin Screen 2 | `assets/images/danain-2.jpeg` | `project-danain.html` | App screenshot for carousel. |
| DANAin Screen 3 | `assets/images/danain-3.jpeg` | `project-danain.html` | App screenshot for carousel. |
| DANAin Screen 4 | `assets/images/danain-4.jpeg` | `project-danain.html` | App screenshot for carousel. |
| SDG 12 Icon | `assets/images/sdg12.png` | `project-gigitaja.html` | SDG Goal icon. |
| SDG 2 Icon | `assets/images/sdg2.png` | `project-gigitaja.html` | SDG Goal icon. |
| SDG 13 Icon | `assets/images/sdg13.webp` | `project-gigitaja.html` | SDG Goal icon. |

==================================================
## PHASE 9 — CURRENT PORTFOLIO FACT DATABASE
==================================================

# PORTFOLIO FACT DATABASE

## Identity
- Name: Fernando Darren Rachman
- Headline: AI Engineer & Product Builder
- Bio: In a tech landscape often divided between abstract research and practical application, I stand at the convergence. I am an AI Engineer and Product Developer obsessed with one goal: turning complex algorithms into intuitive, high-impact products.

## Professional Positioning
Bridging complex Artificial Intelligence algorithms and robust Software Engineering to build scalable, Intelligent Applications.

## Education
Not specified.

## Work Experience
Not specified.

## Projects
### Corn Disease Doctor
- Role: AI Engineer & Model Developer
- Tech: YOLOv8, Python, PyTorch, Streamlit
- Link: https://cornleafdiseasesems5.streamlit.app/

### DreamTalk: Generative Dream Narratives
- Role: AI Engineer & Full Stack Dev
- Tech: Python, PyTorch, GPT-2, Streamlit
- Link: https://dreamgeneratorappsems4.streamlit.app/

### GigitAja: Food Waste App
- Role: Technical Co-Founder & Lead Prototyper
- Tech: HTML5, CSS3, JavaScript, LocalStorage API
- Link: https://stuntlead.github.io/GigitAjaPrototype/index.html

### DANAin - Hybrid Crowdfunding Platform
- Role: Lead Frontend Developer, UX Researcher
- Tech: HTML5, CSS3, Tailwind CSS, JS (ES6+)
- Link: https://github.com/Felix-Panjaitan/DanaIn

### Movie Recommendation System
- Role: Implementation Contributor & Model Analyst
- Tech: Python, Streamlit, Pandas, Scikit-learn, TMDB API
- Link: https://ml-project-recommender-kel5.streamlit.app/

## Research & Publications
- Title: Hybrid Ensemble Model for Stock Price Forecasting
- Published: Procedia Computer Science (Elsevier), 2025
- DOI: 10.1016/j.procs.2025.09.033

## Technical Skills
- AI: Python, TensorFlow, PyTorch, Scikit-learn, OpenCV, YOLOv8, NLP, LLMs
- Software Eng: Java, C, SQL, REST API, HTML, CSS, JavaScript, Git

## Certifications
Not specified.

## Awards
Not specified.

## Organizations
Not specified.

## Contact & Links
- Email: fernando.rachman@binus.ac.id
- LinkedIn: https://www.linkedin.com/in/fernando-darren-rachman

## Website Technology Stack
- Vanilla HTML, CSS, JavaScript
- Tailwind CSS (via CDN)
- Google Fonts

## Website Pages / Sections
- Hero, About, Projects, Skills, Contact. Multiple project detail pages.

## Current SEO Metadata
- Title tags present. No meta descriptions or advanced SEO config.

## Potentially Conflicting Information
- Naming variations between `index.html` project titles and individual project page titles.

## Information Present in Source but Not Rendered
- None.

==================================================
## PHASE 10 — MACHINE-READABLE SUMMARY
==================================================

```json
{
  "identity": {
    "name": "Fernando Darren Rachman",
    "headline": "AI Engineer & Product Builder",
    "email": "fernando.rachman@binus.ac.id"
  },
  "education": [],
  "experience": [],
  "projects": [
    {
      "title": "Corn Disease Doctor",
      "role": "AI Engineer & Model Developer"
    },
    {
      "title": "DreamTalk: Generative Dream Narratives",
      "role": "AI Engineer & Full Stack Dev"
    },
    {
      "title": "GigitAja: Food Waste App",
      "role": "Technical Co-Founder & Lead Prototyper"
    },
    {
      "title": "DANAin - Hybrid Crowdfunding Platform",
      "role": "Lead Frontend Developer, UX Researcher"
    },
    {
      "title": "Movie Recommendation System",
      "role": "Implementation Contributor & Model Analyst"
    }
  ],
  "publications": [
    {
      "title": "Hybrid Ensemble Model for Stock Price Forecasting",
      "publisher": "Elsevier",
      "year": 2025
    }
  ],
  "skills": {
    "AI": ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "YOLOv8", "NLP"],
    "Software": ["Java", "C", "SQL", "REST API", "HTML", "CSS", "JavaScript"]
  },
  "certifications": [],
  "awards": [],
  "organizations": [],
  "social_links": {
    "linkedin": "https://www.linkedin.com/in/fernando-darren-rachman"
  },
  "website": {
    "framework": "Vanilla HTML/CSS/JS",
    "languages": ["HTML", "CSS", "JavaScript"],
    "libraries": ["Tailwind CSS"],
    "sections": ["Hero", "About", "Projects", "Skills", "Contact"],
    "routes": ["index.html", "project-corndoctor.html", "project-danain.html", "project-dreamtalk.html", "project-gigitaja.html", "project-recommender.html", "project-research.html"],
    "deployment": "Unknown (Static)",
    "seo": {
      "title": true,
      "meta_description": false
    }
  },
  "inconsistencies": [
    "Project name variations between index and detail pages"
  ],
  "hidden_or_unused_content": []
}
```
