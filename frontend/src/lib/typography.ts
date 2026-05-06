/**
 * Shared typography — one place to adjust sizes/weights across the portfolio.
 * Font family is Poppins site-wide (see globals.css + tailwind font-sans).
 */
export const typo = {
  eyebrow:
    "inline-block rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-medium mb-3 sm:mb-4",
  sectionHeading:
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent mb-4 sm:mb-6",
  sectionLead: "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
  cardTitle: "text-xl font-bold text-white",
  statValue: "text-xl font-bold text-white mb-0.5",
  statLabel: "text-sm font-medium text-gray-300",
  statHint: "text-sm text-gray-400",
  bodyParagraph: "text-xl text-gray-300 leading-relaxed",
  btnCta: "text-base font-semibold",
  heroName:
    "text-6xl lg:text-8xl font-bold bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6] bg-clip-text text-transparent leading-tight",
  heroRole: "text-2xl lg:text-3xl font-light text-[#E2E8F0]",
  heroLead: "text-lg text-[#94A3B8] max-w-lg leading-relaxed mx-auto lg:mx-0",
  footerBrand:
    "inline-block text-3xl font-bold bg-gradient-to-r from-[#2E7D32] via-[#FFB703] to-[#8ECAE6] bg-clip-text text-transparent mb-4",
  footerBlurb: "text-gray-300 text-lg leading-relaxed mb-6 max-w-md",
  columnHeading: "text-xl font-bold text-white",
} as const;
