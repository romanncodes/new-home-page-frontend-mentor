import ItemRight from "./ItemRight";

function RightBody(){
    return <>
        <div className="right-body">
            <h1>New</h1>
            <div className="news-right">
                <ItemRight 
                    title="Hidrogen vs Electric cars" 
                    description="will hydrogen-fueled car even catch ups to EVs? "/>
                    <hr/>
                <ItemRight 
                    title="The Downsides of all artisty" 
                    description="What are that possible adverse effect of on-demand IA image generation?"/>
                    <hr/>
                <ItemRight 
                    title="Is VC Funding Drying up?" 
                    description="private funding by VCfirms is down 50% YOY. We take a look at what that means."/>
            </div>

        </div>
    </>
}

export default RightBody;