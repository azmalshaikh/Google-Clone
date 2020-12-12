export const initialState = {
    term: null,
};

// whenever we type end hit enter the term changes form this :
export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
};

// Reducer 
// state is data layer, action is whatever we pass in data layer
// Swrich statement is to change the term
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            // return state and also change the term 
            return {
                ...state,
                term:action.term,
            };
        default:
            return state;
    }
};

export default reducer;

