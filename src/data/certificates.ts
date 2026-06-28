import type { Certificate } from "@/types/certificate";

export const certificates: Certificate[] = [
  {
    id: "bsc-degree-pdf",
    title: "BSC of Computer Science Degree Certificate",
    issuer: "University of Gondar",
    year: 2022,
    category: "Education",
    file: "resume/Ashenafi-messle bsc of cs cetficate.pdf",
    downloadable: true,
    safeToShow: true,
  },
  {
    id: "programming-rec",
    title: "Hard Working on Computer Programming",
    issuer: "University of Gondar",
    year: 2022,
    category: "Certificate",
    file: "resume/computer programming reccomendation letter.pdf",
    downloadable: true,
    safeToShow: true,
  },
  {
    id: "security-vision-rec",
    title: "Hard Working on Computer Security and Computer Vision",
    issuer: "University of Gondar",
    year: 2022,
    category: "Certificate",
    file: "resume/computer programming reccomendation letter.pdf",
    downloadable: true,
    safeToShow: true,
  },
  {
    id: "database-rec",
    title: "Hard Working on Advanced Database",
    issuer: "University of Gondar",
    year: 2022,
    category: "Certificate",
    file: "resume/database reccomendation letter.pdf",
    downloadable: true,
    safeToShow: true,
  },
];

export default certificates;
