import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languages: "Languages",
  researchTitle: "Type an english word",
  research: "Your research",
  validButton: "Validate",
  resultFound: "matching results for",
  resultLanguage: "englishword",
};

const translateHomeSlice = createSlice({
  name: "translateHome",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      const { languages, researchTitle, research, validButton, resultFound, resultLanguage } = action.payload;
      return {
        ...state,
        languages,
        researchTitle,
        research,
        validButton,
        resultFound,
        resultLanguage,
      };
    },

    setToFrench: (state) => {
      return {
        ...state,
        languages: "Langues",
        researchTitle: "Entrez un mot en français",
        research: "Votre recherche",
        validButton: "Valider",
        resultFound: "résultats correspondants pour",
        resultLanguage: "frenchword",
      };
    },

    setToEnglish: (state) => {
      return {
        ...state,
        languages: "Languages",
        researchTitle: "Type an english word",
        research: "Your research",
        validButton: "Validate",
        resultFound: "matching results for",
        resultLanguage: "englishword",
      };
    },

    setToSpanish: (state) => {
      return {
        ...state,
        languages: "Idiomas",
        researchTitle: "Entre una palabra en castellano",
        research: "Su búsqueda",
        validButton: "Validar",
        resultFound: "resultados correspondientes para",
        resultLanguage: "spanishword",
      };
    },
  },
});

export const { setLanguage, setToFrench, setToEnglish, setToSpanish } = translateHomeSlice.actions;

export default translateHomeSlice.reducer;
