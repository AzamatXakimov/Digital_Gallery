import { Link } from "react-router-dom"
import  "./Register.scss"
import { FooterLogo, Logo } from "../../assets/images/Icons/Icons"
import { useState } from "react"
import PhoneInput from "../../components/PhoneInput/PhoneInput"
export const Register = () => {

    const [passwordFirsShow, setPasswordFirsShow] = useState(false);
    const [passwordSecondShow, setPasswordSecondShow] = useState(false);

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
                            Bizning ajoyib san'at galereyamiz bo'ylab takrorlanmas sayohatga chiqing, bu yerda har bir rassom, har bir nafis haykaltarosh va har bir ijodkorning orzusidagi - sehrli makon sizni intiqlik bilan kutmoqda.
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
                        Akkaunt yaratish
                    </h3>
                    <p className="login-form-desc">
                        Akkauntingiz bormi? <Link to="/login" className="login-form-color-text">Kirish</Link>
                    </p>

                    <div className="login-form-error-box">
                        <span className="login-form-error-text">
                            No'tog'ri raqam!
                        </span>
                    </div>

                    <label className="login-form-label user">
                        <input className="login-form-input" type="text" placeholder="Ism *" aria-label="Enter your name" required />
                    </label>

                    <label className="login-form-label phone">
                        {/* <input className="login-form-input" type="tel" placeholder="Telefon raqam" aria-label="Enter your phone number" /> */}
                        <PhoneInput  value={phoneNumber} onChange={handlePhoneNumberChange} />
                    </label>

                    <label className="login-form-label sms">
                        <input className="login-form-input" type="email" placeholder="E-mail" aria-label="Enter your email" required />
                    </label>

                    <label className="login-form-label lock">
                        <input className="login-form-input" type={passwordFirsShow ? "text" : "password"} placeholder="Parol" aria-label="Enter your password" required />
                        <button className="login-form-password-show-btn" type="button" onClick={() => {
                            setPasswordFirsShow(!passwordFirsShow)
                        }}></button>
                    </label>
                    <label className="login-form-label lock">
                        <input className="login-form-input" type={passwordSecondShow ? "text" : "password"} placeholder="Parol tastiqlang" aria-label="Confirm password" required />
                        <button className="login-form-password-show-btn" type="button" onClick={() => {
                            setPasswordSecondShow(!passwordSecondShow)
                        }}></button>
                    </label>
                    
                    <label className="register-form-label">
                        <input className="register-form-checkbox visually-hidden" type="checkbox" />

                        <span className="register-form-checkbox-tick-box">
                        
                        </span>
                        Boshqalarga ko'rinsin
                    </label>

                    <button className="login-form-btn" type="submit">
                        Davom etish
                    </button>
                </div>
            </form>
        </div>
    </>
}
