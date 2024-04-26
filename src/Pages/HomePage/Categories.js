import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      const data = await response.json();
      console.log(data);
      setCategories(data.categories || []);
    }
    fetchCategories();
  }, []);
  return (
    <div className="main">
      <div className="h2">
        <h2>CATEGORIES</h2>
      </div>
      <ul className="categories">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.idCategory} className="categories-item list-style-none">
              <Link to={`/categories/${category.strCategory} `}>
                <div className="content">
                  <img src={category.strCategoryThumb} alt={category.strCategory} />
                  <h3>{category.strCategory}</h3>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
export default Categories;
