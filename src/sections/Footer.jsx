import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/icons';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-white dark:bg-[#09090b] border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <div className="text-xl font-black text-orange-500 tracking-tighter">
            Danial<span className="text-zinc-900 dark:text-white">.</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-1 font-medium">© {new Date().getFullYear()} Danial Gibran. Secure Transmission Protocol.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://github.com/danialg1" aria-label="GitHub" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-orange-500 hover:-translate-y-1 transition-all">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/danial-gibran-342370288" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-orange-500 hover:-translate-y-1 transition-all">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://www.instagram.com/danial_g1bran/" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-pink-500 hover:-translate-y-1 transition-all">
            <InstagramIcon size={20} />
          </a>
          <a href="https://www.facebook.com/danial.gibran.03" aria-label="Facebook" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-blue-500 hover:-translate-y-1 transition-all">
            <FacebookIcon size={20} />
          </a>
          <a href="https://www.youtube.com/@suka_bola14" aria-label="YouTube" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-red-500 hover:-translate-y-1 transition-all">
            <YoutubeIcon size={20} />
          </a>
          <a href="mailto:danialgibran0@gmail.com" aria-label="Email" className="text-zinc-400 hover:text-orange-500 hover:-translate-y-1 transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
