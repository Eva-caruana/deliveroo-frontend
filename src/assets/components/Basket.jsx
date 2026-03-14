const Basket = ({ basket, setBasket }) => {
  // calcul du total de la commande
  const calculatingTotal = (tab) => {
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
      result = result + Math.round(tab[i].quantity * tab[i].price * 100) / 100;
    }
    return result.toFixed(2);
  };
  return (
    <section className="payment-column">
      {/* si le panier est vide */}
      {basket.length === 0 ? (
        <div className="empty-basket">
          <button className="basket-title-empty">Valider mon panier</button>

          <p>Votre panier est vide</p>
        </div>
      ) : (
        <div>
          <button className="basket-title">Valider mon panier</button>

          <div className="basket-content">
            {basket.map((meal, index) => {
              return (
                <article className="meal-line" key={index}>
                  <div className="counter">
                    <button
                      onClick={() => {
                        const copy = [...basket];

                        if (meal.quantity === 1) {
                          copy.splice(index, 1);
                        } else {
                          // sinon je retire 1 à la clef quantity du plat à l'index "index"
                          copy[index].quantity--;
                        }

                        setBasket(copy);
                      }}
                    >
                      -
                    </button>

                    <p>{meal.quantity}</p>

                    <button
                      onClick={() => {
                        // 1 :
                        const copy = [...basket];
                        // 2 :
                        // je rajoute 1 à la clef quantity de l'élément à l'index "index"
                        copy[index].quantity++;
                        // 3 :
                        setBasket(copy);
                      }}
                    >
                      +
                    </button>
                  </div>
                  {/* _______________________counter fin */}

                  <div>
                    <p className="meal-name">{meal.title}</p>
                  </div>

                  <div>
                    <p className="basket-meal-price">
                      {/* calculer le prix par la quantité et l'arrondir */}
                      {(
                        Math.round(meal.quantity * meal.price * 100) / 100
                      ).toFixed(2)}{" "}
                      €
                    </p>
                  </div>
                </article>
              );
            })}

            <div className="sub-total">
              <div>
                <p>Sous-total</p>
                <p>{calculatingTotal(basket)} €</p>
              </div>
              <div>
                <p>Frais de livraison</p>
                <p>2.50 €</p>
              </div>
            </div>

            <div className="total">
              <div>
                <p>Total</p>
                <p>
                  {/* calculer le prix du panier final et l'arrondir  */}
                  {(Number(calculatingTotal(basket)) + 2.5).toFixed(2)} €
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Basket;
