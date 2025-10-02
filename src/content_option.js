import profileImage from "./assets/amin.jpg"; // Renommé pour plus de clarté

// --- GENERAL SITE DATA ---
const logotext = "Mohamed Amin";

const meta = {
  title: "Mohamed Amin",
  description:
    "Je suis Bouallegui Mohamed Amin, développeur systeme informatique, actuellement étudiant en Tunisie.",
};

// --- HOME/INTRO SECTION ---
const introdata = {
  title: "Mohamed Amin,",
  animated: {
    first: "Développeur web front-end et back-end",
    second: "Créer des solutions modernes et scalables",
    third: "Étudiant IoT (Internet des Objets)",
  },
  description:
    "Je suis étudiant en génie informatique et développeur full-stack, spécialisé dans la création d’applications web réactives et conviviales, utilisant des technologies modernes (React, Spring Boot, Node.js).",
  your_img_url: profileImage, // Utilise l'image importée
};

// --- ABOUT SECTION ---
const dataabout = {
  title: "À propos de moi",
  aboutme:
    "Je m'appelle Bouallegui Mohamed Amin, étudiant en génie informatique et développeur web. Je conçois des applications web modernes et performantes. Mon objectif est de convertir chaque idée en une application utile et bien pensée, en combinant logique et efficacité. Actuellement, je continue à développer mes compétences en développement full-stack, tout en travaillant sur des projets personnels et collaboratifs pour enrichir mon expérience.",
};

// --- TIMELINE / EXPÉRIENCES ---
const worktimeline = [
  {
    jobtitle: "Licence en génie informatique",
    where: "Isi Mahdia",
    date: "2024 - Aujourd'hui",
  },
  {
    jobtitle: "Stage en développement web",
    where: "Tunisie Télécom",
    date: "2024",
  },
  {
    jobtitle: "Baccalauréat en Informatique",
    where: "Lycée secondaire",
    date: "2023",
  },
];

// --- COMPÉTENCES / SKILLS ---
const skills = [
  { name: "Python", value: 70 },
  { name: "Java", value: 80 },
  { name: "Php", value: 90 },
  { name: "Javascript", value: 80 },
  { name: "Spring Boot", value: 60 },
  { name: "React", value: 70 },
  { name: "Nodejs", value: 60 },
  { name: "HTML/CSS", value: 90 },
  { name: "MySQL", value: 80 },
  { name: "MongoDB", value: 70 },
  { name: "Git", value: 70 },
  { name: "Docker", value: 50 },
];

// --- PROJETS / PORTFOLIO (Ajout essentiel) ---
const portfolio = [
  {
    img: "URL_IMAGE_PROJET_1", // Remplacez par l'URL ou l'import de votre image
    description:
      "Application de gestion de tâches Full-Stack (Spring Boot / React).",
    link: "URL_GITHUB_OU_DEMO",
  },
  {
    img: "URL_IMAGE_PROJET_2",
    description: "Site vitrine responsive pour une PME (HTML/CSS/JS).",
    link: "URL_GITHUB_OU_DEMO",
  },
  // Ajoutez plus de projets ici
];

// --- CONTACT & EMAILJS CONFIG ---
const contactConfig = {
  email: "aminbouallegui0@gmail.com", // Clé simplifiée
  phone: "(+216) 29-002-853", // Clé simplifiée
  description:
    "Contactez-moi pour toute demande ou collaboration. Je suis toujours ouvert aux nouvelles opportunités.", // EmailJS / Service Config

  serviceId: "service_25vl9pb", // Clé simplifiée
  templateId: "template_vxsr62g", // Clé simplifiée
  userId: "GWJyEYsHHS6myzGUI", // Clé simplifiée

  // Anciennes clés (maintenues en commentaire pour référence)
  /* YOUR_EMAIL: "aminbouallegui0@gmail.com", */
  /* YOUR_FONE: "(+216)29-002-853", */
  /* YOUR_SERVICE_ID: "service_zdr24iu", */
  /* YOUR_TEMPLATE_ID: "template_zzq3zjr", */
  /* YOUR_USER_ID: "wlK8GSePPGm6_OEVk", */
};

// --- RESEAUX SOCIAUX ---
const socialprofils = {
  github: "https://github.com/AminH154",
  linkedin: "http://linkedin.com/in/bouallegui-amin-70b9b3356", // Vous pouvez ajouter d'autres réseaux ici
  // twitter: "",
  // facebook: "",
};

// --- EXPORTS FINAUX ---
export {
  meta,
  dataabout,
  worktimeline,
  skills,
  introdata,
  portfolio, // Export du portfolio
  contactConfig,
  socialprofils,
  logotext,
};
