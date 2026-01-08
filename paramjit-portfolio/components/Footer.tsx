import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 mt-20 py-12 text-center font-mono">
      <p className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Paramjit Saikia. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
        <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;