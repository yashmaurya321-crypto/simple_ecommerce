import { ADD_TO_CART } from "./action"; // Import action type constant
const initail = []
const userdata =  {
  users: ['yashmaurya2109@gmail.com', '123456789']
};
export const cart = (state = initail, action) => {
    switch(action.type){
        case ADD_TO_CART: // Use action type constant
            return [...state, action.data];
        default:
            return state;          
    } 
}
export const User_detail = (state = userdata, action) => {
  switch (action.type) {
      case 'USER_DETAIL':
          return {
              ...state,
              users: [...state.users, action.data] // Append new user data to the existing users array
          };
      default:
          return state;
  }
};