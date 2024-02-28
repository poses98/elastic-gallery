import { useEffect, useState } from 'react';
import './App.css';
import ElasticGallery from './components/ElasticGallery/ElasticGallery.js';

function App() {
  const contentIrregular = [
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x250/EEE/31343C" />,
    <img src="https://placehold.co/200x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x400/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x250/EEE/31343C" />,
    <img src="https://placehold.co/200x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x400/EEE/31343C" />,
    <img src="https://placehold.co/340x200/EEE/31343C" />,
    <img src="https://placehold.co/390x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x400/EEE/31343C" />,
    <img src="https://placehold.co/200x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x400/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x400/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
    <img src="https://placehold.co/300x200/EEE/31343C" />,
  ];
  return (
    <div
      className="App"
      style={{
        backgroundColor: '#00171f',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
      }}
    >
      <ElasticGallery content={contentIrregular} columnNumber={4} />
    </div>
  );
}

export default App;
