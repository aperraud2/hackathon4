import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ACCESS_KEY } from '../../keys.js'; // Correct relative path

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${ACCESS_KEY}&per_page=12`);
    const data = await response.json();
    setImages(data.results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for images..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
            <p>
              Photo by <Link to={`/author/${image.user.username}`}>{image.user.name}</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;