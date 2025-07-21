"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
        <>
          <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled 
                ? 'px-4 pt-2' 
                : 'px-0 pt-0'
            }`}
          >
            <div
              className={`w-full transition-all duration-300 ${
                isScrolled 
                  ? 'elevated bg-background corner' 
                  : ''
              }`}
            >
              <div className="pad-x">
                <div className="flex items-center justify-between py-3">
                  {/* Brand Logo and Name */}
                  <Link href="/" className="flex items-center space-x-3 group">
                    <div className="flex items-center space-x-3 transition-all duration-200 group-hover:scale-105">
                      <div className="w-7 h-7 relative">
                        <Image
                        src="/main/brandlogo.png"
                        alt="HelpEngine Logo"
                        width={32}
                        height={32}
                        className="w-full h-full"
                        />
                      </div>
                      <span className="typo-name font-semibold text-secondary-dark">
                        Neumorphism
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </>
    );
}