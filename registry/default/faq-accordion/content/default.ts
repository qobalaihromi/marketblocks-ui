import type { FaqAccordionProps } from "../faq-accordion";

export const faqAccordionContentEN: Partial<FaqAccordionProps> = {
  badge: "FAQ",
  headline: "Frequently asked questions",
  subtitle: "Everything you need to know about the product and billing.",
  contactCta: {
    text: "Can't find the answer you're looking for?",
    linkText: "Contact our support team",
    href: "#",
  },
  faqs: [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 14 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
  ],
};

export const faqAccordionContentID: Partial<FaqAccordionProps> = {
  badge: "FAQ",
  headline: "Pertanyaan yang sering diajukan",
  subtitle: "Semua hal yang perlu Anda ketahui tentang produk dan tagihan.",
  contactCta: {
    text: "Tidak menemukan jawaban yang Anda cari?",
    linkText: "Hubungi tim support kami",
    href: "#",
  },
  faqs: [
    {
      question: "Apakah tersedia free trial (uji coba gratis)?",
      answer:
        "Ya, Anda bisa mencoba secara gratis selama 14 hari. Jika Anda mau, kami juga menyediakan panggilan onboarding personal gratis selama 30 menit untuk membantu Anda memulai secepatnya.",
    },
    {
      question: "Bisakah saya mengubah paket langganan nanti?",
      answer:
        "Tentu saja. Harga kami menyesuaikan dengan skala perusahaan Anda. Hubungi tim kami untuk menemukan solusi paket yang paling cocok untuk Anda.",
    },
    {
      question: "Bagaimana kebijakan pembatalannya?",
      answer:
        "Kami paham bahwa rencana bisa berubah. Anda bisa membatalkan langganan kapan saja dan kami akan mengembalikan selisih dana yang sudah dibayarkan jika berlaku.",
    },
    {
      question: "Bagaimana sistem penagihannya (billing)?",
      answer:
        "Paket dihitung per workspace, bukan per akun. Anda bisa melakukan upgrade pada satu workspace, sembari tetap memiliki workspace gratis dalam jumlah tak terbatas.",
    },
  ],
};
