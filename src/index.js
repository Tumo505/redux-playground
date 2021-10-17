import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators
} from "redux";

const makeLarger = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

const makeLargerRepeatThreeTimesAndEmbolden = compose(
  embolden,
  repeatThreeTimes,
  makeLarger
);

console.log(makeLargerRepeatThreeTimesAndEmbolden("hey,"));

// redux stores & reducers
const initialState = {
  value: 0
};

// action
const INCREMENT = "INCREMENT";
const ADD = "ADD";
const incrementAction = {
  type: INCREMENT
};

// action creator
const increment = (amount) => ({
  type: INCREMENT
});
const add = (amount) => ({
  type: ADD,
  payload: amount
});

// reducer
const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      value: state.value + 1
    };
  }

  if (action.type === ADD) {
    return {
      value: state.value + action.payload
    };
  }

  return state;
};
// create a store
const store = createStore(reducer);

store.dispatch(increment());

console.log(store.getState());
