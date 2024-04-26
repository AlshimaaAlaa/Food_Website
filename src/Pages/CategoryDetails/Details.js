import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Details() {
  const [details, setDetails] = useState([]);
  const { strMeal } = useParams();
  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`
        );
        const data = await response.json();
        console.log(data);
        setDetails(data.meals || []);
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    }
    fetchDetails();
  }, [strMeal]);

  return (
    <div className="main">
      <div style={{paddingTop:"80px"}}>
        <div className="back">
          <Link to={"/categories"} style={{color:"white", textDecoration:"none"}}>
            <h3 style={{fontSize:"16px"}}>🏠︎ CODDLED PORK WITH CIDER</h3>
          </Link>
        </div>
      </div>
      <div className="h2">
        <h2>MEAL DETAILS</h2>
      </div>
      <div className="all">
        <div className="meal">
          {details.length > 0 ? (
            details.map((detail) => (
              <div key={detail.idMeal} className="meal-detail">
                <div className="first-div">
                  <div>
                    <img src={detail.strMealThumb} alt={detail.strMeal} />
                  </div>
                  <div>
                    <p className="name">{detail.strMeal}</p>
                    <div className="div-span">
                      <span className="span1" style={{ fontSize: "30px" }}>
                        Category:
                      </span>
                      <span className="h4">{`${detail.strCategory}`}</span>
                    </div>
                    <span
                      className="span1"
                      style={{ fontSize: "30px", padding: "20px" }}
                    >
                      source:
                    </span>
                    <a href="" className="a">
                      {detail.strYoutube}
                    </a>
                    <div>
                      <ul className="ul" style={{ marginTop: "30px" }}>
                        <p
                          style={{
                            fontSize: "20px",
                            padding: "0px",
                            fontFamily: "cursive",
                          }}
                        >
                          Ingredients:
                        </p>
                        <div></div>
                        <li>{detail.strIngredient1}</li>
                        <li>{detail.strIngredient2}</li>
                        <li>{detail.strIngredient3}</li>
                        <li>{detail.strIngredient4}</li>
                        <li>{detail.strIngredient5}</li>
                        <li>{detail.strIngredient6}</li>
                        <li>{detail.strIngredient7}</li>
                        <li>{detail.strIngredient8}</li>
                        <li>{detail.strIngredient9}</li>
                        <li>{detail.strIngredient10}</li>
                        <li>{detail.strIngredient11}</li>
                        <li>{detail.strIngredient12}</li>
                        <li>{detail.strIngredient13}</li>
                        <li>{detail.strIngredient14}</li>
                        <li>{detail.strIngredient15}</li>
                        <li>{detail.strIngredient16}</li>
                        <li>{detail.strIngredient17}</li>
                        <li>{detail.strIngredient18}</li>
                        <li>{detail.strIngredient19}</li>
                        <li>{detail.strIngredient20}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      fontFamily: "cursive",
                      marginTop: "20px",
                    }}
                  >
                    Measure:
                  </p>
                  <ul className="uls">
                    <li>{detail.strMeasure1}</li>
                    <li>{detail.strMeasure2}</li>
                    <li>{detail.strMeasure3}</li>
                    <li>{detail.strMeasure4}</li>
                    <li>{detail.strMeasure5}</li>
                    <li>{detail.strMeasure6}</li>
                    <li>{detail.strMeasure7}</li>
                    <li>{detail.strMeasure8}</li>
                    <li>{detail.strMeasure9}</li>
                    <li>{detail.strMeasure10}</li>
                    <li>{detail.strMeasure11}</li>
                    <li>{detail.strMeasure12}</li>
                    <li>{detail.strMeasure13}</li>
                    <li>{detail.strMeasure14}</li>
                    <li>{detail.strMeasure15}</li>
                    <li>{detail.strMeasure16}</li>
                    <li>{detail.strMeasure17}</li>
                    <li>{detail.strMeasure18}</li>
                    <li>{detail.strMeasure19}</li>
                    <li>{detail.strMeasure20}</li>
                  </ul>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      fontFamily: "cursive",
                      marginTop: "20px",
                    }}
                  >
                    Instructions:
                  </h3>
                  <p
                    style={{
                      fontWeight: "lighter",
                      fontFamily: "cursive",
                      marginTop: "20px",
                    }}
                  >
                    {detail.strInstructions}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
