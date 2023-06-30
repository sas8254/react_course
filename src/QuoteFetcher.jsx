import { useEffect, useState } from "react";

const randomQuoteUrl = "https://inspo-quotes-api.herokuapp.com/quotes/random";
export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [loading, setLoading] = useState(true);
  async function fetchQuote() {
    const response = await fetch(randomQuoteUrl);
    const jsonResponse = await response.json();
    setQuote(jsonResponse.quote);
    setLoading(false);
  }
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div>
      {loading && <p className="Loader">Loading...</p>}
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
      <button onClick={fetchQuote}>Get Quote</button>
    </div>
  );
}
