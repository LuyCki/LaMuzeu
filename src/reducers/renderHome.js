const inistialState = {
  homeList: [{
      titlu: "Muzee",
      poza: require('../assets/images/muzeubv.jpg'),
      caption: "Tu ce muzee ai vizitat în Brașov?"
  },
  {
      titlu: "Rezervaţii naturale",
      poza: require('../assets/images/rezervatienaturala.jpg'),
      caption: "Tu ce rezervatii ai vizitat în Brașov?"
  },
  {
      titlu: "Mănastiri",
      poza: require('../assets/images/bisericaneagra.jpg'),
      caption: "Tu ce mănastiri ai vizitat în Brașov?"
  }]
}

export default function (state = inistialState, action) {
    switch (action.type) {
        case "DISPLAY_HOMELIST":
            return {...state, homeList:action.payload};
            break;
    }
    return state;
  }