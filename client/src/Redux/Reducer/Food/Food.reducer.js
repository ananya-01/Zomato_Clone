import { GET_FOOD_LIST } from "./Food.type";

const initialState = {
  foodList: [],
};

const FoodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOOD_LIST:
      return {
        ...state,
        foodList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default FoodReducer;