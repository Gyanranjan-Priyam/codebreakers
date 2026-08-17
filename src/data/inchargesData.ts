export interface OfficialIncharge {
  id: string;
  name: string;
  designation: string;
  role: string;
  image: string; // Replace this URL with official image link
  quote: string;
  department: string;
  email?: string;
  linkedin?: string;
}

export const officialIncharges: OfficialIncharge[] = [
  {
    id: "principal",
    name: "Prof.(Dr) Subhransu Sekhar Dash",
    designation: "Principal & Patron-in-Chief",
    role: "Government College of Engineering Kalahandi",
    image: "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1786821219/773725407_17976388644114016_5470375353953459513_n_hjyuvt.jpg",
    quote: "Empowering young technical minds to innovate, lead, and shape the digital future of our nation through technology.",
    department: "Administration, GCEK",
  },
  {
    id: "dsw",
    name: "Prof.(Dr) Chitaranjan Dash",
    designation: "Dean Student Welfare (DSW)",
    role: "Government College of Engineering Kalahandi",
    image: "https://res.cloudinary.com/dhyxx8qjf/image/upload/v1786979088/WhatsApp_Image_2026-08-15_at_10.11.03_PM_yox4ea.jpg",
    quote: "Fostering an ecosystem of holistic student growth, technical excellence, and vibrant campus leadership.",
    department: "Student Welfare, GCEK",
  },
  {
    id: "pic",
    name: "Dr. Ashok Kumar Bhoi",
    designation: "Professor In-Charge (PIC)",
    role: "Assistant Professor, Dept. of CSE",
    image: "/assets/pic.jpg",
    quote: "Guiding and mentoring students to master modern software engineering, competitive programming, and technological innovation.",
    department: "Department of CSE, GCEK",
  },
];
