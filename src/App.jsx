import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //a chaque render la data se met à jour
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
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
    <>
      <Header />
      <Main data={data} />
    </>
  );
}

export default App;
