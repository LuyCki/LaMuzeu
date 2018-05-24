const inistialState = {
    isLoading: false,
    listaMuzee: []
  }
  
export default function (state = inistialState, action) {
    switch (action.type) {
        case "MUZEE_IS_LOADING":
            return {...state, isLoading:action.payload};
            break;
        case "TAKE_MUZEE_LIST":
            return {...state, listaMuzee:action.payload};
            break;
    }
    return state;
}