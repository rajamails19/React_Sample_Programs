import React, { useState, useEffect } from 'react';

function App() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      // You can replace this with an actual API call
      // For simplicity, we're just creating an array of items
      const totalItems = 100;
      const fetchedItems = Array.from(
        { length: totalItems },
        (_, index) => `Item ${index + 1}`
      );
      setItems(fetchedItems);
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    };

    fetchData();
  }, []);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const itemsToShow = items.slice(startIndex, endIndex);

  return (
    <div className="container">
      <h1>Pagination Example</h1>
      <ul className="item-list">
        {itemsToShow.map((item, index) => (
          <li key={startIndex + index}>{item}</li>
        ))}
      </ul>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
