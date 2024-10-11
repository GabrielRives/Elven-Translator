// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Body.scss";
import { useSelector } from "react-redux";

function Body() {
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState([]); // Défini comme tableau vide par défaut
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchWord || searchWord.trim() === "") {
      setError("Veuillez entrer un mot valide.");
      setResult([]);
      return;
    }

    try {
      const response = await fetch(`/translate?word=${searchWord}`);
      const data = await response.json();

      console.log(data); // Vérifie ce que tu reçois ici

      if (response.ok) {
        setResult(data); // S'assurer que `data` est directement assigné
        setError("");
      } else {
        setError("Mot non trouvé.");
        setResult([]);
      }

      setIsActive(true);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Erreur de connexion au serveur.");
      setResult([]);
      setIsActive(true);
    }
  };

  const researchTitle = useSelector((store) => store.translateHome.researchTitle);
  const research = useSelector((store) => store.translateHome.research);
  const validButton = useSelector((store) => store.translateHome.validButton);
  const resultFound = useSelector((store) => store.translateHome.resultFound);
  const resultLanguage = useSelector((store) => store.translateHome.resultLanguage);

  return (
    <div className="bodyContainer">
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
          <h3>
            {result.length > 0 ? `${result.length} ${resultFound}: ${searchWord}` : `0 ${resultFound}: ${searchWord}`}
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
    </div>
  );
}

export default Body;
