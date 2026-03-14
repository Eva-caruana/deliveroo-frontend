import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

function App() {
  const [data, setData] = useState(null);
  //state pour savoir si la requete est terminée par defaut true car la page est directement entrain de charger qd on arrive sur la page
  const [isLoading, setIsLoading] = useState(true);
  //a placer dans le state menu parce que cest le parent le plus proche

  //faire toutes les etapes avant pour creer serveur back end voir cours back end du jour 7 à la fin
  //mettre le lien pris sur le serveur northflank !

  //a chaque render (tour de boucle) la data se met à jour donc re render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--9hvs4qlf9c87.code.run/",
        );
        // console.log(response.data); // OK
        setData(response.data);
        //on passe a false car on a recupéré l'info ce nest plus entrain de loading, pour changer condition du return
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // on lappelle dans un composant en donnant une call back en arg1 et tableau vide en arg 2 (lors de la naissance du composant on execute une seule fois lors du premier rendu) => si on lutilise pas on a une boucle infinie sert a faire requete a la naissance dun composant
    fetchData();
  }, []);
  // si pas de tableau de dependances c'st comme s'il ny avait pas de useeffect

  return isLoading ? (
    <span>Loading... </span>
  ) : (
    //ici on commence le code
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default App;
