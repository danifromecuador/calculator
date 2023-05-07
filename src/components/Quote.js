import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('error');
  const [loading, setLoading] = useState('not loading');
  const fetchQuote = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'nezpEokeOVTwP1C5NwtGEQ==h62LjJXfJNexoQfy',
      },
    });
    const data = await response.json();
    const { quote, author, category } = data[0];
    setQuote(quote);
    setAuthor(author);
    setCategory(category);
    setError('not error');
    setLoading('loading');
  };

  useEffect(() => {
    fetchQuote();
  }, [setLoading, setQuote]);

  if (loading === 'not loading') {
    return (
      <p className="loadingMessage">
        Loading...
      </p>
    );
  }

  if (error === 'error') {
    return (
      <p className="errorMessage">
        Error
      </p>
    );
  }

  return (
    <div className="quoteContainer">
      <p>{quote}</p>
      <span>
        {author}
        -
      </span>
      <span>{category}</span>
    </div>
  );
}

export default Quote;
