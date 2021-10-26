import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          Alfaben NextJS
        </a>
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            <Link href="/dashboard">
              <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link href="/crypto">
              <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-4">Crypto</span>
              </a>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link href="/exchange">
              <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                />
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="ml-4">Exchange</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className="px-6 my-6">
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Create account
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}
