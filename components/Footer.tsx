import { FaGithub, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Excelliotheobald"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-400 transition hover:text-white hover:scale-110"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://instagram.com/excel.halilintar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-neutral-400 transition hover:text-pink-500 hover:scale-110"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}