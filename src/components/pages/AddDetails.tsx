import { useState } from "react";
import "../Register/RegForm.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
import { Carousel } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarHead from "../navbar";

const AddData = () => {
  const [name, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const [year, setYear] = useState("");
  const [religion, setReligion] = useState("");
  const [image, setImage] = useState("");

  const onRegister = async (e: any) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "userdata"), {
      name: name,
      gender: gender,
      born_year: year,
      religion: religion,
      image: image,
    });
    toast.success("Data added successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    console.log(docRef.id);
  };

  return (
    <>
      <NavbarHead />
      <div className="register-photo">
        <div className="form-container imgdiv">
          <div className="image-hold">
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
                    Easily accessible customer care centres and a committed and
                    professional service team ensure that help is just a call or
                    click away.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-0  "
                  src="https://static.m4marry.com/ui/images/quick-reg.slideA.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Easily accessible customer care centres and a committed and
                    professional service team ensure that help is just a call or
                    click away.
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
                    The unique matching tools on m4marry.com enables you to find
                    your perfect partner.
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
                    Easily accessible customer care centres and a committed and
                    professional service team ensure that help is just a call or
                    click away.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {/* <Carousel className="imgset">
         
          </Carousel> */}
          </div>
          <form onSubmit={onRegister}>
            <h2 className="text-center">
              <strong>Add Details</strong>
            </h2>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>

              <input
                className="form-control"
                type="text"
                name="fullname"
                required
                placeholder="Shyam Dadhani"
                // ref={fname}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Gender</label>

              <input
                className="form-control"
                type="text"
                name="fullname"
                required
                placeholder="Shyam Dadhani"
                // ref={fname}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Religion</label>

              <input
                className="form-control"
                type="text"
                name="fullname"
                required
                placeholder="Shyam Dadhani"
                // ref={fname}
                onChange={(e) => {
                  setReligion(e.target.value);
                }}
                value={religion}
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Birth year</label>

              <input
                className="form-control"
                type="number"
                name="fullname"
                required
                placeholder="Shyam Dadhani"
                // ref={fname}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Image</label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setImage(e.target.value)}
                required
                value={image}
              />
              {/* <span className="text-danger size-small">{emailError}</span> */}
            </div>
            <br />
            <div className="form-group text-center">
              <button
                className="btn btn-primary btn-block"
                type="submit"
                disabled={false}
              >
                Add
              </button>

              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
