
import "bootstrap/dist/css/bootstrap.min.css";
// import {stepper} from "bootstrap"

const ProgressBar = () => {


    return(
        // <li classNameName="stepper-step stepper-active">
<> 
<div className="row">
  <div className="col-md-12">

    {/* <!-- Stepers Wrapper --> */}
    <ul className="stepper stepper-horizontal">

      {/* <!-- First Step --> */}
      <li className="completed">
        <a href="#!">
          <span className="circle">1</span>
          <span className="label">First step</span>
        </a>
      </li>

      {/* <!-- Second Step --> */}
      <li className="active">
        <a href="#!">
          <span className="circle">2</span>
          <span className="label">Second step</span>
        </a>
      </li>

      {/* <!-- Third Step --> */}
      <li className="warning">
        <a href="#!">
          <span className="circle"><i className="fas fa-exclamation"></i></span>
          <span className="label">Third step</span>
        </a>
      </li>

    </ul>
    {/* <!-- /.Stepers Wrapper --> */}

  </div>
</div>
{/* <!-- /.Horizontal Steppers --> */}
</>
      
    );
}

export default ProgressBar;


