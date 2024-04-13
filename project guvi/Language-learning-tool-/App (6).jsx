import { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  function isLanguageRelated(question) {
    const languageKeywords = ["language", "learn", "linguistics", "vocabulary", "grammar", "pronunciation"];
    const lowerCaseQuestion = question.toLowerCase();
    return languageKeywords.some(keyword => lowerCaseQuestion.includes(keyword));
  }

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");

    if (!isLanguageRelated(question)) {
      setAnswer("Sorry, I can only answer questions related to language learning.");
      setGeneratingAnswer(false);
      return;
    }

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCyUlS0sOxu-cODLirQ9YLQPWAJirrezkE",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bg-white h-screen p-3">
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 py-2"
        >
          <a href="" target="_blank">
            <h1 className="text-3xl text-center">FLUENTIFY</h1>
            <p className="text-xs">Interact and learn new languages with me!!</p>
          </a>
          <textarea
            required
            className="border rounded w-11/12 my-2 min-h-fit p-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything related to language"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            disabled={generatingAnswer}>
            Generate word
          </button>
        </form>
        <div className="w-full md:w-2/3 m-auto text-center rounded bg-gray-50 my-1">
          <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
          
        </div>
      </div>
    </>
  );
}

export default App;