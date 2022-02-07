import Card from "./components/Card";
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { randomNumberGenerator, colorfulMode } from "./components/Lib";
import OutCardCircles from "./components/OutCardCircles";

const App = () => {

  // State Hooks
  const [quotes, setQuotes] = useState(0);
  const [quote, setQuote] = useState(0);
  const [quotesByAuthor, setQuotesByAuthor] = useState(0);

  const colorful = useRef(0);

  const getQuotes = async () => {
    const { data } = await axios.get(
      'https://type.fit/api/quotes'
    );

    setQuotes(data);
  }

  const changeQuote = () => {
    if (colorful.current.checked)
      colorfulMode();

    if (quotesByAuthor)
      setQuote(
        quotesByAuthor[randomNumberGenerator(quotesByAuthor.length)]
      );

    else if (quotes)
      setQuote(
        quotes[randomNumberGenerator(quotes.length)]
      );
  }

  const authorChange = (e) => {
    if (e.currentTarget.value !== "0") {
      let authors = [];
      quotes.forEach((id) => {
        if (id.author === e.currentTarget.value)
          authors.push(id);
      });
      setQuotesByAuthor(authors);
    }
    else
      setQuotesByAuthor(0);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (quotes)
      setQuote(
        quotes[randomNumberGenerator(quotes.length)]
      );
  }, [quotes]);

  return (
    <>
      <Card
        quote={quote}
        changeQuote={changeQuote}
        authorChange={authorChange}
        colorful={colorful}
      />
      <OutCardCircles />
      <div className="social">
        <a href="https://github.com/mertesnn/" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </>
  );
}

export default App;