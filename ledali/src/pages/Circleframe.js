import React, { useState, useEffect } from 'react';

const CircleFrame = ({ imageFolderPath }) => {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Fetch image paths using server-side API (if applicable)
    useEffect(() => {
      const fetchImages = async () => {
        try {
          if (imageFolderPath) { // Check if imageFolderPath is provided
            const response = await fetch('/api/get-image-paths', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ folderPath: imageFolderPath }),
            });
  
            if (!response.ok) {
              throw new Error('Failed to fetch image paths');
            }
  
            const data = await response.json();
            setImages(data.imagePaths);
          }
        } catch (error) {
          console.error('Error fetching image paths:', error);
        }
      };
  
      fetchImages();
    }, [imageFolderPath]);
  
    // Handle image switching (if images are fetched)
    useEffect(() => {
      if (images.length === 0) {
        return;
      }
  
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    return (
      <div className="circle-frame">
        {images.length > 0 && (
          <img src={images[currentImageIndex]} alt="Slideshow" />
        )}
      </div>
    );
  };
  
  export default CircleFrame;