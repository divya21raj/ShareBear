import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCESS, GET_SUGGESTIONS_FAIL } from './types';

import axios from 'axios';

import {MOVIE_DB_BASE_URL, MOVIE_DB_API_KEY, GAME_DB_API_KEY, GAME_DB_BASE_URL} from '../const';

// type= movie, tv
export const getSuggestions = (query, type) => {
    if(type !== 'games'){
        url = MOVIE_DB_BASE_URL+`search/${type}?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
        header={};
    }
    else{
        url = GAME_DB_BASE_URL+`games/?search=${query}&fields=id,name,cover,first_release_date,summary`
        header={
            "user-key": GAME_DB_API_KEY,
            Accept: "application/json"
        }
    }
    return (dispatch) => {
        dispatch({type: GET_SUGGESTIONS});
        
        console.log(`Posting on Url=${url}`)
        console.log(query)

        axios.get(url, {headers:header})
        .then(function (response) {
            if(type === 'games')
                payload = response.data;
            else payload = response.data.results;

            console.log(response);
            gotSuggestions(dispatch, payload);
        })
        .catch(function (error) {
            console.log({... error});
            getSuggestionsFail(dispatch);
        });
    }
}   

const gotSuggestions = (dispatch, suggestionList) => {
    dispatch({
        type: GET_SUGGESTIONS_SUCCESS, 
        payload: suggestionList
    });
}

const getSuggestionsFail = (dispatch) => {
    dispatch({
        type: GET_SUGGESTIONS_FAIL
    });
}