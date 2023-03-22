 
const ProgressCard = () => {


    return(
        <div className="container d-flex justify-content-center padding">
    <div className="row">
        <div className="col-md-9 col-sm-6">
            <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">100%</div>
            </div>
        </div>

        
    </div>
</div>
    );
}

export default ProgressCard;