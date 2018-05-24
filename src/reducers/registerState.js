const inistialState = {
    isLoadingFacebook: false,
    isLoadingVizitator: false,
    isLogedIn: null,
    user: {
        isVizitator: true
    }
  }
  
export default function (state = inistialState, action) {
    switch (action.type) {
        case "REGISTER_IS_LOADING_FACEBOOK":
            return {...state, isLoadingFacebook:action.payload};
            break;
        case "REGISTER_IS_LOADING_VIZITATOR":
            return {...state, isLoadingVizitator:action.payload};
            break;
        case "IS_LOGED_IN":
            return {...state, isLogedIn:action.payload};
            break;
        case "CHECK_USER":
            return {...state, user:action.payload};
            break;
    }
    return state;
}