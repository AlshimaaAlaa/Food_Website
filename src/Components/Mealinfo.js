// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// function Mealinfo() {
//   const [mealinfo, setMealinfo] = useState([]); 
//   const {idCategory } = useParams();
//   useEffect(() => {
//     async function fetchMealInfo() {
//       try {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list+${idCategory}`);
//         const data = await response.json();
//         console.log(data);
//         setMealinfo(data.meals || []);
//       } catch (error) {
//         console.error("Error fetching meal info:", error);
//       }
//     } 
//     fetchMealInfo();
//   }, [idCategory]);
//   return (
//     <div className="main">
//       <div className="category">
//         {mealinfo.length > 0 ? (
//           mealinfo.map((meals,index) => (
//             <div key={index} className="">
//               <h4 className="">{meals.strIngredient}</h4>
//               <p>{meals.strDescription}</p>
//             </div>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// }
// export default Mealinfo;
