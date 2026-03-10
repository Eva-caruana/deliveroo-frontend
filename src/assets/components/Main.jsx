// import { IoMdStar } from "react-icons/io";
// const Main = ({ data }) => {
//   return (
//     <main>
//       <section className="restaurant-info">
//         <div className="container">
//           <div className="restaurant-info-bloc">
//             <div className="text-info">
//               <h1>{data.restaurant.name}</h1>
//               <p>{data.restaurant.description}</p>
//             </div>

//             <div className="restaurant-info-picture">
//               <img src={data.restaurant.picture} alt="food-picture" />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* // on fait une boucle pour aller chercher les elements dans mon tableau  */}
//       <div className="food-payment-category">
//         <div className="container">
//           <section className="food-category">
//             <div>
//               {data.categories.map((category, index) => {
//                 return (
//                   category.meals.length > 0 && (
//                     <div key={index}>
//                       <h2>{category.name}</h2>
//                       <div className="block-category">
//                         {/* // on fait une boucle dans une boucle car meals est un tableau */}

//                         {category.meals.map((meal, index) => {
//                           // console.log("ici le log=>>>", category.meal);
//                           return (
//                             <div
//                               key={index}
//                               className="meal"
//                               onClick={() => {
//                                 const basketCopy = [...basket];
//                                 basketCopy.push(meal);
//                                 console.log(basketCopy);
//                                 setBasket(basketCopy);
//                               }}
//                             >
//                               <div className="aside">
//                                 <h3>{meal.title}</h3>
//                                 <p> {meal.description.slice(0, 60)}</p>
//                                 <div className="price-popularity">
//                                   <div className="meal-price">
//                                     <p>{meal.price} €</p>
//                                     {/* si l'element est populaire on l'affiche sinon on affiche pas  */}
//                                   </div>
//                                   <div className="popular">
//                                     {meal.popular && (
//                                       <p className="popular">
//                                         <IoMdStar /> Populaire
//                                       </p>
//                                     )}
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="meal-picture">
//                                 {/* si on a une image on l'affiche sinon on affiche pas  */}
//                                 {meal.picture ? (
//                                   <img src={meal.picture} alt="meal-picture" />
//                                 ) : (
//                                   ""
//                                 )}
//                               </div>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   )
//                 );
//               })}
//             </div>

//             <div className="payment-column">
//               <div>
//                 <div className="basket-title">
//                   <h3>Valider mon panier</h3>
//                 </div>
//                 {basket.map((meal, index) => {
//                   return (
//                     <div className="basket-content" key={index}>
//                       <div>
//                         <div>
//                           <p
//                             onClick={() => {
//                               const basketCopy = [...basket];
//                               basketCopy.find(meal.id);

//                               setBasket(basketCopy - 1);
//                             }}
//                           >
//                             -
//                           </p>
//                           <p>qtté</p>
//                           <p>+</p>
//                         </div>
//                         <p>{meal.title}</p>
//                         <p>{meal.price}</p>
//                       </div>
//                       <div>
//                         <p>Sous-total</p>
//                         <p>Frais de livraison</p>
//                       </div>
//                       <div className="total">
//                         <p>qqté*total</p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Main;
