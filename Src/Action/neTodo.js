import {
    REQ_FOR_New_TODO,
    REQ_FOR_New_TODO_SUCCESS,
    REQ_FOR_New_TODO_FAILED
  } from "./index";
  
  export function reqNewTodo(comp) {
    return {
      type: REQ_FOR_New_TODO,
      payload: comp
    };
  }
  
  export function succesPNewTodo() {
    return {
      type: REQ_FOR_New_TODO_SUCCESS
    };
  }
  
  export function failureNewTodo() {
    return {
      type: REQ_FOR_New_TODO_FAILED
    };
  }