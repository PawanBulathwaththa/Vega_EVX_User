import React, { useState } from "react";
import axios from "axios";

const CarForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile) {
      alert("Please upload a video file for the car model.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("video", videoFile); // Attach the video file

    try {
      await axios.post("http://localhost:8080/api/cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Car model added successfully!");
      setName("");
      setPrice("");
      setVideoFile(null);
    } catch (error) {
      console.error("Error adding car model:", error);
      alert("Failed to add car model.");
    }
  };

  return (
    <div className="car-form" style={{ padding: "20px" }}>
      <h2>Add a New Car Model</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter car name"
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>
        <div>
          <label>Upload Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CarForm;
