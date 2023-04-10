import { useReducer } from "react";
import React from "react";


const AstroDetailValidation = () => {
// Iniail State for Basic Info types for use reducer


}
 
type FormState = {
    astroDateOfBirth: string;
    timeOfBirthHour: string;
    timeOfBirthMinute: string;
    timeOfBirthSecond: string;
    timeOfBirthAm: string;
    astroPlaceOfBirth: string;
    longitude: string;
    latitude: string;
    astroTime: string
  };

  // Iniail State for use reducer
export const astroinitialState: FormState = {
    astroDateOfBirth: "" ,
    timeOfBirthHour: "",
    timeOfBirthMinute: "",
    timeOfBirthSecond: "",
    timeOfBirthAm: "" ,
    astroPlaceOfBirth: "",
    longitude: "",
    latitude: "",
    astroTime: "",
  };

  
   // form reducer function
export function astroformreducer  (state: any, action: any): FormState  {
    switch (action.type) {
      case "UPDATE_DATE_OF_BIRTH":
        return {
          ...state,
          astroDateOfBirth: action.payLoad,
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


  export const astroFormValidityReducer = (state: any, action: any): any => {
    let isValid: boolean = false;
    let regex = /^[a-zA-Z]*$/;
    switch (action.type) {
      case "VALIDATE_FULL_NAME":

        isValid = action.payLoad.fullName.length > 4 ? true : false;
    
        return {
          ...state,
          ...{
            fullNameError: !isValid,
            isFormValid:
              isValid &&
              !state.lastNameError &&
            
              !state.emailError &&
              !state.passwordError,
          },
        };
      case "VALIDATE_PHONE_NUMBER":
        isValid = action.payLoad.phoneNumber.toString().length === 10 ? true : false;
        return {
          ...state,
          ...{
            phoneNumberError: !isValid,
            isFormValid:
              isValid &&
              !state.firstNameError &&
              !state.ageError &&
              !state.emailError &&
              !state.passwordError,
          },
        };
      case "VALIDATE_EMAIL":
        isValid =
          action.payLoad.email.length > 0 && action.payLoad.email.includes("@")
            ? true
            : false;
        return {
          ...state,
          ...{
            emailError: !isValid,
            isFormValid:
              isValid &&
              !state.firstNameError &&
              !state.lastNameError &&
              !state.ageError &&
              !state.passwordError,
          },
        };
      case "VALIDATE_PASSWORD":
        isValid = action.payLoad.password.length > 6 ? true : false;
        return {
          ...state,
          ...{
            passwordError: !isValid,
            isFormValid:
              isValid &&
              !state.firstNameError &&
              !state.lastNameError &&
              !state.ageError &&
              !state.emailError,
          },
        };
      default:
        return state;
    }
  };

  export const astroInitialValidityState: any = {
    fullNameError: false,
    phoneNumberError: false,
    emailError: false,
    passwordError: false,
    isFormValid: false,
  };




export default AstroDetailValidation;
