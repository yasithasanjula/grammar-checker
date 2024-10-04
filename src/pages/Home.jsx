import GrammarChecker from "../components/GrammarChecker";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 pt-20">
      <div className="container max-w-4xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <header className="text-center py-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
            Grammar Checker
          </h1>
          <p className="text-lg text-gray-200">
            Enhance your writing with flawless grammar
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-12 p-8">
          {/* Grammar Checker Component */}
          <div className="flex-1 p-6 bg-white/80 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
            <GrammarChecker />
          </div>

          {/* Placeholder for 3D Object */}
          <div className="flex-1 flex items-center justify-center p-6 bg-white/80 rounded-2xl shadow-md transition-shadow hover:shadow-xl">
            <p className="text-gray-700 font-semibold text-lg">
              Interactive 3D Object Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
