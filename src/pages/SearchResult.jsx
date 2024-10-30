import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// Skeleton component for loading state
const SkeletonQuote = () => (
  <div className="bg-gray-300 w-full h-auto rounded-lg p-4 text-center shadow-lg animate-pulse">
    <div className="h-6 bg-gray-400 rounded mb-2"></div>
    <div className="h-4 bg-gray-400 rounded mb-2"></div>
    <div className="h-3 bg-gray-400 rounded mb-2"></div>
    <div className="h-3 bg-gray-400 rounded"></div>
  </div>
);

const SearchResult = () => {
  const [quotes, setQuotes] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // State to track loading
  const quotesPerPage = 12; // Number of quotes per page

  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling effect
    });
  };

  // Extract search query from URL
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query') || '';

  // Calculate the index range for the quotes on the current page
  const indexOfLastQuote = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
  const currentQuotes = filteredQuotes.slice(indexOfFirstQuote, indexOfLastQuote);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredQuotes.length / quotesPerPage);

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      scrollToTop();
    }
  };

  // Fetch quotes from JSON
  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    fetch('/quotes.json')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        if (query) {
          const searchResults = data.filter(
            (quote) =>
              quote.character.toLowerCase().includes(query.toLowerCase()) ||
              quote.anime.toLowerCase().includes(query.toLowerCase()) ||
              quote.quote.toLowerCase().includes(query.toLowerCase())
          );
          setFilteredQuotes(searchResults);
          setCurrentPage(1); // Reset to the first page when new search is performed
        }
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error(`Error fetching quotes: ${error}`);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-white text-xl mb-6">Search Results for "{query}"</h2>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {loading ? (
            // Render skeletons when data is loading
            Array.from({ length: quotesPerPage }).map((_, index) => (
              <SkeletonQuote key={index} />
            ))
          ) : currentQuotes.length > 0 ? (
            currentQuotes.map((quote, index) => (
              <span key={index} className="bg-[#F8FBFF] w-full h-auto rounded-lg p-4 text-center shadow-lg">
                <strong className="block font-bold">{quote.character}</strong>
                <small className="block text-lg text-gray-700">{quote.anime}</small>
                <p className="mt-2 text-[#585858]">{quote.quote}</p>
              </span>
            ))
          ) : (
            <div className="text-white flex justify-center items-center w-full col-span-full">
              <p>No results found for "{query}".</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {filteredQuotes.length > quotesPerPage && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-white ${currentPage === 1 ? 'bg-gray-600' : 'bg-blue-600'} rounded-lg`}
            >
              Previous
            </button>
            <p className="text-white">
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-white ${currentPage === totalPages ? 'bg-gray-600' : 'bg-blue-600'} rounded-lg`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchResult;
