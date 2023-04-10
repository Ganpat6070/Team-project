import "./PhotoCard.css";
import { Facebook } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
const PhotoCard = () => {

  const [imageUrl, setImageUrl] = useState<any>('../../image/photocard.png');
  const [fileErr, setFileErr] = useState("");

  const fileHandler = (e: any) => {
    if(e.target.files === ""){
      return(

        setFileErr("Please select a file")
      )
    }else{
      setFileErr("")
      const file1 = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file1);
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
    }
  }

let token = localStorage.getItem("Token")
  useEffect(()=>{
    const reg = async () => {
      let response = await fetch("http://localhost:8000/image", {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" , Authentication:`${token}`},
        body: JSON.stringify({
          image: imageUrl
        }),
      });
      const res = await response.json();
      if (response.status === 200) {
      }
      let id = res.id;
      localStorage.setItem("id", id);
    };
  }
  ,[fileHandler])

  console.log(imageUrl)
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
        src={imageUrl}
        alt=""
        style={{
          //   backgroundColor: "grey",
          width: "130px",
          height: "130px",
          //   margin: "20px",
          alignContent: "center",
          marginLeft: "26px",
          borderRadius: "50%",
          border:"2px dotted black",
          padding:"3px",
          borderColor:"#6E6E6E"
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
            <input type="file" name="file" 
            accept="image/png, image/jpeg, image/gif"
            onChange={fileHandler}
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
            <input
              type="file"
              name="file"

            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
