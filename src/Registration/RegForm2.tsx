import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core";
import "./RegForm.css";


const RegForm2 = () => {

    // const [value, setValue] = useState()
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder">
            {/* <img src="https://static.m4marry.com/ui/images/quick-reg.slideA.jpg" alt="54546" /> */}
        </div>
        <form method="post">
          <h2 className="text-center">
            <strong>Registration</strong>
          </h2>
          <div className="form-group">
            <label htmlFor="fullname">Your Fullname</label>
            <input
              className="form-control"
              type="text"
              name="fullname"
              placeholder="Shyam Dadhani"
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="formGroupExampleInput">Example label</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Another label</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div> */}
          {/* <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          /> */}    
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="shyam.dadhani@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone Number*</label><br />
            <select className="custom-select">
		    <option value ="1">+971</option>
		    <option value="1">+972</option>
		    <option value="2">+198</option>
		    <option value="3">+701</option>
		</select>
            <input
              className="form-control"
              type="tel"
              name="number"
              placeholder="1234567890"
            />
          </div>
          {/* =========== */}
          {/* <div className="input-group">
            <input type="tel" className="form-control" />
            <span className="input-group-addon">Tel</span>
          </div>
          <br />
          
          <div className="input-group">
            <input type="tel" className="form-control" />
            <span className="input-group-addon">Tel</span>
          </div> */}

{/* <div className="form-group"> */}
		
    	{/* <input name="" className="form-control" placeholder="Phone number" type="text"/> */}
    {/* </div>  */}
          {/* '''''''''''''''''' */}
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />I agree to
                the terms & conditions.
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Registration
            </button>
          </div>
          {/* <hr />  */}
          <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
            <div className="border-bottom w-100 ml-5"></div>
            <span className="px-2 small text-muted font-weight-bold text-muted">
              or
            </span>
            <div className="border-bottom w-100 mr-5"></div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              <img src="../../images/chirag/google-logo.png " /> Registration
              Using Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm2;
