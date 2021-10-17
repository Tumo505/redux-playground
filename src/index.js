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

const reducer = (state, action) => {
  return state;
};
// create a store
const store = createStore(reducer);

console.log(store);
