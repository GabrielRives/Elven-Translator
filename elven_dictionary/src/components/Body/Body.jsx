// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Body.scss";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading"; // Importer ton composant Loading

function Body() {
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Ajouter l'état pour gérer le chargement

  // Récupérer la langue sélectionnée dans le store Redux
  const selectedLanguage = useSelector((store) => store.translateHome.selectedLanguage);

  const handleInputChange = (e) => {
    setSearchWord(e.target.value);
  };
  const handleSearch = async () => {
    if (!searchWord || searchWord.trim() === "") {
      setError("Veuillez entrer un mot valide.");
      setResult([]);
      return;
    }

    setIsLoading(true); // Démarrer l'animation de chargement
    const startTime = Date.now(); // Enregistrer le temps de début

    try {
      // Lancer la requête réseau
      const response = await fetch(`/translate?word=${searchWord}&language=${selectedLanguage}`);
      const data = await response.json();

      // Calculer le temps écoulé
      const elapsedTime = Date.now() - startTime;
      const minimumLoadingTime = 2000; // 2 secondes minimum

      if (response.ok) {
        setResult(data);
        setError("");
      } else {
        setError("Mot non trouvé.");
        setResult([]);
      }

      // Si la requête est plus rapide que 2 secondes, attendre le temps restant
      const remainingTime = minimumLoadingTime - elapsedTime;
      if (remainingTime > 0) {
        setTimeout(() => {
          setIsLoading(false); // Arrêter l'animation
          setIsActive(true); // Afficher les résultats
        }, remainingTime); // Attendre le temps restant
      } else {
        setIsLoading(false); // Arrêter l'animation immédiatement
        setIsActive(true); // Afficher les résultats
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Erreur de connexion au serveur.");
      setResult([]);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = 2000 - elapsedTime;

      if (remainingTime > 0) {
        setTimeout(() => {
          setIsLoading(false);
          setIsActive(true);
        }, remainingTime);
      } else {
        setIsLoading(false);
        setIsActive(true);
      }
    }
  };

  const researchTitle = useSelector((store) => store.translateHome.researchTitle);
  const research = useSelector((store) => store.translateHome.research);
  const validButton = useSelector((store) => store.translateHome.validButton);
  const resultFound = useSelector((store) => store.translateHome.resultFound);
  const resultLanguage = useSelector((store) => store.translateHome.resultLanguage);

  return (
    <div className="bodyContainer">
      {isLoading ? ( // Si l'état de chargement est vrai, affiche le composant Loading
        <Loading />
      ) : (
        <>
          <div className="bodyContainer__search">
            <p className="bodyContainer__search__searchBarTitle">{researchTitle}</p>
            <div className="bodyContainer__search__searchInput">
              <input
                className="bodyContainer__search__searchInput__researchField"
                placeholder={research}
                value={searchWord}
                onChange={handleInputChange}
              />
              <button type="button" className="bodyContainer__search__searchInput__buttonSearch" onClick={handleSearch}>
                {validButton}
              </button>
            </div>
          </div>

          {isActive && (
            <div className="bodyContainer__resultResearch">
              <h3 className="bodyContainer__resultResearch__numberFound">
                {result.length > 0
                  ? `${result.length} ${resultFound}: ${searchWord}`
                  : `0 ${resultFound}: ${searchWord}`}
              </h3>
              {error && <p className="error">{error}</p>}
              {result.length > 0 && (
                <div className="bodyContainer__resultResearch__entrie active">
                  {result.map((item, index) => (
                    <div className="bodyContainer__resultResearch__entrie__contained" key={index}>
                      <p>
                        <strong style={{ fontSize: "1.5em" }}>{item.quenyaword} : </strong>({item.identifier}){" "}
                        {item[resultLanguage]}
                      </p>
                      <p className="elvenFont">{item.quenyaword}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Body;
