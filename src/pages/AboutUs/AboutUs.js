import { Link } from "react-router-dom"
import "./AboutUs.scss";
import AboutUsImg from "../../assets/images/about-us.jpg"

export const AboutUs = () => {
    return <>
        <section className="about-us">
            <div className="container">
                <div className="about-us-box">
                    <div className="about-us-info-box">
                        <strong className="about-us-info-text">
                            Biz haqimizda
                        </strong>

                        <h2 className="about-us-info-title">
                            Biz bilan o‘z imkoniyatlaringizni oshirib boring!
                        </h2>

                        <p className="about-us-info-desc">
                            Bizning inklyuziv "Raqamli Galereya" rasmlar, fotosuratlar va san'at asarlarining elektronik to'plami uchun onlayn platformadir. Bu yerda san'at chegara bilmaydi va barcha shaxslarning xilma-xilligini qamrab oladi. Har bir inson san'atning qudrati va go'zalligini his qilishga qodir. Turli qobiliyatlar birlashadigan, universal ijod tilini yaratadigan va chinakam qamrab oluvchi badiiy hamjamiyatni rivojlantiradigan sayohatda bizga qo'shiling.
                        </p>

                        <Link className="about-us-info-link" to="/register">Ro‘yxatdan o‘tish</Link>
                    </div>

                    <div className="about-us-img-box">
                        <img className="about-us-img" src={AboutUsImg} alt="About us image" />
                    </div>
                </div>

                <ul className="about-us-list">
                    <li className="about-us-item">
                        <strong className="about-us-item-text">
                            01. O'ziga xoslik
                        </strong>
                        <div className="about-us-item-descbox">
                            <p className="about-us-item-desc">
                                Bizning galereyamizda turli xil san'at qirralarining eng yirik jamoat kolleksiyasini namoyish qiluvchi noyob ko'rgazmalar majmuasini kashf qiling.
                            </p>
                        </div>
                    </li>
                    <li className="about-us-item">
                        <strong className="about-us-item-text">
                            02. Sifat
                        </strong>
                        <div className="about-us-item-descbox">
                            <p className="about-us-item-desc">
                                Raqamli galereya bugungi kunning eng yaxshi rassomlarining yuzlab yuqori sifatli asarlari uchun platforma hisoblanadi, bizning saytimiz ular bilan tanishishga yordam beradi.
                            </p>
                        </div>
                    </li>
                    <li className="about-us-item">
                        <strong className="about-us-item-text">
                            03. Foydalanish imkoniyati
                        </strong>
                        <div className="about-us-item-descbox">
                            <p className="about-us-item-desc">
                                Galereya katta guruhlar va ma'lum miqdordagi odamlar uchun turli turdagi tadbirlarni keng tanlov bilan taklif etadi.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </>
}
