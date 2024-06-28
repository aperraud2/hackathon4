import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ACCESS_KEY } from '../../keys.js'; 
const Author = () => {
  const { username } = useParams();
  const [authorInfo, setAuthorInfo] = useState(null);
  const [authorPhotos, setAuthorPhotos] = useState([]);

  useEffect(() => {
    const fetchAuthorInfo = async () => {
      const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${ACCESS_KEY}`);
      const data = await response.json();
      setAuthorInfo(data);
    };

    const fetchAuthorPhotos = async () => {
      const response = await fetch(`https://api.unsplash.com/users/${username}/photos?client_id=${ACCESS_KEY}`);
      const data = await response.json();
      setAuthorPhotos(data);
    };

    fetchAuthorInfo();
    fetchAuthorPhotos();
  }, [username]);

  if (!authorInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{authorInfo.name}</h2>
      <p>Username: {authorInfo.username}</p>
      <p>Bio: {authorInfo.bio}</p>
      <p>Location: {authorInfo.location}</p>
      <p>Total Downloads: {authorInfo.downloads}</p>
      <p>Total Likes: {authorInfo.total_likes}</p>
      <div className="image-grid">
        {authorPhotos.map((photo) => (
          <div key={photo.id} className="image-item">
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;