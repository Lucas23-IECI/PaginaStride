import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <h2 className="font-script text-3xl text-gray-500">stride</h2>
            </div>
            <p className="text-gray-600 text-sm">© 2024 Stride Chile. Corre con propósito.</p>
            <div className="flex gap-4 text-gray-600">
                <span>&gt;&gt;&gt;</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
