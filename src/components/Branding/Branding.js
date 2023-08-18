import { Link } from "react-router-dom";
import "./Branding.scss";

// IMAGE IMPORTS 
import img1 from "../../assets/images/Brending-1.jpg";
import img2 from "../../assets/images/Brending-2.jpg";
import img3 from "../../assets/images/Brending-3.jpg";
import img4 from "../../assets/images/Brending-4.jpg";
import img5 from "../../assets/images/Brending-5.jpg";

export const Branding = () => {
    const dataTemp = [
        {
            id: 1,
            title: "Venere",
            desc: "Muallif: Digital Generation",
            img: img1,
            link: "art/branding:1"
        },
        {
            id: 2,
            title: "Rase",
            desc: "Muallif: Digital Generation",
            img: img2,
            link: "art/branding:2"
        },
        {
            id: 3,
            title: "Debo Verde",
            desc: "Muallif: Digital Generation",
            img: img3,
            link: "art/branding:3"
        },
        {
            id: 4,
            title: "Christian",
            desc: "Muallif: Digital Generation",
            img: img4,
            link: "art/branding:4"
        },
        {
            id: 5,
            title: "Eximil",
            desc: "Muallif: Digital Generation",
            img: img5,
            link: "art/branding:5"
        },
    ]
    return <>
        <section className="branding">
            <div className="container">
                <h2 className="branding-title">
                    Branding
                </h2>
                <ul className="branding-list">
                    {dataTemp.map((item, i) => (
                        <li className="branding-item">
                            <Link className="branding-link" to={item.link}>
                                <img className="branding-img" src={item.img} alt={item.title} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
