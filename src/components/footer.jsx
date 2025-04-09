import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Remind-Me Application. All rights reserved.</p>
        <p>Developed by Anass Muhammad Ali</p>
      </div>
    </footer>
  );
}

export default Footer;