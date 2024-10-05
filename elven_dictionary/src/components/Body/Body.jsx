import "./Body.scss";

function Body() {
  return (
    <div className="bodyContainer">
      <div className="bodyContainer__search">
        <p className="bodyContainer__search__searchBarTitle">
          Entrez un mot en français
        </p>
        <div className="bodyContainer__search__searchInput">
          <input
            className="bodyContainer__search__searchInput__researchField"
            placeholder="Votre recherche"
          />
          <button
            type="button"
            className="bodyContainer__search__searchInput__buttonSearch"
          >
            Valider
          </button>
        </div>
      </div>
      <div className="bodyContainer__resultResearch"></div>
    </div>
  );
}

export default Body;
