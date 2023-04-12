import "./PhotoCard.css";
import { Facebook } from "react-bootstrap-icons";
import { useState } from "react";
const PhotoCard = (props: any) => {
  const [imageUrl, setImageUrl] = useState<any>("");
  const [fileErr, setFileErr] = useState("");

  const fileHandler = (e: any) => {
    if (e.target.files === "") {
      return setFileErr("Please select a file");
    } else {
      setFileErr("");
      const file1 = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file1);
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
    }
  };
  console.log(imageUrl);

  props.imagePass(imageUrl);

  return (
    <div
      className="container p-2 border border-secondary rounded "
      style={{
        width: "200px",
        height: "300px",
        marginTop: "50px",
        backgroundColor: "white",
        position: "absolute",
        marginLeft: "80%",
      }}
    >
      <label
        htmlFor=""
        style={{ width: "100px", marginLeft: "40px" }}
        className=" text-center text-dark"
      >
        Photo Upload
      </label>
      <img
        src={imageUrl ? imageUrl : "../../image/photocard.png"}
        alt=""
        style={{
          //   backgroundColor: "grey",
          width: "130px",
          height: "130px",
          alignContent: "center",
          marginLeft: "26px",
          borderRadius: "50%",
          border: "2px dotted black",
          padding: "3px",
        }}
      />
      <br />
      <small
        className="text-secondary"
        style={{ fontSize: "13px", marginLeft: "3px" }}
      >
        Only JPG, PNG, BMP, formats
      </small>
      <hr />
      <small
        className="text-secondary"
        style={{ fontSize: "small", marginLeft: "30px" }}
      >
        Uploads Photo From
      </small>
      <div className="row mt-2 mx-0">
        <div className="col-sm">
          <button className="px-0 py-0 btn btn-sm btn-primary pcSocialMedia pcLocal">
            <input
              type="file"
              name="file"
              accept="image/png, image/jpeg, image/gif"
              onChange={fileHandler}
              required
            />
          </button>
        </div>
        <div className="col-sm">
          <button className="px-0 py-0 btn btn-sm btn-primary pcSocialMedia pcInstagram">
            <input type="file" name="file" />
          </button>
          <span className="text-danger">{fileErr}</span>
        </div>
        <div className="col-sm">
          <button className="px-0 py-0 btn btn-sm btn-primary pcSocialMedia pcFacebook">
            <input type="file" name="file" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
