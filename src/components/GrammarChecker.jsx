import { useState } from "react";

const GrammarChecker = () => {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState([]);

  const checkGrammar = async () => {
    // Make an API call to a grammar checking service
    const response = await fetch("https://api.grammarbot.io/v2/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        language: "en-US",
        api_key: "YOUR_API_KEY",
      }),
    });

    const result = await response.json();
    setErrors(result.matches || []);
  };

  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
      <textarea
        className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"
        rows="6"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        onClick={checkGrammar}
      >
        Check Grammar
      </button>

      {errors.length > 0 && (
        <div className="mt-4">
          <h2 className="text-red-600 font-semibold">Errors:</h2>
          <ul className="list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index} className="text-sm text-red-500">
                {error.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GrammarChecker;
