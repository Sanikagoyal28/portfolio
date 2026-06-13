import ThemeToggle from "./ThemeToggle";

/** In-page section anchors shown in the floating nav. */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/** Fixed pill navigation: logo, section links, and the theme toggle. */
export default function Nav() {
  return (
    <nav>
      <a className="logo" href="#">
        <span>sanika</span>.dev
      </a>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
