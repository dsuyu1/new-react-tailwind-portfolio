import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      setShowFooter(scrollPosition >= pageHeight - 2); // allow for rounding
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showFooter) {
      // Delay to allow for fade-in
      setTimeout(() => setVisible(true), 50);
    } else {
      setVisible(false);
    }
  }, [showFooter]);

  return (
    <footer
      className={`py-2 px-1 bg-card border-t border-border flex flex-wrap justify-between items-center w-full fixed bottom-0 left-0 z-30 transition-opacity ${showFooter && visible ? 'opacity-100 duration-1000' : 'opacity-0 duration-500 pointer-events-none'}`}
      style={{
        transitionProperty: 'opacity',
      }}
    >
      <p className="text-xs text-muted-foreground">
         &copy; {new Date().getFullYear()}  All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={16} />
      </a>
    </footer>
  );
};
