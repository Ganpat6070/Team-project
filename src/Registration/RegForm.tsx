import React from "react";
import '@fortawesome/fontawesome-svg-core'
import "./RegForm.css"
const RegForm = () => {

return(
<form action="">
{/* <!-- Navbar--> */}
<header className="header">
    <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
            
            {/* <a href="#" className="navbar-brand">
                <img src="https://bootstrapious.com/i/snippets/sn-registeration/logo.svg" alt="logo" width="150"/>
            </a> */}
        </div>
    </nav>
</header>


<div className="container-xxl contain-reg">
    <div className="row py-5 mt-4 align-items-center">
        {/* <!-- For Demo Purpose --> */}
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img src="https://static.m4marry.com/ui/images/quick-reg.slideA.jpg" alt="" className="img-fluid mb-3 d-none d-md-block"/>
        </div>

        {/* <!-- Registeration Form --> */}
        <div className="col-md-7 col-lg-6 ml-auto">
            <form action="#">
                <div className="row">

                    {/* <!-- First Name --> */}
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend">
                            {/* <span className="input-group-text bg-white px-4 border-md border-right-0">
                                <i className="fa fa-user text-muted"></i>
                            </span> */}
                        </div>
                        <label htmlFor="fullname">Your Fullname*</label><br />
                        <input id="fullName" type="text" name="fullname" placeholder="Full Name" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    {/* <!-- Email Address --> */}
                    <div className="input-group col-lg-12 mb-4">
                        {/* <div className="input-group-prepend">
                        </div> */}
                        <label htmlFor="email">Your Email*</label><br />
                        <input id="email" type="email" name="email" placeholder="Email Address" className="form-control bg-white border-left-0 border-md"/>
                    </div>

                    {/* <!-- Phone Number --> */}
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend">
                        </div>
                        <select id="countryCode" name="countryCode" style={{width: "80px"}} className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                            <option value="">+12</option>
                            <option value="">+10</option>
                            <option value="">+15</option>
                            <option value="">+18</option>
                        </select>
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" className="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>



                   
                    {/* //Term and condition  */}
                    <div>
        
                        <input type="checkbox" name="t&c" className=""/>
                        <label htmlFor="t&c" className="px-2 pb-4">I Agree to Term & Conditions</label>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div className="form-group col-lg-12 mx-auto mb-0">
                        <a href="#" className="btn btn-primary btn-block py-2">
                            <button className="btn btn-primary btn-sm py-0 ">Registration</button>
                        </a>
                    </div>

                    {/* <!-- Divider Text --> */}
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                    {/* <!-- Social Login --> */}
                    <div className="form-group col-lg-12 mx-auto">
                        <a href="#" className="btn btn-primary btn-block py-2 btn-facebook">
                          
                            <a className="btn btn-lg btn-google btn-block btn-outline" href="#"><img src="../../images/chirag/google-logo.png "/> Registration Using Google</a>

                        </a>
                      
                    </div>

                    {/* <!-- Already Registered --> */}
                    <div className="text-center w-100">
                        <p className="text-muted font-weight-bold">Already Registered? <a href="#" className="text-primary ml-2">Login</a></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>

</form>
   ) 
}

export default RegForm