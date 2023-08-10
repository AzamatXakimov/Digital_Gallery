import { Link } from "react-router-dom";
import "./ImageCard.scss";

export const ImageCard = ({obj}) => {
    return <>
        <Link to={obj.link} className="image-card">
            <img className="image-card-img" src={obj.img} alt="Image" />

            <div className="image-card-info">
                <h3 className="image-card-title">
                    {obj.title}
                </h3>
                <p className="image-card-desc">
                    {obj.desc}
                </p>
            </div>
        </Link>
    </>
}
