import type { LeadCaptureFormProps } from "../lead-capture-form";

export const leadCaptureFormContentEN: Partial<LeadCaptureFormProps> = {
  badge: "Free E-Book",
  headline: "The Ultimate Guide to Component-Driven Development",
  subtitle:
    "Learn how top engineering teams are building and scaling their UI architectures to ship products 10x faster.",
  formDisplay: {
    buttonLabel: "Download Free Guide",
    privacyText: "We care about protecting your data. Read our Privacy Policy.",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Work Email", type: "email", required: true },
      { name: "company", label: "Company Size", type: "text", required: false },
    ],
  },
};

export const leadCaptureFormContentID: Partial<LeadCaptureFormProps> = {
  badge: "E-Book Gratis",
  headline: "Panduan Lengkap Component-Driven Development",
  subtitle:
    "Pelajari bagaimana tim enginering top dunia membangun dan menskalakan arsitektur UI mereka agar rilis fitur 10x lebih cepat.",
  formDisplay: {
    buttonLabel: "Download Panduan Gratis",
    privacyText: "Kami sangat peduli terhadap keamanan data Anda. Baca Kebijakan Privasi kami.",
    fields: [
      { name: "name", label: "Nama Lengkap", type: "text", required: true },
      { name: "email", label: "Email Kerja", type: "email", required: true },
      { name: "company", label: "Ukuran Perusahaan", type: "text", required: false },
    ],
  },
};
