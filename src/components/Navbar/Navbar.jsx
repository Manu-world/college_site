import "./Navbar.css";
import logo from "../../assets/gmmco.png";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Programs", link: "#programs" },
    { name: "About us", link: "#about" },
    { name: "Campus", link: "#campus" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Portal", link: "#portal" },
    { name: "Admissions", link: "#admissions" },
    { name: "Events", link: "#events" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > window.innerHeight) {
        setScrolling(true);
        setVisible(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, 1000);
      } else {
        setScrolling(false);
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (name) => {
    setActiveNav(name);
  };

  return (
    <>
      <style>
        {`
          .hidden-nav {
            transform: translateY(-100%);
            transition: transform 0.5s ease-in-out;
          }
          .visible-nav {
            transform: translateY(0);
            transition: transform 0.4s ease-in-out;
          }
        `}
      </style>
      <nav
        className={`container ${scrolling ? "dark-nav" : ""} ${
          visible ? "visible-nav" : "hidden-nav"
        }`}>
        <ul className="nav-left">
          {navItems.slice(0, 5).map((item) => (
            <li
              key={item.name}
              className={activeNav === item.name ? "active-nav" : ""}
              onClick={() => handleNavClick(item.name)}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="logo">
          <img src={logo} alt="gmmco_logo" />
        </div>
        <ul className="nav-right">
          {navItems.slice(5).map((item) => (
            <li
              key={item.name}
              className={activeNav === item.name ? "active-nav" : ""}
              onClick={() => handleNavClick(item.name)}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li>
            <button className={`btn ${scrolling ? "btn-scroll" : ""}`}>
              Contact us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
