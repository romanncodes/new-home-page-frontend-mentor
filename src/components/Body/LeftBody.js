import imageMobile from "../../assets/images/image-web-3-mobile.jpg";

function LeftBody(){
    return <>
        <div className="left-body">
            <img src={imageMobile} target="image"/>
            <div className="botton-left-body">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="botton-left-content">
                    <p>
                        We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. But is it really fufilling its promise?
                    </p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    </>
}

export default LeftBody;