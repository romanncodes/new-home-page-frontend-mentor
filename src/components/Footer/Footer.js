import img1 from "../../assets/images/image-retro-pcs.jpg";
import img2 from "../../assets/images/image-top-laptops.jpg";
import img3 from "../../assets/images/image-gaming-growth.jpg";
import FooterItem from "./FooterItem";



function Footer(){
    return <>
        <div className="footer">
            <FooterItem
                img={img1}
                number="01"
                title="Reviving Retro Pcs"
                description="What happens when old PCs are given modern upgrade?"
            />
            <FooterItem
                img={img2}
                number="02"
                title="Top 10 Laptops of 2022"
                description="Our best picks for varius needs and budgets."
            />
            <FooterItem
                img={img3}
                number="03"
                title="The Growth of Gaming"
                description="How the pandemic has sparked fresh opportunities."
            />
        </div>
    </>
}

export default Footer;