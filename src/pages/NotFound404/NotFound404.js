import "./NotFound404.scss"
import NotFoundImg from "../../assets/images/404-img.svg"
import { Link } from "react-router-dom"
export const NotFound404 = () => {
    return <>
        <section className="not-found">
            <div className="container">
                <div className="not-found-inner">
                    <img className="not-found-img" src={NotFoundImg} alt="Not found image" />
                    <h2 className="not-found-title">
                        Hech nima topilmadi
                    </h2>
                    <Link className="not-found-link" to="/">Bosh sahifaga qaytish</Link>
                </div>
            </div>
        </section>
    </>
}
