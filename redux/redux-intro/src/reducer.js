let defaultState = {
    likes: 2000,
    text: "aint no holler back girl",
    darkMode: true,
    thangs: ['b-a-n-a-n-a-s']
}

let reducer = (prevState=defaultState, action) => {
    switch(action.type){
        case "LIKE_MOVIES":
          return {...prevState, likes: prevState.likes + 1}
        case "LIKE_REVIEWS":
          return prevState
        case "DISLIKE":
          return {...prevState, likes: prevState.likes - 1}
        case "DARK_MODE":
          return {...prevState, darkMode: !prevState.darkMode}
        case "HANDLE_CHANGE":
          return {...prevState, text: action.payload}
        case "ADD_TEXT":
          return {...prevState, text: "", thangs: [...prevState.thangs, prevState.text]}
        default:
          return {...prevState}
      }
}

// ACTION CREATORS
// TODO: add resources

const LIKE = "LIKE_MOVIES"
const LIKE_REVIEWS = "LIKE_REVIEWS"
const LIKE_ACTION = {type: LIKE}






export  { reducer, LIKE_ACTION }