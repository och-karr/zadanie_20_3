import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = 
//[]; generujemy pustą tablicę
    {
        countries: countriesData,
        selectedCountry: {},
        visibleCountries: []
    };

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            //return countriesData; //to z importu czyli cała ta tablica
            return Object.assign({}, state, {countries: state.countries});
        
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id===action.id);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});
            
        default:
            return state;
    }
    // return state;
};

export default countriesReducer;