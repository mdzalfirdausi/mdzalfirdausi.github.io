// ============================================================
// PORTFOLIO CONTENT — Single source of truth
// Muhammad Firdausi
// ============================================================

export const profile = {
  name: "Muhammad Firdausi", //[cite: 13]
  shortName: "M. Firdausi",
  credential: "Ph.D. Cand.", //[cite: 18]
  tagline: "Computational Operations Research & AI",
  role: "Ph.D. Candidate in Industrial & Systems Engineering @ KFUPM", //[cite: 15]
  location: "Dhahran, Saudi Arabia", //[cite: 15]
  availability: "Available for Research & Engineering Roles",
  resume: "resume/CV_1026.pdf",
  pills: [
    "Mathematical Optimization",
    "Machine Learning & AI",
    "High-Performance Computing",
    "Scientific Computing",
    "Operations Research", //[cite: 18, 19]
  ],
  description:
    "Computational Operations Research researcher and Ph.D. candidate in Industrial & Systems Engineering " +
    "specializing in large-scale mathematical programming, exact solution algorithms, and learning-augmented optimization. " +
    "Experienced in formulating and solving complex nonlinear and mixed-integer problems using state-of-the-art solvers (Gurobi, IPOPT) " +
    "across high-performance computing environments.", //[cite: 18]
  note:
    "Dedicated to advancing high-impact research programs in smart mobility, sustainable logistics, and integrated energy & " +
    "transportation infrastructure.", //[cite: 18]
  photo: "img/GIAN_VIEW_move.jpeg",
};

export const stats = [
  { value: 17, label: "Publications", suffix: "+" }, //[cite: 13]
  { value: 9, label: "Years Experience", suffix: "+" },
  { value: 3.62, label: "Ph.D. GPA", suffix: "/4" }, //[cite: 15]
];

export const about = {
  paragraphs: [
    "I am a <strong>Computational Operations Research researcher</strong> and Ph.D. candidate in Industrial & Systems Engineering. " +
      "My work specializes in large-scale mathematical programming, exact solution algorithms, and learning-augmented optimization.", //[cite: 18]
    "I have a proven track record of integrating machine learning with exact mathematical methods to accelerate computational " +
      "performance for large-scale network systems. I formulate and solve complex nonlinear and mixed-integer problems using " +
      "state-of-the-art solvers like <strong>Gurobi and IPOPT</strong> across high-performance computing (HPC) environments.", //[cite: 18]
    "My current dissertation focuses on <strong>Machine Learning for Optimal Power Flow</strong> at King Fahd University of " +
      "Petroleum and Minerals. Previously, I developed convolutional neural networks for multivariate machine-fault detection and " +
      "genetic-algorithm-based job-shop scheduling models.", //[cite: 15, 16]
  ],
  highlights: [
    {
      icon: "🎯",
      title: "Core Expertise",
      items: [
        "Large-Scale Mathematical Programming",
        "Exact Solution Algorithms (Gurobi, IPOPT, Pyomo, CVXPY)", //[cite: 19]
        "Learning-Augmented Optimization", //[cite: 18]
        "High-Performance Computing (Slurm, CUDA, NVIDIA GPUs)", //[cite: 19]
        "Deep Learning (PyTorch, TensorFlow, PyTorch Geometric)", //[cite: 19]
      ],
    },
    {
      icon: "🏆",
      title: "Key Achievements",
      items: [
        "17 Academic Publications in High-Impact Journals & Conferences", //[cite: 13]
        "International Student Scholarship Awardee (KFUPM & KSU)", //[cite: 15]
        "Developed ML Models for Real-World Electricity Distribution (RDIA-SA)", //[cite: 16]
        "Taught 'Introduction to Data Science' (Python) at KFUPM", //[cite: 16]
      ],
    },
  ],
};

export const education = [
  {
    badge: "Ph.D.",
    badgeClass: "phd",
    period: "Aug 2022 – Present", //[cite: 15]
    degree: "Ph.D. in Industrial & Systems Engineering",
    school: "King Fahd University of Petroleum and Minerals", //[cite: 15]
    gpa: "GPA: 3.625/4",
    details: [
      { label: "Dissertation", text: "Machine Learning for Optimal Power Flow" }, //[cite: 15]
      { label: "Advisor", text: "Syed Mujahid, Ph.D." }, //[cite: 15]
      { label: "Award", text: "International student scholarship in ISE Dept." }, //[cite: 15]
    ],
    courses: ["Mathematical Programming", "Machine Learning", "Energy Systems"],
  },
  {
    badge: "M.Sc.",
    badgeClass: "masters",
    period: "Jan 2018 – Dec 2021", //[cite: 15]
    degree: "M.Sc. in Industrial Engineering",
    school: "King Saud University", //[cite: 15]
    gpa: "GPA: 4.44/5",
    details: [
      { label: "Thesis", text: "Development of Machine Learning Model for Multivariate Fault Detection" }, //[cite: 15]
      { label: "Advisor", text: "Prof. Shafiq Ahmad" }, //[cite: 15]
      { label: "Award", text: "International student scholarship in IE Dept." }, //[cite: 15]
    ],
    courses: ["Manufacturing Systems", "Vibration Analysis", "Deep Learning"],
  },
  {
    badge: "Diploma",
    badgeClass: "bachelors",
    period: "Jan 2015 – Sep 2016", //[cite: 15]
    degree: "Diploma in Applied Arabic Language",
    school: "Muhammadiyah University at Malang", //[cite: 15]
    gpa: "GPA: 96.07/100",
    details: [
      { label: "Awards", text: "Tuition scholarship & Al-Bidaya wa Al-Nihaya books for excellent students" }, //[cite: 15]
    ],
    courses: ["Arabic Literature", "Language Acquisition"],
  },
  {
    badge: "B.Eng.",
    badgeClass: "bachelors",
    period: "Jul 2010 – Jun 2014", //[cite: 15]
    degree: "B.Eng. in Industrial Engineering",
    school: "University of Brawijaya", //[cite: 15]
    gpa: "GPA: 3.69/4",
    details: [
      { label: "Thesis", text: "Development of Mobile Business App for Supplier's Good Quantity Inspection" }, //[cite: 15]
      { label: "Advisor", text: "Purnomo Budi Santoso, Ph.D." }, //[cite: 15]
      { label: "Award", text: "PPA scholarship for outstanding students" }, //[cite: 15]
    ],
    courses: ["Operations Research", "Systems Design", "Statistics"],
  },
];

export const experience = [
  {
    current: true,
    icon: "🔬",
    title: "PhD Researcher, Instructor, and Teaching Assistant", //[cite: 16]
    org: "King Fahd University of Petroleum and Minerals",
    period: "Aug 2022 – Present", //[cite: 16]
    badge: "Current Position",
    summary:
      "Joined a research team focusing on machine learning for the energy sector and proposed a cutting-edge solution for a real-world electricity-distribution problem to RDIA-SA. " +
      "Taught the university-wide 'Introduction to Data Science' course (ISE 291) developing lectures, assignments, and hands-on sessions in Python.", //[cite: 16]
    highlights: [
      "⚡ HPC (NVIDIA A100/K80 GPUs)", //[cite: 16]
      "📚 Taught ISE 291 (Python)", //[cite: 16]
      "📊 ABET Accreditation Coordination", //[cite: 16]
      "🤖 ML for Energy Networks",
    ],
    toggleLabel: "Key Contributions",
    projects: [
      {
        title: "Model Acceleration & HPC Infrastructure",
        body: [
          { label: "Implementation", text: "Utilized KFUPM high-performance computing (HPC) cluster with NVIDIA Tesla K80 and NVIDIA A100 GPUs to accelerate model training and inference." }, //[cite: 16]
        ],
      },
      {
        title: "Departmental Administration & Research",
        body: [
          { label: "ABET", text: "Collaborated to streamline ABET accreditation reporting for the ISE department, organizing documentation and ensuring timely submission." }, //[cite: 16]
          { label: "Socio-Economics", text: "Studied and published a paper on the application of machine learning methods for socio-economics science." }, //[cite: 16]
          { label: "HR Analytics", text: "Developed and implemented an 'operational neural networks' architecture to predict and analyze employee turnover." }, //[cite: 16]
        ],
      },
    ],
  },
  {
    icon: "🏭",
    title: "Manufacturing Systems Researcher", //[cite: 16]
    org: "King Saud University",
    period: "Jan 2018 – Dec 2021", //[cite: 16]
    summary:
      "Developed advanced predictive models and optimization algorithms for manufacturing environments, including deep learning for machine-fault detection and genetic algorithms for operational scheduling.",
    highlights: [
      "🤖 PyTorch CNNs", //[cite: 16]
      "⚙️ Job-Shop Scheduling", //[cite: 16]
      "📉 Cost Optimization", //[cite: 16]
    ],
    toggleLabel: "Detailed Projects",
    projects: [
      {
        title: "Multivariate Machine-Fault Detection",
        body: [
          { label: "Implementation", text: "Developed a convolutional neural network in PyTorch for machine-fault detection via vibration analysis on open-source datasets (Paderborn University and Southeast University) leveraging Google Colab's NVIDIA Tesla T4 GPU." }, //[cite: 16]
        ],
      },
      {
        title: "Genetic-Algorithm-Based Job-Shop Scheduling",
        body: [
          { label: "Implementation", text: "Designed and implemented a genetic-algorithm-based job-shop scheduling model in MATLAB for the National Company for Mechanical Systems (NCMS), minimizing makespan and reducing operating costs." }, //[cite: 16]
        ],
      },
    ],
  },
  {
    icon: "🚌",
    title: "Transportation Specialist", //[cite: 17]
    org: "Consulate General of The Republic of Indonesia in Jeddah",
    period: "Jul 2018 – Aug 2022 (during Hajj season)", //[cite: 17]
    summary:
      "Joined as a transportation specialist serving 221,000 Indonesian pilgrims in Makkah, Saudi Arabia. Participated in long 12/7 shifts day and night.", //[cite: 17]
    highlights: ["🚌 Route Planning", "📊 Crowd Risk Analysis", "👥 221K Pilgrims"], //[cite: 17]
    toggleLabel: "Responsibilities",
    projects: [
      {
        title: "Crowd Safety & Logistics Optimization",
        body: [
          { label: "Analysis", text: "Implemented Crowd Safety and Crowd Risk Analysis frameworks." }, //[cite: 17]
          { label: "Operations", text: "Created schedules for bus departures and arrivals, and directed pilgrim group transfers between hotels and Masjid al-Haram." }, //[cite: 17]
        ],
      },
    ],
  },
  {
    icon: "📚",
    title: "Quran Memorization Teacher", //[cite: 17]
    org: "Halaqa Al-Shawi for Quran Memorization",
    period: "Jan 2021 – Jul 2022", //[cite: 17]
    summary:
      "Guided international students through Quran memorization, fostering active engagement and retention using bilingual instruction (Arabic and English).", //[cite: 17]
  },
  {
    icon: "🍬",
    title: "Senior Industrial Engineer", //[cite: 16]
    org: "Sin A Sixfifteen Inc.",
    period: "Sept 2020 – Dec 2020", //[cite: 16]
    summary:
      "Optimized ginger-soft-candy production for international clients using Genba Kaizen, increasing throughput and reducing waste. Maintained workflows across Maintenance, R&D, and PPIC.", //[cite: 16]
    highlights: ["📈 OEE Reporting", "🏭 Genba Kaizen", "♻️ Waste Reduction"], //[cite: 16]
  },
  {
    icon: "✈️",
    title: "Project Management Officer & Flight Deck Engineer", //[cite: 16]
    org: "Indonesian Aerospace Inc.",
    period: "Jan 2017 – Jan 2018", //[cite: 16]
    summary:
      "Planned integrated timelines for fixed-wing military and test-bed aircraft. Configured flight decks on civil/military aircraft (CN-235, CN-295, NC-212, Super Puma) ensuring avionics met specs.", //[cite: 16]
    highlights: ["📅 Schedule Management", "🛩️ Avionics Configuration", "✅ User Acceptance Testing"], //[cite: 16]
  },
  {
    icon: "📦",
    title: "Finish Good Warehouse Designer Intern", //[cite: 16]
    org: "Philips Lighting Indonesia Inc.",
    period: "Feb 2013 – Mar 2013", //[cite: 16]
    summary:
      "Surveyed and quantified floor space, establishing the usable footprint. Developed storage-layout plans, rack counts, aisle widths, and pick-path locations for fast-moving goods.", //[cite: 16]
  },
];

export const publications = [
  {
    year: 2026,
    title: "A Unified PINN Framework: Evaluating the Impact of Pre-Physics Projection Sub-Layers and Loss-Weighting Strategies on the Feasibility and Optimality of ACOPF Solutions", //[cite: 13]
    authors: "<strong>M. Firdausi</strong>, M. N. Syed", //[cite: 13]
    venue: "IEEE Access", //[cite: 13]
    tags: ["PINNs", "ACOPF", "Deep Learning"],
    url: "https://ieeexplore.ieee.org/document/11733303", //[cite: 13]
  },
  {
    year: 2026,
    title: "Machine Learning for Exact Simplex Basis Prediction: A Discrete Combinatorial Warm-Start for Real-Time DC Optimal Power Flow", //[cite: 13]
    authors: "<strong>M. Firdausi</strong>, A. Alghazi, M. N. Syed", //[cite: 13]
    venue: "Results in Engineering (Under review)", //[cite: 13]
    tags: ["Machine Learning", "Optimization", "Power Flow"],
  },
  {
    year: 2026,
    title: "From Academic Literature to Industrial Impact: A Bi-Directional Review of Machine Learning and Optimization for Optimal Power Flow", //[cite: 13]
    authors: "<strong>M. Firdausi</strong>, M. N. Syed, A. I. Malik", //[cite: 13]
    venue: "Artificial Intelligence Review (Under review)", //[cite: 13]
    tags: ["Review", "Optimization", "Machine Learning"],
  },
  {
    year: 2025,
    title: "The Zakat, Economic Growth, and Poverty Alleviation: An Artificial Neural Networks Analysis", //[cite: 13]
    authors: "A. A. S. Muis, <strong>M. Firdausi</strong>, C. Akbar, S. Gamal, H. Saleh", //[cite: 13]
    venue: "International Journal of Zakat", //[cite: 13]
    tags: ["Neural Networks", "Socio-Economics"],
    url: "https://www.ijazbaznas.com/index.php/journal/article/view/467", //[cite: 13]
  },
  {
    year: 2022,
    title: "SEI²RS Malware Propagation Model Considering Two Infection Rates in Cyber–Physical Systems", //[cite: 13]
    authors: "Z. Yu, H. Gao, D. Wang, A. A. Alnuaim, <strong>M. Firdausi</strong>, A. M. Mostafa", //[cite: 13]
    venue: "Phys. A: Stat. Mech. Appl.", //[cite: 13]
    tags: ["Cyber-Physical Systems", "Modeling"],
    url: "https://doi.org/10.1016/j.physa.2022.127207", //[cite: 13]
  },
  {
    year: 2022,
    title: "Concise convolutional neural network model for fault detection", //[cite: 13]
    authors: "<strong>M. Firdausi</strong>, S. Ahmad", //[cite: 13]
    venue: "Commun. Sci. Technol.", //[cite: 13]
    tags: ["CNN", "Fault Detection"],
    url: "https://doi.org/10.21924/cst.7.1.2022.746", //[cite: 13]
  },
  {
    year: 2021,
    title: "User-Defined Dual Setting Directional Overcurrent Relays with Hybrid Time Current-Voltage Characteristics-Based Protection Coordination for Active Distribution Network", //[cite: 13]
    authors: "L. Hong, M. Rizwan, M. Wasif, S. Ahmad, M. Zaindin, <strong>M. Firdausi</strong>", //[cite: 13]
    venue: "IEEE Access", //[cite: 13]
    tags: ["Energy Systems", "Protection Coordination"],
    url: "https://doi.org/10.1109/ACCESS.2021.3074426", //[cite: 13]
  },
  {
    year: 2021,
    title: "Generalized Structures for Switched-Capacitor Multilevel Inverter Topology for Energy Storage System Application", //[cite: 13]
    authors: "M. Anas, A. Sarwar, A. Ahmad, A. Alam, S. Ahmad, M. Sharaf, M. Zaindin, <strong>M. Firdausi</strong>", //[cite: 13]
    venue: "MDPI Applied Sciences", //[cite: 13]
    tags: ["Energy Storage", "Topology"],
    url: "https://doi.org/10.3390/app11031319", //[cite: 13]
  },
  {
    year: 2021,
    title: "Green thin film for stable electrical switching in a low-cost washable memory device: proof of concept", //[cite: 13]
    authors: "N. Arshad, M. S. Irshad, M. S. Abbasi, S. Ur Rehman, I. Ahmed, M. Q. Javed, S. Ahmad, M. Sharaf, <strong>M. Firdausi</strong>", //[cite: 13]
    venue: "RSC Advances", //[cite: 13]
    tags: ["Materials Science", "Thin Films"],
    url: "https://doi.org/10.1039/D0RA08784J", //[cite: 13]
  },
  {
    year: 2021,
    title: "Liver-Tumor Detection Using CNN ResUNet", //[cite: 13]
    authors: "M. S. Aslam, M. Younas, M. U. Sarwar, M. A. Shah, A. Khan, M. I. Uddin, S. Ahmad, <strong>M. Firdausi</strong>, M. Zaindin", //[cite: 13]
    venue: "Tech Science Press", //[cite: 13]
    tags: ["CNN", "ResUNet", "Medical Imaging"],
    url: "https://www.techscience.com/cmc/v67n2/41366", //[cite: 13]
  },
  {
    year: 2020,
    title: "Machine Learning Approach for Answer Detection in Discussion Forums: An Application of Big Data Analytics", //[cite: 13]
    authors: "A. Khan, I. Ibrahim, M. Irfan Uddin, M. Zubair, S. Ahmad, <strong>M. Firdausi</strong>, M. Zaindin", //[cite: 13]
    venue: "Scientific Programming", //[cite: 13]
    tags: ["Machine Learning", "Big Data"],
    url: "https://doi.org/10.1155/2020/4621196", //[cite: 13]
  },
  {
    year: 2020,
    title: "Summarizing Online Movie Reviews: A Machine Learning Approach to Big Data Analytics", //[cite: 13]
    authors: "A. Khan, M. A. Gul, M. I. Uddin, S. A. A. Shah, S. Ahmad, <strong>M. Firdausi</strong>, M. Zaindin", //[cite: 13]
    venue: "Scientific Programming", //[cite: 13]
    tags: ["Machine Learning", "NLP"],
    url: "https://doi.org/10.1155/2020/5812715", //[cite: 13]
  },
  {
    year: 2020,
    title: "A New High Voltage Gain DC to DC Converter with Low Voltage Stress for Energy Storage System Application", //[cite: 13]
    authors: "J. Ahmad, C. H. Lin, M. Zaid, A. Sarwar, S. Ahmad, M. Sharaf, M. Zaindin, <strong>M. Firdausi</strong>", //[cite: 13]
    venue: "MDPI electronics", //[cite: 13]
    tags: ["Energy Storage", "Hardware"],
    url: "https://doi.org/10.3390/electronics9122067", //[cite: 13]
  },
  {
    year: 2020,
    title: "A Voltage Multiplier Circuit Based Quadratic Boost Converter for Energy Storage Application", //[cite: 13]
    authors: "J. Ahmad, M. Zaid, A. Sarwar, C. H. Lin, S. Ahmad, M. Sharaf, M. Zaindin, <strong>M. Firdausi</strong>", //[cite: 13]
    venue: "MDPI applied sciences", //[cite: 13]
    tags: ["Energy Storage", "Hardware"],
    url: "https://doi.org/10.3390/app10228254", //[cite: 13]
  },
  {
    year: 2020,
    title: "Super Hydrophilic Activated Carbon Decorated Nanopolymer Foam for Scalable, Energy Efficient Photothermal Steam Generation, as an Effective Desalination System", //[cite: 13]
    authors: "N. Arshad, I. Ahmed, M. S. Irshad, H. R. Li, X. Wang, S. Ahmad, M. Sharaf, <strong>M. Firdausi</strong>, M. Zaindin, M. Atif", //[cite: 13]
    venue: "MDPI nanomaterials", //[cite: 13]
    tags: ["Nanomaterials", "Desalination"],
    url: "https://doi.org/10.3390/nano10122510", //[cite: 13]
  },
  {
    year: 2020,
    title: "Biomaterial-Induced Stable Resistive Switching Mechanism in TiO2 Thin Films: The Role of Active Interstitial Sites/Ions in Minimum Current Leakage and Superior Bioactivity", //[cite: 13]
    authors: "M. S. Abbasi, M. Sultan Irshad, N. Arshad, I. Ahmed, M. Idrees, S. Ahmad, Z. Wei, M. Sharaf, <strong>M. Firdausi</strong>", //[cite: 13]
    venue: "ACS Omega", //[cite: 13]
    tags: ["Thin Films", "Bioactivity"],
    url: "https://doi.org/10.1021/acsomega.0c02410", //[cite: 13]
  },
];

export const scholarUrl = "https://scholar.google.com/citations?user=nVl3wMAAAAAJ&hl=en";

export const skills = [
  {
    icon: "🧠",
    title: "Machine Learning & AI",
    tags: ["PyTorch", "TensorFlow", "Pytorch Geometric", "Scikit-Learn"], //[cite: 19]
  },
  {
    icon: "🧮",
    title: "Optimization & Solvers",
    tags: ["Gurobi", "IPOPT", "Pyomo", "JuMP", "CPLEX", "CVXPY", "MINLP", "QCQP"], //[cite: 19]
  },
  {
    icon: "💻",
    title: "Scientific Computing",
    tags: ["Python", "Julia", "MATLAB", "R", "Slurm", "Linux / Bash"], //[cite: 19]
  },
  {
    icon: "⚡",
    title: "Hardware & HPC",
    tags: ["NVIDIA HPC Clusters", "Multi-GPU Acceleration", "CUDA"], //[cite: 19]
  },
  {
    icon: "🏭",
    title: "Operations & Logistics",
    tags: ["Job-Shop Scheduling", "Crowd Risk Analysis", "Fleet Dispatching", "Facility Layout"], //[cite: 19]
  },
  {
    icon: "🗣️",
    title: "Languages",
    tags: ["English", "Arabic", "Indonesian"], //[cite: 19]
  },
];

export const projectCategories = [
  { id: "opt", label: "Optimization" },
  { id: "ml", label: "Machine Learning" },
  { id: "hpc", label: "HPC Systems" },
];

export const projects = [
  {
    category: "opt",
    visual: { type: "bars" },
    title: "Genetic-Algorithm-Based Job-Shop Scheduling",
    desc: [
      "Designed and implemented a scheduling model in MATLAB for NCMS, effectively minimizing makespan and reducing operating costs.", //[cite: 16]
    ],
    metrics: [
      { value: "Cost", label: "Reduction" },
      { value: "Makespan", label: "Optimized" },
    ],
    tech: ["MATLAB", "Genetic Algorithms"],
  },
  {
    category: "ml",
    visual: { type: "detect" },
    title: "Multivariate Machine-Fault Detection",
    desc: [
      "Developed a PyTorch-based convolutional neural network to process vibration analysis data for automated machine fault detection.", //[cite: 16]
    ],
    metrics: [
      { value: "CNN", label: "Architecture" },
      { value: "Tesla T4", label: "GPU Accel" },
    ],
    tech: ["PyTorch", "Deep Learning", "Signal Processing"],
  },
];

export const awards = [
  { cls: "scholarship", medal: "🎓", title: "Ph.D. Scholarship", org: "King Fahd University of Petroleum & Minerals", desc: "International Student Scholarship", year: "2022" }, //[cite: 15]
  { cls: "scholarship", medal: "🎓", title: "M.Sc. Scholarship", org: "King Saud University", desc: "International Student Scholarship", year: "2018" }, //[cite: 15]
  { cls: "gold", medal: "🏅", title: "Outstanding Student", org: "Muhammadiyah University at Malang", desc: "Tuition Scholarship & Book Award", year: "2015" }, //[cite: 15]
  { cls: "bronze", medal: "📜", title: "2nd International Conference on Smart Mobility", org: "IRC for Smart Mobility & Logistics, KFUPM", desc: "Certificate", year: "2026" }, //[cite: 14]
  { cls: "bronze", medal: "📜", title: "AI Products Development", org: "King Saud University", desc: "Certificate", year: "2022" }, //[cite: 14]
  { cls: "bronze", medal: "📜", title: "Python Programming", org: "KOMINFO & Cisco Networking Academy", desc: "Digital Talent Scholarship", year: "2020" }, //[cite: 14]
  { cls: "bronze", medal: "📜", title: "Machine Learning Explainability", org: "Kaggle", desc: "Certificate", year: "2020" }, //[cite: 14]
  { cls: "bronze", medal: "📜", title: "Technology and Management of Big Data", org: "Dattabot", desc: "Hadoop Fundamentals", year: "2017" }, //[cite: 14]
];

export const contacts = [
  { type: "email", title: "Email", text: "firdaus251@gmail.com", href: "mailto:firdaus251@gmail.com" },
  { type: "linkedin", title: "LinkedIn", text: "linkedin.com/in/mdzalfirdausi", href: "https://linkedin.com/in/mdzalfirdausi" },
  { type: "github", title: "GitHub", text: "github.com/mdzalfirdausi", href: "https://github.com/mdzalfirdausi" },
  { type: "phone", title: "Phone", numbers: [{ text: "+966 50-774-1857", href: "tel:+966507741857" }] },
];

export const social = {
  scholar: "https://scholar.google.com/citations?user=nVl3wMAAAAAJ&hl=en",
  github: "https://github.com/mdzalfirdausi",
  linkedin: "https://linkedin.com/in/mdzalfirdausi",
  email: "mailto:firdaus251@gmail.com",
};