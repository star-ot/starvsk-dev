import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BadgesComponent = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('https://badges.roproxy.com/v1/users/340730/badges');
        setBadges(response.data.data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };

    fetchBadges();
  }, []);

  return (
    <div>
      <h1>Badges</h1>
      {badges.map((badge) => (
        <div key={badge.id} className="badge-card">
          <img
            src={`https://assetgame.roblox.com/Thumbs/Asset.asmx/RequestThumbnail_v2?assetId=${badge.id}`}
            alt={badge.displayName}
          />
          <h3 className='text-white'>{badge.displayName}</h3>
          <p className='text-white'>{badge.displayDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default BadgesComponent;
