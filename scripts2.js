// INITIAL REDUX STATE
const initialState = {
  us: {
    name: "Pavel and Olya",
    clicks: 0,
    arr: [1, 2, 3, 4, 5]
  },
  they: {
    name: "Liza and Colter",
    clicks: 0,
    arr: [6, 7, 8, 9]
  }
};

//REDUSER

const reducerUs = (state = initialState.us, action) => {
  var newState;
  switch (action.type) {
    case "ADD":
      let newClicks = state.clicks + 1;
      newState = {
        name: state.name,
        clicks: newClicks,
        arr: state.arr
      };
      return newState;
    case "RESET_TO_ZERO":
      newState = {
        name: state.name,
        clicks: 0,
        arr: state.arr
      };
      return newState;
    default:
      return state;
  }
};

const reducerThey = (state = initialState.they, action) => {
  var newState;
  switch (action.type) {
    case "ADD_THEY":
      let newClicks = state.clicks + 1;
      newState = {
        name: state.name,
        clicks: newClicks,
        arr: state.arr
      };
      return newState;
    case "RESET_TO_ZERO_THEY":
      newState = {
        name: state.name,
        clicks: 0,
        arr: state.arr
      };
      return newState;
    default:
      return state;
  }
};

const rootReducer = this.Redux.combineReducers({
  us: reducerUs,
  they: reducerThey
});

// REDUX STORE
const { createStore } = Redux;
const store = createStore(rootReducer);
console.log(store.getState());

// RENDERING STATE IN DOM
const renderNumberUs = () => {
  const numberDisplay = document.getElementById("numberUs");
  while (numberDisplay.firstChild) {
    numberDisplay.removeChild(numberDisplay.firstChild);
  }

  const number = store.getState().us.clicks;

  const renderLine = document.createTextNode(number);
  document.getElementById("numberUs").appendChild(renderLine);
};

const renderNumberThey = () => {
  const numberDisplay = document.getElementById("numberThey");
  while (numberDisplay.firstChild) {
    numberDisplay.removeChild(numberDisplay.firstChild);
  }

  const number = store.getState().they.clicks;

  const renderLine = document.createTextNode(number);
  document.getElementById("numberThey").appendChild(renderLine);
};

window.onload = function() {
  renderNumberUs();
  renderNumberThey();
};

// CLICK LISTENER
const userClickAddUs = () => {
  store.dispatch({ type: "ADD" });
  console.log(store.getState());
};

const userClickZeroUs = () => {
  store.dispatch({ type: "RESET_TO_ZERO" });
  console.log(store.getState());
};

const userClickAddThey = () => {
  store.dispatch({ type: "ADD_THEY" });
  console.log(store.getState());
};

const userClickZeroThey = () => {
  store.dispatch({ type: "RESET_TO_ZERO_THEY" });
  console.log(store.getState());
};

// SUBSCRIBE TO REDUX STORE
store.subscribe(renderNumberUs);
store.subscribe(renderNumberThey);
