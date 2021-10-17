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
