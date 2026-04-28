import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click (important)
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("events")}>Events</a>
        <a onClick={() => scrollToSection("team")}>Team</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;