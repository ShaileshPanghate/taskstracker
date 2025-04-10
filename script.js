import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth",
          });
        }
      });
    });

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
      mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggle the 'active' class
      });
    }

    // Button Click Feedback
    document.querySelectorAll(".btn-primary").forEach((button) => {
      button.addEventListener("click", function () {
        alert("This feature is coming soon!");
      });
    });
  }, []);

  return (
    <nav className="bg-gray-900 p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src="C:\Users\HP\Desktop\tasktracker\images\main logo symbol w.png" alt="Logo" className="h-12" />
      </div>

      {/* Mobile Menu Toggle */}
      <button id="mobile-menu" className="text-white md:hidden text-2xl">
        ☰
      </button>

      {/* Navigation Links */}
      <ul className="nav-links flex space-x-6 text-white bg-gray-600 px-6 py-2 rounded-2xl backdrop-blur-md md:flex hidden">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        <li><a href="#founders" className="hover:text-gray-300">Our Founders</a></li>
      </ul>

      {/* Authentication Buttons */}
      <div className="flex space-x-2">
        <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
          Sign In
        </button>
        <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
