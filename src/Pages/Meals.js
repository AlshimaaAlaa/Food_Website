import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Meals() {
  const [meals, setMeals] = useState([]);
  const { strCategory } = useParams();
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
        );
        const data = await response.json();
        console.log(data);
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }
    fetchMeals();
  }, [strCategory]);
  return (
    <div className="main">
      <div className="h2">
        <h2>Meals</h2>
      </div>
      <div className="category">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="category-item">
              <Link to={`/meals/${meal.strMeal} `}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="category__img"
                />
              </Link>
              <h4 className="category__h4">{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
export default Meals;
