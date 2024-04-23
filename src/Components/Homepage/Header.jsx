import { BiCart } from "react-icons/bi"; 
import React, { useState } from 'react';

import alpineLogo from '../../Assets/images/sources-homepage/logo/logo-white.png';
import alpineLogoBlue from '../../Assets/images/sources-homepage/logo/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900 fixed z-30 w-full ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/src/App.jsx" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-100 w-50" src={alpineLogo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" color='white' aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:gap-x-12 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#model" className="text-md font-bold leading-6 text-slate-200">Modèle</a>
          <a href="#technical" className="text-md font-bold leading-6 text-slate-200">Caractéristique</a>
          <a href="#configurator" className="text-md font-bold leading-6 text-slate-200">Configuration</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="Cart" className="text-sm font-semibold leading-6 text-slate-200"> <BiCart size={26}/></a>
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/src/App.jsx" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="w-50" src={alpineLogoBlue} alt="alpine logo"/>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                <span className="sr-only">Close menu</span>
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#model" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Modèle</a>
                  <a href="#technical" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Caractéristique</a>
                  <a href="#configurator" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Configuration</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
