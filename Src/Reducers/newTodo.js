import {
    REQ_FOR_New_TODO,
    REQ_FOR_New_TODO_SUCCESS,
    REQ_FOR_New_TODO_FAILED
  } from "../Action/index";
  const initialState = {
   
    isSuccess: true,
    isLoading: true
  };
  
  export default function reqNewTodoUpdate(state = initialState, action) {
    console.log(initialState, "TodoUpdate......==>", action);
    switch (action.type) {
      case REQ_FOR_New_TODO:
        return {
          ...state,
         // looseweight: action.payload.looseweight,
          comp:action.payload,
          isSuccess: true,
          isLoading: true
        };
      case REQ_FOR_New_TODO_SUCCESS:
        return {
          ...state,
          isSuccess: false,
          isLoading: false
        };
      case REQ_FOR_New_TODO_FAILED:
        return {
          ...state,
          isSuccess: false,
          isLoading: false
        };
      default:
        return state;
    }
  }
  