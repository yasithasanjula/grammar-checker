import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-md py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Grammar Checker
        </h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-500 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="text-gray-700 hover:text-purple-500 transition-colors"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signout"
                className="text-gray-700 hover:text-purple-500 transition-colors"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
