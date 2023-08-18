import { Link } from "react-router-dom";
import "./CategoriesImageCard.scss";

export const CategoriesImageCard = ({obj}) => {
    return <>
        <Link to={obj.link} className="categories-image-card">
            <img className="categories-image-card-img" src={obj.img} alt="Image" />

            <div className="categories-image-card-info">
                <h3 className="categories-image-card-title">
                    {obj.title}
                </h3>
                <p className="categories-image-card-desc">
                    {obj.desc}
                </p>
            </div>
        </Link>
    </>
}
