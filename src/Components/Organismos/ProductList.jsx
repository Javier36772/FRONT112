import React, { useState, useEffect } from "react";
import ProductCard from '../Moleculas/ProductCard';
import './styles/ProductList.css'; 
import './styles/ProductCategories.css'; 
import './styles/styles.css'; 

function ProductList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Gamess/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (games.length === 0) {
    return <div>Loading...</div>;
  }

  const categories = [...new Set(games.map((game) => game.Precio))];

  return (
    <div className="custom-product-list">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <div className="custom-subtitle">{category}</div>

          <div className="custom-product-row">
            {games
              .filter((game) => game.Precio === category)
              .map((game, gameIndex) => (
                <ProductCard
                  key={gameIndex}
                  productName={game.Nombre}
                  price={game.Precio}
                  imageSrc={game.Imagen}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
