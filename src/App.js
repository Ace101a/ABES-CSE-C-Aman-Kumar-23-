import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

function App() {
  const menuItems = [
    {
      title: "Burger Deluxe",
      description: "Premium beef patty with fresh vegetables",
      price: 12.99,
      imageUrl: "path/to/burger-image.jpg"
    },
    // Add more menu items as needed
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="cards-container">
          {menuItems.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
