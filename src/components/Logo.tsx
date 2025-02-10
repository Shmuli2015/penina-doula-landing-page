import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-16" }: LogoProps) => {
  return (
    <img
      src="/logo.png"
      alt="Penina Doula Services"
      className={`${className} object-contain w-auto`}
    />
  );
};

export default Logo;
