import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();
  const goback = () => navigate(-1);
  return (
    <>
      <h1 className="text-left m-4 p-3 font-weight-normal">
        Permission Denied
      </h1>
      <Button type="button" className="btn m-5" onClick={goback}>
        Go Back
      </Button>
    </>
  );
}

export default Denied;
