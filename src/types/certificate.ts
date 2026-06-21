export type CertificateCategory =
  | "Education"
  | "Certificate"
  | "Achievement"
  | "Project";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: number | string;
  category: CertificateCategory;
  // File path relative to `/public`, e.g. `certificates/degree.jpg` or `certificates/transcript.pdf`
  file: string;
  // Optional thumbnail (preferred for images). If omitted, `file` will be used for images.
  thumbnail?: string;
  // Whether to expose a download action
  downloadable?: boolean;
  // Only include public-safe documents here. Do not add sensitive personal data.
  safeToShow?: boolean;
};
