const inistialState = {
    markers: []
  }
  
export default function (state = inistialState, action) {
    switch (action.type) {
        case "TAKE_MARKERS_LIST":
            return {...state, markers:action.payload};
            break;
    }
    return state;
}