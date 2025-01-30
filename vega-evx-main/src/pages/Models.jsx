import React, { useState, useEffect } from "react";
import "./Pages.css";
import Footer from "../components/Footer";

function Models() {
  const [models, setModels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch car models from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/carmodels")
      .then((response) => response.json())
      .then((data) => setModels(data))
      .catch((error) => console.error("Error fetching car models:", error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [models.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {models.map((model, index) => (
          <div
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
            key={model.id}
          >
            <img
              src={`http://localhost:8080${model.imageUrl}`}
              alt={model.modelName}
              style={{ width: "100%", height: "100%", borderRadius: "8px", objectFit: "cover" }}
            />
            <h2>{model.modelName}</h2>
            <p>Price: ${model.price?.toLocaleString()}</p>
            <button className="customize-btn">Customize</button>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={handlePrev}>&#8592; Prev</button>
        <button onClick={handleNext}>Next &#8594;</button>
      </div>

      <Footer />
    </div>
  );
}

export default Models;