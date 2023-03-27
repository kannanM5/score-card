import {
  INCREMENT_ONE,
  INCREMENT_TWO,
  INCREMENT_FOUR,
  INCREMENT_SIX,
  OUT,
} from "./actionTypes";

export const increment_one = (id) => {
  return {
    type: INCREMENT_ONE,
    payload: id,
  };
};

export const increment_two = (id) => {
  return {
    type: INCREMENT_TWO,
    payload: id,
  };
};

export const increment_four = (id) => {
  return {
    type: INCREMENT_FOUR,
    payload: id,
  };
};

export const increment_six = (id) => {
  return {
    type: INCREMENT_SIX,
    payload: id,
  };
};

export const out = (id) => {
  return {
    type: OUT,
    payload: id,
  };
};
