import Gif from "~/components/gif";
import { ExternalLinkIcon } from '@heroicons/react/outline';


export function Header() {
  return (
    <header className="z-10 flex items-center justify-between">
      {/* Left side GIF */}
      <div>
        <a href='/'><Gif /></a>
      </div>
      {/* Right side items */}
      <div className="flex items-center space-x-4">
        <nav className="flex"> {/* Add flex class here */}
          <a href="https://www.linkedin.com/in/brandon-woody-woodruff/" aria-label="Brandon Woodruff on LinkedIn" target="_blank" rel="noopener" className="mr-4">
            <svg className="h-10 w-10 hover:text-gray-400" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z" fill="currentColor"></path>
            </svg>
          </a>
          <a href="https://github.com/BrandonWoodruff" target="_blank" className="hover:text-gray-400 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
        </nav>
        <a href="/contactMe" className="text-white hover:text-gray-400">
          Contact Me <ExternalLinkIcon className="w-4 h-4 inline"/>
        </a>
      </div>
    </header>
  );
}

export default Header;
