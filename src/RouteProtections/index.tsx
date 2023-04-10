import React from "react";
import { useEffect } from "react";
// import { useHistory} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import AstroDetails from "../components/Profile/AestroDetails";


const Protected = (props: any) => {
  let Cmp = props.Cmp;
  const navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      navigator("/login");
    }
 
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Protected;
