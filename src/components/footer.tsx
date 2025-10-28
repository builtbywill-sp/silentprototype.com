import React from "react";

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-gilt/30 mt-20 flex flex-col md:flex-row items-center justify-between text-sm text-bone/80">
      <div className="text-left space-y-1">
        <p>
          Email: <span className="text-gilt">contact@silentprototype.com</span>
        </p>
        <p>
          Phone: <span className="text-gilt">+1 (555) 123-4567</span>
        </p>
      </div>

      <p className="text-bone/60 mt-4 md:mt-0">
        © {new Date().getFullYear()} Silent Prototype Holdings
      </p>
    </footer>
  );
};

export default Footer;