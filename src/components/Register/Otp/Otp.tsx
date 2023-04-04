import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavbarHead from "../../navbar";
import "./Otp.css";
import { ToastContainer, toast } from "react-toastify";
import Cookie from "js-cookie";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<number>();
  // console.log(otp)

  

  const verifyOtp = async (e: any) => {
    e.preventDefault();

    // let id = Cookie.get("id");
    // console.log("id:",id);
    let id= localStorage.getItem("id");
    let response = await fetch("http://localhost:8000/otp", {
      method: "POST",
      headers: { "Content-Type": "application/json", id: `${id}` },
      body: JSON.stringify({
        otp: otp,
      }),
    });
    const res = await response.json();
    console.log(res);

    if (res.msg === "Registerd, You can login now") {
      toast.success(res.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
    if (res.msg === "You entered wrong otp") {
      toast.error(res.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    console.log(res.msg);
  };
  return (
    <>
      <NavbarHead />
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <Carousel className="imgset">
                    <Carousel.Item>
                      <img
                        className="d-block w-0  "
                        src="https://static.m4marry.com/ui/images/quick-reg.slideA.jpg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Easily accessible customer care centres and a
                          committed and professional service team ensure that
                          help is just a call or click away.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-0"
                        src="https://static.m4marry.com/ui/images/quick-reg.slideE.jpg"
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          The unique matching tools on m4marry.com enables you
                          to find your perfect partner.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-0"
                        src="https://static.m4marry.com/ui/images/quick-reg.slideC.jpg"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Easily accessible customer care centres and a
                          committed and professional service team ensure that
                          help is just a call or click away.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="form-input">
                  <h2>Enter OTP</h2>
                  <p>OTP has been send to your Registered email address</p>
                  <form onSubmit={verifyOtp}>
                    {/* <div className="form-group">
                    <label>Enter Your OTP</label>
                    <input type="text" id="" name="name" required />
                  </div> */}
                    <div className="form-group">
                      <label className="labelotp" htmlFor="otp">
                        Enter Your OTP
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="otp"
                        maxLength={4}
                        onWheel={(e) => e.currentTarget.blur()}
                        onChange={(e) => {
                          setOtp(parseInt(e.target.value));
                        }}
                        placeholder="0000"
                      />
                      <small id="otp" className="form-text text-muted">
                        We'll never share your details with anyone else.
                      </small>
                    </div>
                    {/* <div className="form-group">
                                <input type="password" id="" name="password" required/>
                                <label>password</label>
                            </div> */}
                    <div className="myform-button">
                      <button type="submit" className="myform-btn">
                        Submit
                      </button>
                    </div>
                    <p className="securitytext">
                      <img
                        className="securitylogo"
                        src="../../../image/security.png"
                        alt=""
                      />{" "}
                      Your info is safely secured
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;

// import { useState } from "react";
// import { Carousel } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import NavbarHead from "../../navbar";
// import "./Otp.css";
// import { ToastContainer, toast } from "react-toastify";
// import Cookies from "js-cookie";

// const Otp = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState<number>(0);
//   const verifyOtp = async (e: any) => {
//     e.preventDefault();
//     let id = Cookies.get('id');
//     // let otp = Cookies.get("otp");

//     console.log(id);
//     // console.log(otp);

//     let response = await fetch("http://localhost:8000/otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         otp: otp,
//         id: id
//       }),
//     });

//     const res = await response.json();

//     if (res.msg === "Registered, You can login now") {
//       toast.success(res.msg, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//       localStorage.setItem("login", "true");
//       setTimeout(() => {
//         navigate("/login");
//       }, 1500);
//     }
//     if (res.msg === "You entered wrong otp") {
//       toast.error(res.msg, {
//         position: toast.POSITION.TOP_RIGHT,
//       });
//     }
//   };

//   return (
//     <>
//       <NavbarHead />
//       <section className="myform-area">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="form-area login-form">
//                 <div className="form-content">
//                   <Carousel className="imgset">
//                     <Carousel.Item>
//                       <img
//                         className="d-block w-0  "
//                         src="https://static.m4marry.com/ui/images/quick-reg.slideA.jpg"
//                         alt="First slide"
//                       />
//                       <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>
//                           Easily accessible customer care centres and a
//                           committed and professional service team ensure that
//                           help is just a call or click away.
//                         </p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                       <img
//                         className="d-block w-0"
//                         src="https://static.m4marry.com/ui/images/quick-reg.slideE.jpg"
//                         alt="Second slide"
//                       />

//                       <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>
//                           The unique matching tools on m4marry.com enables you
//                           to find your perfect partner.
//                         </p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                       <img
//                         className="d-block w-0"
//                         src="https://static.m4marry.com/ui/images/quick-reg.slideC.jpg"
//                         alt="Third slide"
//                       />

//                       <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                           Easily accessible customer care centres and a
//                           committed and professional service team ensure that
//                           help is just a call or click away.
//                         </p>
//                       </Carousel.Caption>
//                     </Carousel.Item>
//                   </Carousel>
//                 </div>
//                 <div className="form-input">
//                   <h2>Enter OTP</h2>
//                   <p>OTP has been send to your Registered email address</p>
//                   <form onSubmit={verifyOtp}>
//                     {/* <div className="form-group">
//                     <label>Enter Your OTP</label>
//                     <input type="text" id="" name="name" required />
//                   </div> */}
//                     <div className="form-group">
//                       <label className="labelotp" htmlFor="otp">
//                         Enter Your OTP
//                       </label>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="otp"
//                         value={otp}
//                         // maxLength={4}
//                         onWheel={(e) => e.currentTarget.blur()}
//                         onChange={(e) => {
//                           setOtp(parseInt(e.target.value));
//                           console.log(otp)
//                         }}
//                         placeholder="0000"
//                       />
//                       <small id="otp" className="form-text text-muted">
//                         We'll never share your details with anyone else.
//                       </small>
//                     </div>
//                     {/* <div className="form-group">
//                                 <input type="password" id="" name="password" required/>
//                                 <label>password</label>
//                             </div> */}
//                     <div className="myform-button">
//                       <button type="submit" className="myform-btn">
//                         Submit
//                       </button>
//                     </div>
//                     <p className="securitytext">
//                       <img
//                         className="securitylogo"
//                         src="../../../image/security.png"
//                         alt=""
//                       />{" "}
//                       Your info is safely secured
//                     </p>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Otp;
