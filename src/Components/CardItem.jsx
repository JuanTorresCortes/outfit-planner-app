import React from 'react';

function CardItem({ outfit }) {
  return (
    <div>
      {outfit.top && 
        <div>
          <img src={outfit.top.imageUrl} alt={outfit.top.description} />
          <p>{outfit.top.description}</p>
        </div>
      }

      {outfit.bottom && 
        <div>
          <img src={outfit.bottom.imageUrl} alt={outfit.bottom.description} />
          <p>{outfit.bottom.description}</p>
        </div>
      }

      {outfit.shoes && 
        <div>
          <img src={outfit.shoes.imageUrl} alt={outfit.shoes.description} />
          <p>{outfit.shoes.description}</p>
        </div>
      }
    </div>
  );
}

export default CardItem;
