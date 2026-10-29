import { FaFacebookF, FaInstagram, FaYoutube, FaUsers } from "react-icons/fa";
import { FaXTwitter, FaRegCircleCheck } from "react-icons/fa6";
import { MdVerified, MdOutlineShield } from "react-icons/md";
import "./Footer.css";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "For Customers",
    links: [
      { label: "Find Services", href: "/services" },
      { label: "Help Center", href: "/help" },
      { label: "Safety & Trust", href: "/safety" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "For Providers",
    links: [
      { label: "Become a Provider", href: "/become-a-provider" },
      { label: "Provider Dashboard", href: "/dashboard" },
      { label: "Success Tips", href: "/success-tips" },
      { label: "Provider Support", href: "/provider-support" },
    ],
  },
];

const trust = [
  { icon: MdVerified, label: "Verified Professionals" },
  { icon: MdOutlineShield, label: "Secure Payments" },
  { icon: FaUsers, label: "Local Experts" },
];

const socials = [
  { icon: FaFacebookF, label: "Facebook", href: "https://facebook.com" },
  { icon: FaXTwitter, label: "X", href: "https://x.com" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <div className="site-footer__logo">
            <FaRegCircleCheck size={26} />
            <span>ServeHub</span>
          </div>
          <p>Nigeria&apos;s trusted marketplace for local services.</p>
          <div className="site-footer__socials">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} className="site-footer__col" aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="site-footer__col">
          <h4>Trust &amp; Safety</h4>
          <div className="site-footer__trust">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="trust-badge">
                <Icon size={20} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2025 ServeHub Nigeria. All rights reserved.</p>
        <div className="site-footer__legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}