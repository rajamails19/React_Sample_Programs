import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const initialItems = 125;
  const itemsPerPage = 25;
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
      setItems(fetchedItems.slice(0, initialItems));
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    };

    fetchData();
  }, []);

  const loadMoreItems = () => {
    if (currentPage < totalPages) {
      // Simulate loading delay
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 1000);
    }
  };

  // Calculate the start and end index for the current page
  const startIndex = 0;
  const endIndex = currentPage * itemsPerPage;

  // Get the items for the current page
  const itemsToShow = items.slice(startIndex, endIndex);

  return (
    <div className="container">
      <h1>Infinite Scroll Example</h1>
      <InfiniteScroll
        dataLength={itemsToShow.length}
        next={loadMoreItems}
        hasMore={currentPage < totalPages}
        loader={<p>Loading more items...</p>}
      >
        <ul className="item-list">
          {itemsToShow.map((item, index) => (
            <li key={startIndex + index}>{item}</li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default App;
