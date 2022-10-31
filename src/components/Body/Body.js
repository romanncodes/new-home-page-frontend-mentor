import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

function Body(){
    return <>
        <div className="body-content">
            <LeftBody/>
            <RightBody/>
        </div>
    </>
}

export default Body;