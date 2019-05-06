// INITIAL REDUX STATE
const initialState = {
    name: "Pavel and Olya",
    clicks: 0,
    arr: [1,2,3,4,5]
}

//REDUSER
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD' :
        let newClicks = state.clicks+1;
        let newState = {
            name: state.name,
            clicks: newClicks,
            arr: state.arr
        }
        return newState; 
    default:
        return state;
    }
    
}

// REDUX STORE
const {createStore} = Redux;
const store = createStore(reducer);
console.log(store.getState());

//TESTS
const {expect}= window;

expect(reducer(initialState, {type: null})).toEqual(initialState);
expect(reducer(initialState, {type: 'ADD'})).toEqual({name: "Pavel and Olya",
clicks: 1,
arr: [1,2,3,4,5]});