import { Link } from "react-router-dom"
import  "./Login.scss"
import { FooterLogo, Logo } from "../../assets/images/Icons/Icons"
import { useState } from "react"
import PhoneInput from "../../components/PhoneInput/PhoneInput"
export const Login = () => {

    const [passwordShow, setPasswordShow] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState('998');
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };


    return <>
        <div className='login-wrapper'>
            <div className="login-info-box">
                <div className="login-info-container">
                    <Link className="login-info-logo" to="/">
                        <Logo/>
                    </Link>

                    <div className="login-info-textbox">
                        <div className="login-info-titlebox">
                            <h2 className="login-info-title">
                                Inklyuziv San'at Galereyasiga xush kelibsiz
                            </h2>
                        </div>
                        <p className="login-info-desc">
                            Orzuyingizdagi san'at va ijodning maftunkor dunyosini oching, tasavvur go’zaligini his eting.
                        </p>
                    </div>

                    <p className="login-info-mini-desc">
                        Digital Generation Uzbekistan
                    </p>
                </div>
            </div>

            <form onSubmit={evt => {
                evt.preventDefault()
            }} className="login-form">
                <div className="login-form-wrapper">
                    <Link className="login-form-logo-link" to="/">
                        {/* <Logo/> */}
                        <FooterLogo/>
                    </Link>
                    <h3 className="login-form-title">
                        Raqamli Galereya tizimiga kirish
                    </h3>
                    <p className="login-form-desc">
                        Akkauntingiz yo'qmi ? <Link to="/register" className="login-form-color-text">Ro'yhatdan o'ting</Link>
                    </p>

                    <div className="login-form-error-box">
                        <span className="login-form-error-text">
                            No'tog'ri raqam yoki parol.
                        </span>
                    </div>

                    <label className="login-form-label phone">
                        {/* <input className="login-form-input" type="tel" placeholder="Telefon raqam" aria-label="Enter your phone number" /> */}
                        <PhoneInput  value={phoneNumber} onChange={handlePhoneNumberChange} />
                    </label>

                    <label className="login-form-label lock">
                        <input className="login-form-input" type={passwordShow ? "text" : "password"} placeholder="Parol" aria-label="Enter your password" required />
                        <button className="login-form-password-show-btn" type="button" onClick={() => {
                            setPasswordShow(!passwordShow)
                        }}></button>
                    </label>

                    <div className="login-form-password-forget-link-box">
                        <Link className="login-form-password-forget-link" to="/login">Parolni unutdingizmi?</Link>
                    </div>

                    <button className="login-form-btn" type="submit">
                        Davom etish
                    </button>
                    <button className="login-form-google-btn" type="button">
                        Google bilan kirish
                    </button>
                </div>
            </form>
        </div>
    </>
}
