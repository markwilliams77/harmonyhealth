export interface Treatment {
  id: string;
  name: string;
  category: string;
  desc: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  procedure?: {
    steps: string[];
    duration: string;
    recovery: string;
  };
  specialties: string[];
}

export const TREATMENTS: Treatment[] = [
  {
    id: "kidney-transplant",
    name: "Kidney Transplant",
    category: "Advanced Medical Care",
    desc: "Life-saving renal transplants performed by elite surgical teams.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Our network of specialized renal centers offers world-class kidney transplantation services. We facilitate both living and deceased donor transplants, utilizing the most advanced surgical techniques to ensure optimal patient outcomes and rapid recovery.",
    benefits: [
      "Access to globally renowned surgeons",
      "Shorter wait times for compatible donors",
      "Advanced robotic-assisted transplant options",
      "Comprehensive post-operative monitoring and care"
    ],
    procedure: {
      steps: [
        "Pre-transplant compatibility screening and evaluation",
        "Donor selection and preparation",
        "Surgical transplantation procedure",
        "Post-operative ICU monitoring",
        "Rehabilitation and immunosuppression management"
      ],
      duration: "4 - 6 hours",
      recovery: "2 - 4 weeks in-hospital, 3 months full recovery"
    },
    specialties: ["Nephrology", "Transplant Surgery", "Immunology"]
  },
  {
    id: "bone-marrow-transplant",
    name: "Bone Marrow Transplant",
    category: "Advanced Medical Care",
    desc: "Advanced hematology and stem cell transplantation for complex disorders.",
    image: "https://images.unsplash.com/photo-1631815587644-b83445cd17a6?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Bone Marrow Transplantation (BMT) is a standard of care for many serious blood and immune system disorders. Our partner facilities offer both Autologous and Allogeneic transplants, featuring isolated sterile units and specialized nursing teams.",
    benefits: [
      "High-precision HLA typing",
      "Ultra-sterile hematology units",
      "Multidisciplinary team of hematologists and oncologists",
      "Dedicated palliative and nutritional support"
    ],
    procedure: {
      steps: [
        "Conditioning regimen (chemotherapy/radiotherapy)",
        "Stem cell harvesting (from donor or patient)",
        "Infusion of stem cells",
        "Engraftment monitoring",
        "Long-term immune system monitoring"
      ],
      duration: "Preparation weeks, infusion 1-2 hours",
      recovery: "4 - 6 weeks in isolated unit, 6-12 months full recovery"
    },
    specialties: ["Hematology", "Oncology", "Immunotherapy"]
  },
  {
    id: "liver-transplant",
    name: "Liver Transplant",
    category: "Advanced Medical Care",
    desc: "Comprehensive liver care and transplantation using state-of-the-art techniques.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Liver transplantation is a life-saving procedure for patients with end-stage liver disease or acute liver failure. Our surgeons specialize in both whole-organ transplants and living donor liver transplants (LDLT), where a portion of a healthy liver is transplanted.",
    benefits: [
        "Leading success rates in complex hepatobiliary surgery",
        "Expertise in split-liver and living donor procedures",
        "Advanced intensive care for recovery",
        "Seamless coordination for international patients"
    ],
    procedure: {
      steps: [
        "Extensive diagnostic evaluation and liver mapping",
        "Laparoscopic or open donor surgery",
        "Recipient hepatectomy and implantation",
        "Intensive liver function monitoring",
        "Life-long therapy management"
      ],
      duration: "6 - 12 hours",
      recovery: "3 weeks in-hospital, 6 months for life return"
    },
    specialties: ["Hepatology", "Gastroenterology", "Transplant Surgery"]
  },
  {
    id: "cardiac-surgery",
    name: "Cardiac Surgery",
    category: "Advanced Medical Care",
    desc: "Bypass, valve replacement, and complex heart procedures by renowned surgeons.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Our partner cardiac centers provide the full spectrum of heart surgery, from Coronary Artery Bypass Grafting (CABG) to heart valve repair and replacement. We prioritize minimally invasive techniques where possible to reduce trauma and speed up recovery.",
    benefits: [
        "Board-certified cardiovascular surgeons",
        "Hybrid operating rooms for complex procedures",
        "High success rates for high-risk patients",
        "Advanced cardiac rehabilitation programs"
    ],
    procedure: {
      steps: [
        "Comprehensive cardiac imaging (Echo, MRI, Angio)",
        "Anesthesia and surgical approach",
        "Heart-lung machine support (if required)",
        "Repair or replacement of cardiac structures",
        "Gradual post-op weaning and rehab"
      ],
      duration: "3 - 6 hours",
      recovery: "1 week in-hospital, 4-8 weeks overall"
    },
    specialties: ["Cardiology", "Cardiovascular Surgery", "Anesthesiology"]
  },
  {
    id: "orthopedic-surgery",
    name: "Orthopedic Surgery",
    category: "Advanced Medical Care",
    desc: "Joint replacements and spinal surgery using advanced prosthetic technology.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Specializing in joint replacements (hip, knee, shoulder) and complex spinal surgeries, our orthopedic centers utilize robotic-assisted navigation and 3D-printed custom implants for unmatched precision and mobility restoration.",
    benefits: [
        "Rapid-recovery protocols",
        "Minimally invasive arthroscopic techniques",
        "Custom-fit prosthetics and implants",
        "World-class physiotherapy and rehabilitation"
    ],
    procedure: {
      steps: [
        "Biomechanical gait analysis and imaging",
        "Surgical incision and joint preparation",
        "Precision placement of prosthetic components",
        "Soft tissue balancing",
        "Immediate assisted mobilization"
      ],
      duration: "1.5 - 3 hours",
      recovery: "3 - 5 days in-hospital, 4-6 weeks for mobility"
    },
    specialties: ["Orthopedics", "Sports Medicine", "Physiotherapy"]
  },
  {
    id: "ivf-fertility",
    name: "IVF & Fertility",
    category: "Advanced Medical Care",
    desc: "Advanced reproductive technology and personalized fertility programs.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Our fertility clinics offer a compassionate and scientifically advanced approach to family building. From IVF and ICSI to egg freezing and PGT, we provide the highest standards of embryology in a luxury, stress-free environment.",
    benefits: [
        "Success rates exceeding international benchmarks",
        "Personalized stimulation protocols",
        "Advanced embryo screening (PGT-A/PGT-M)",
        "Holistic support (Nutritional, Psychological)"
    ],
    procedure: {
      steps: [
        "Ovarian stimulation and monitoring",
        "Egg retrieval under mild sedation",
        "Laboratory fertilization and cultivation",
        "Embryo transfer",
        "Post-transfer support and monitoring"
      ],
      duration: "2 - 4 weeks per cycle",
      recovery: "Minimal (same-day discharge)"
    },
    specialties: ["Reproductive Medicine", "Embryology", "Endocrinology"]
  },
  {
    id: "oncology",
    name: "Oncology",
    category: "Advanced Medical Care",
    desc: "Minimally invasive cancer surgery and advanced oncology treatments.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Our oncology centers are dedicated to providing personalized cancer care. We utilize multi-disciplinary tumor boards to create tailored treatment plans that may include immunotherapy, targeted therapy, or precision radiotherapy.",
    benefits: [
        "Access to latest clinical trials",
        "State-of-the-art linear accelerators (CyberKnife/GammaKnife)",
        "Genetic profiling of tumors",
        "Supportive care and pain management"
    ],
    procedure: {
      steps: [
        "Biopsy and comprehensive staging",
        "Tumor board review and plan design",
        "Main treatment phase (Surgery/Chemo/Rad)",
        "Immune system support",
        "Surveillance and survivorship care"
      ],
      duration: "Variable based on treatment",
      recovery: "Specific to treatment type"
    },
    specialties: ["Surgical Oncology", "Medical Oncology", "Radiation Therapy"]
  },
  // Wellness
  {
    id: "anti-ageing-therapy",
    name: "Anti-Ageing Therapy",
    category: "Wellness & Longevity",
    desc: "Stem cell treatments and personalized longevity protocols.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Anti-ageing therapy at our partner clinics focuses on biological rejuvenation. We use stem cell treatments, NAD+ infusions, and detailed hormonal optimization to improve vitality, cognitive function, and cellular resilience.",
    benefits: [
        "Biological age testing and monitoring",
        "High-purity mesenchymal stem cells",
        "Customized hormone replacement therapy",
        "Mitochondrial health optimization"
    ],
    specialties: ["Regenerative Medicine", "Endocrinology", "Nutritional Science"]
  },
  {
    id: "ayurvedic-retreats",
    name: "Ayurvedic Retreats",
    category: "Wellness & Longevity",
    desc: "Traditional Indian medicine combined with luxury spa experiences.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Experience the profound healing of Ayurveda in luxury retreats. Our programs combine traditional Panchakarma detox with modern assessment techniques to restore balance to your body's doshas and promote long-term health.",
    benefits: [
        "Personalized Ayurvedic doctor consultations",
        "Daily herbal treatments and massages",
        "Organic, tailor-made Ayurvedic diet",
        "Yoga and meditation in serene environments"
    ],
    specialties: ["Traditional Medicine", "Yoga Therapy", "Dietetics"]
  },
  // Cosmetic
  {
    id: "rhinoplasty",
    name: "Rhinoplasty",
    category: "Cosmetic & Aesthetics",
    desc: "Expert nasal reshaping for both aesthetic and functional improvements.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Rhinoplasty is a sophisticated procedure that improves the appearance and/or function of the nose. Our surgeons specialize in both open and closed techniques, ensuring natural results that harmonize with your unique facial features.",
    benefits: [
        "Advanced 3D imaging for result simulation",
        "Dual-functional approach (Beauty & Breathing)",
        "Minimum-scarring techniques",
        "Expertize in ethnic and revision rhinoplasty"
    ],
    procedure: {
      steps: [
        "Aesthetic consultation and simulation",
        "Surgical reshaping of bone and cartilage",
        "Internal and external splinting",
        "Immediate post-op observation",
        "Controlled healing for final refinement"
      ],
      duration: "1.5 - 3 hours",
      recovery: "1 week for splint removal, 2 weeks for social return"
    },
    specialties: ["Plastic Surgery", "ENT Surgery", "Facial Aesthetics"]
  },
  {
    id: "dental-smile",
    name: "Dental Hollywood Smile",
    category: "Cosmetic & Aesthetics",
    desc: "Full smile makeovers using premium veneers and implants.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Achieve perfection with a 'Hollywood Smile'. We combine digital smile design, premium porcelain veneers, and robotic-implantology to create a radiant, durable smile tailored to your facial aesthetics.",
    benefits: [
        "High-grade biocompatible porcelain (E-Max/Zirconia)",
        "Digital Smile Design (DSD) simulation",
        "One-visit dentistry options (CAD/CAM)",
        "Pain-free sedation dentistry if needed"
    ],
    specialties: ["Cosmetic Dentistry", "Implantology", "Orthodontics"]
  },
  {
    id: "laser-scar-removal",
    name: "Laser Scar Removal",
    category: "Cosmetic & Aesthetics",
    desc: "Precision laser technology to minimize scars and improve skin texture.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Our advanced laser scar removal treatments use fractional CO2 and non-ablative laser technology to target scar tissue while promoting healthy collagen production. This procedure is effective for acne scars, surgical scars, and injury-related skin irregularities.",
    benefits: [
      "Significant reduction in scar visibility",
      "Improves overall skin texture and tone",
      "Non-invasive with minimal downtime",
      "Safe for various skin types"
    ],
    procedure: {
      steps: [
        "Skin analysis & patch test",
        "Cleansing & topical numbing",
        "Targeted laser application",
        "Cooling & soothing serum",
        "Aftercare instructions"
      ],
      duration: "30 - 60 minutes",
      recovery: "2 - 5 days of redness and peeling"
    },
    specialties: ["Dermatology", "Aesthetic Medicine", "Laser Therapy"]
  },
  {
    id: "cosmetic-surgery",
    name: "Cosmetic Surgery",
    category: "Cosmetic & Aesthetics",
    desc: "Transformative surgical procedures for body contouring and facial rejuvenation.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    fullDescription: "Our network of board-certified plastic surgeons provides a wide range of cosmetic procedures, including liposuction, facelifts, and breast augmentation. We focus on natural-looking results that enhance your confidence and silhouette in world-class, private facilities.",
    benefits: [
      "Performed by internationally accredited surgeons",
      "Personalized surgical mapping",
      "State-of-the-art recovery suites",
      "Natural-looking aesthetic results"
    ],
    procedure: {
      steps: [
        "Pre-surgical marking and consultation",
        "Anesthesia and surgical incision",
        "Tissue sculpting or augmentation",
        "Closing and bandaging",
        "Monitored recovery phase"
      ],
      duration: "2 - 5 hours",
      recovery: "1 - 2 weeks for initial healing, 6 weeks full activity"
    },
    specialties: ["Plastic Surgery", "Aesthetic Surgery", "Recovery Nursing"]
  }
];
