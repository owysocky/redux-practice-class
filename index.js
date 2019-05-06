// INITIAL REDUX STATE
const initialState = {
    name: "Pavel and Olya",
    clicks: 0,
    arr: [1,2,3,4,5]
}

// REDUXSTORE
const {createStore} = Redux;
const store = createStore(reducer);
console.log(store.getState());

