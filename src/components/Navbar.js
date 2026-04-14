import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-links">
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("events")}>Events</a>
        <a onClick={() => scrollToSection("team")}>Team</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
