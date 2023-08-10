import { Link } from "react-router-dom";
import "./Branding.scss";

export const Branding = () => {
    const dataTemp = [
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
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
                                <img className="branding-img" src={item.img} alt="" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </>
}
