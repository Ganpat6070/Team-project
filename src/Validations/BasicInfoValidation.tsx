import { useReducer } from "react";
import React from "react";



 // Iniail State for Basic Info types for use reducer
 type FormState = {
    fullName: string;
    email: string;
    phoneNumber: number;
    password: string;
  };

  // Iniail State for use reducer
  export const initialState: FormState = {
    fullName: "",
    email: "",
    phoneNumber: 0,
    password: "",
  };

   // form reducer function
export function formreducer  (state: any, action: any): FormState  {
    switch (action.type) {
      case "UPDATE_FULL_NAME":
        return {
          ...state,
          fullName: action.payLoad,
        };
      case "UPDATE_EMAIL":
        return {
          ...state,
          email: action.payLoad,
        };
      case "UPDATE_PHONE_NUMBER":
        return {
          ...state,
          phoneNumber: action.payLoad,
        };

      case "UPDATE_PASSWORD":
        // return {
        //   ...state,BasicInfoValidation
        //   password: action.payLoad,
        // };
      default:
        return state;
    }
  };

  // return{};


 



export default formreducer;
