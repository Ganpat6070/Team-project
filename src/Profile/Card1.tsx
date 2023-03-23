
import { PopupMenu } from "react-simple-widgets";
// import  "bootstrap-icons";        
import * as Icon from 'react-bootstrap-icons';
import {ArrowRight,Gear,BoxArrowInRight , Trash , House , Person , ArrowCounterclockwise , Lock} from 'react-bootstrap-icons';

// import { FaBeer , FcSettings } from 'react-icons'; 
const Card1 = () => {
  return (
    <>
 {/* <div id="app"> */}
      <div className="text-end ">
        <PopupMenu>
          <button className="btn rounded-circle">
          <img className="imgpro rounded-circle" style={{width:"50px"}} src={"https://qph.cf2.quoracdn.net/main-qimg-54166a525ee4fb3097d260173688c157-lq"}></img>
          </button>

          <div style={{width:"250px" , height:"400px" , marginTop: "70px" , marginRight:"10px"}} className="card text-start">
            <div className="card-body px-4 py-4 " style={{backgroundColor: "#f6837d"}}>
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                {/* <span>          <img className="imgpro rounded-circle" style={{width:"50px"}} src={"https://qph.cf2.quoracdn.net/main-qimg-54166a525ee4fb3097d260173688c157-lq"}></img>
             </span> */}
              </div>

              <h6 className="text-center ">John Doe</h6>
              <p className="text-center ">Type:Free</p>

              <hr />
             {/* 
              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p> */}

              {/* <hr className="mb-0" style={{ margin: "0 -24px 0" }} /> */}

              <div
                className="list-group list-group-flush "
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4 text-light" style={{backgroundColor: "#f6837d"}}>
                <House color="white" size={20} /> <small>My Account</small>
                </button>
                <button className="list-group-item list-group-item-action px-4 text-light" style={{backgroundColor: "#f6837d"}}>
                <Gear color="white" size={20} /> <small>Edit My Profile</small>
                </button>
                <button className="list-group-item list-group-item-action px-4 text-light" style={{backgroundColor: "#f6837d"}}>
                <ArrowCounterclockwise color="white" size={20} />  <small>My Activity Log</small>
                </button>
                <button className="list-group-item list-group-item-action px-4 text-light" style={{backgroundColor: "#f6837d"}}>
                <Trash color="white" size={20} /> <small>Delete My Profile</small>
                </button>
                <button className="list-group-item list-group-item-action px-4 text-light" style={{backgroundColor: "#f6837d"}}>
                <Lock color="white" size={20} /> <small>Change My Password</small>
                </button>
                <button className="list-group-item list-group-item-action px-4 text-light" style={{backgroundColor: "#f6837d"}}>
                <BoxArrowInRight color="white" size={20} /> <small >Logout</small>
                </button>
              </div>

              {/* <hr style={{ margin: "0 -24px 24px" }} /> */}

              {/* <div className="d-grid">
                <button className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div> */}
            </div>
          </div>
        </PopupMenu>
      </div>
    {/* </div> */}

    </>
  );
};

export default Card1;
