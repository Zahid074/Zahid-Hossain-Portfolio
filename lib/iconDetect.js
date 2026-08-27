import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaWhatsapp,
  FaMedium,
  FaStackOverflow,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import { SiKaggle, SiLeetcode, SiHackerrank, SiCodeforces, SiOrcid, SiResearchgate, SiGooglescholar } from "react-icons/si";

/**
 * Maps a hostname fragment to an icon component + human label.
 * Add an entry here and every social link on the site auto-detects it -
 * no per-link configuration needed anywhere else.
 */
const PLATFORM_MAP = [
  { match: "github.com", icon: FaGithub, label: "GitHub" },
  { match: "linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
  { match: "kaggle.com", icon: SiKaggle, label: "Kaggle" },
  { match: "facebook.com", icon: FaFacebook, label: "Facebook" },
  { match: "youtube.com", icon: FaYoutube, label: "YouTube" },
  { match: "twitter.com", icon: FaTwitter, label: "Twitter / X" },
  { match: "x.com", icon: FaTwitter, label: "Twitter / X" },
  { match: "instagram.com", icon: FaInstagram, label: "Instagram" },
  { match: "leetcode.com", icon: SiLeetcode, label: "LeetCode" },
  { match: "hackerrank.com", icon: SiHackerrank, label: "HackerRank" },
  { match: "codeforces.com", icon: SiCodeforces, label: "Codeforces" },
  { match: "orcid.org", icon: SiOrcid, label: "ORCID" },
  { match: "researchgate.net", icon: SiResearchgate, label: "ResearchGate" },
  { match: "scholar.google.com", icon: SiGooglescholar, label: "Google Scholar" },
  { match: "medium.com", icon: FaMedium, label: "Medium" },
  { match: "stackoverflow.com", icon: FaStackOverflow, label: "Stack Overflow" },
  { match: "dribbble.com", icon: FaDribbble, label: "Dribbble" },
  { match: "behance.net", icon: FaBehance, label: "Behance" },
  { match: "wa.me", icon: FaWhatsapp, label: "WhatsApp" },
];

export function resolvePlatform(url) {
  if (!url) return { icon: FaGlobe, label: "Website" };
  if (url.startsWith("mailto:")) return { icon: FaEnvelope, label: "Email" };
  try {
    const hostname = new URL(url).hostname.replace("www.", "");
    const found = PLATFORM_MAP.find((p) => hostname.includes(p.match));
    if (found) return { icon: found.icon, label: found.label };
  } catch (e) {
    // not a valid absolute URL - fall through to default
  }
  return { icon: FaGlobe, label: "Website" };
}
