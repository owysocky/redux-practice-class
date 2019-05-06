// INITIAL REDUX STATE
const initialState = {
    name: "Pavel and Olya",
    clicks: 0,
    arr: [1,2,3,4,5]
}

//REDUSER
const reducer = (state = initialState, action) =>{
    var newState;
    switch(action.type){
        case 'ADD' :
        let newClicks = state.clicks+1;
        newState = {
            name: state.name,
            clicks: newClicks,
            arr: state.arr
        }
        return newState; 
        case 'RESET_TO_ZERO':
        
        newState = {
            name: state.name,
            clicks: 0,
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

// RENDERING STATE IN DOM
const renderNumber = () =>{
    const numberDisplay = document.getElementById('number');
    while (numberDisplay.firstChild){
        numberDisplay.removeChild(numberDisplay.firstChild);
    }

    const number = store.getState().clicks;

    const renderLine= document.createTextNode(number);
    document.getElementById('number').appendChild(renderLine);
}

window.onload = function() {
    renderNumber();
  }

  // CLICK LISTENER
const userClickAdd = () =>{
    store.dispatch({type: 'ADD'});
    console.log(store.getState());
    
}

const userClickZero = () =>{
    store.dispatch({type: 'RESET_TO_ZERO'});
    console.log(store.getState());
    
}

// SUBSCRIBE TO REDUX STORE
store.subscribe(renderNumber);