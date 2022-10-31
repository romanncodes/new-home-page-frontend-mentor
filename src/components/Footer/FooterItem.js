
function FooterItem(props){
    return <>
        <div className="footer-item">
            <img src={props.img} target="img"/>
            <div className="footer-item-description">
                <h1>{props.number}</h1>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    </>
}

export default FooterItem;