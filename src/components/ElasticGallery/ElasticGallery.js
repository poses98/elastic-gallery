import React, { useRef, useEffect, useState } from 'react'; // Importing necessary hooks and React from the react library
import './ElasticGallery.css'; // Importing the CSS file for styling

const ElasticGallery = ({ content, columnNumber }) => {
  const containerRef = useRef(null); // Creating a ref to access the DOM element
  const [windowWidth, setWindowWidth] = useState(null); // Creating a state variable for the window width

  useEffect(() => {
    // Using the useEffect hook to perform side effects
    const container = containerRef.current; // Accessing the current property of the container ref
    if (!container) return; // If the container doesn't exist, exit the function

    const items = Array.from(container.children); // Creating an array from the children of the container
    let columns = []; // Initializing an empty array for the columns
    let numColumns =
      columnNumber || Math.max(1, Math.floor(container.offsetWidth / 300)); // Calculating the number of columns based on the window width
    // Creating the columns
    for (let i = 0; i < numColumns; i++) {
      columns[i] = document.createElement('div'); // Creating a new div element for each column
      columns[i].style.width = `${100 / numColumns}%`;
      container.appendChild(columns[i]); // Appending the column to the container
    }

    if (!columns[0]) {
      columns[0] = document.createElement('div'); // Creating a new div element for each column
      container.appendChild(columns[0]); // Appending the column to the container
    }
    // Distributing the items across the columns
    items.forEach((item, index) => {
      const heights = columns.map((item) => item.offsetHeight); // Getting the heights of all columns
      const minHeight = Math.min(...heights); // Finding the minimum height

      const selectedColumn = columns.filter(
        (col) => col.offsetHeight === minHeight
      ); // Selecting the column with the minimum height
      item.classList.add('elastic-item');
      item.style.animationDelay = `${index * 0.1}s`; // Setting the animation delay based on the index
      selectedColumn[0].appendChild(item); // Appending the item to the selected column
    });

    return () => {
      // Cleanup function to run on unmount
      items.forEach((item) => container.appendChild(item)); // Appending all items back to the container
      columns.forEach((column) => container.removeChild(column)); // Removing all columns from the container
    };
  }, [content, columnNumber, windowWidth]); // Running the effect when the 'content' or 'windowWidth' changes

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize); // Adding an event listener for the window resize event

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize); // Removing the event listener on unmount
    };
  }, []); // Running the effect once on mount

  return (
    <div
      style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}
      className="elastic-gallery-container"
      ref={containerRef}
    >
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default ElasticGallery; // Exporting the ElasticGallery component
