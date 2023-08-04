import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaceBookLogo, FooterLogo, InstagramLogo, Logo, TelegramLogo, YouTubeLogo } from "../../assets/images/Icons/Icons";

export const Footer = () => {
    return <>
        <footer className="site-footer">
            <div className="container">
                <div className="footer-inner">
                    <Link className="footer-logo-link" to="/">
                        {/* <Logo/> */}
                        <FooterLogo/>
                    </Link>

                    <nav className="footer-nav">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Bosh sahifa</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="about-us">Biz haqimizd</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="selected-by-categories/digital-design">Raqamli Suratlar</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="selected-by-categories/photograp">Fotosurat</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="selected-by-categories/branding">Brending</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="selected-by-categories/hand-drawn-pictures">Qo'lda chizilgan</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="rating">Reyting</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="contact">Bog‘lanish</Link>
                            </li>
                        </ul>
                    </nav>

                    <ul className="footer-social-media-list">
                        <li className="footer-social-media-item">
                            <a className="footer-social-media-link" href="" target="blank">
                                <FaceBookLogo/>
                            </a>
                        </li>
                        <li className="footer-social-media-item">
                            <a className="footer-social-media-link" href="" target="blank">
                                <InstagramLogo/>
                            </a>
                        </li>
                        <li className="footer-social-media-item">
                            <a className="footer-social-media-link" href="" target="blank">
                                <TelegramLogo/>
                            </a>
                        </li>
                        <li className="footer-social-media-item">
                            <a className="footer-social-media-link" href="" target="blank">
                                <YouTubeLogo/>
                            </a>
                        </li>
                    </ul>

                    <p className="footer-desc">
                        © 2023. Zamineducation.uz Barcha huquqlar himoyalangan.
                    </p>
                </div>
            </div>
        </footer>
    </>
}