import { useState } from "react";
import { Input, Select } from "antd";
import { UZB } from "../../assets/images/Icons/Icons";
import TextArea from "antd/es/input/TextArea";
import "./Contact.scss";

export const Contact = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <section className="contact">
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10913.502190712525!2d69.26748227812188!3d41.31157815300077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1692219305961!5m2!1sru!2s"
            width="100%"
            height="660"
            style={{ border: "none", opacity: "0.5" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container">
          <h2 className="contact__title">Bog'lanish</h2>
          <div className="contact__wrap">
            <div className="contact__left">
              <form className="contact__form">
                <h3 className="contact__title2">
                  Fikr-mulohaza shaklini to'ldiring va biz siz bilan tezda
                  bog'lanamiz!
                </h3>
                <p className="contact__desc">
                  * belgilangan maydonlar to’ldirilishi shart
                </p>
                <div className="contact__box">
                  <Input
                    className="contact__input"
                    size="large"
                    placeholder="Ismingiz *"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <Input
                    className="contact__input"
                    size="large"
                    placeholder="+998"
                    prefix={<UZB />}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <div className="contact__box">
                  <Input
                    className="contact__input"
                    size="large"
                    placeholder="Email manzilingiz *"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <Select
                    className="contact__select"
                    placeholder="Mavzu"
                    allowClear
                    options={[
                      {
                        value: "not found",
                        label: "Ma'lumot topilmadi :(",
                      },
                    ]}
                  />
                </div>
                <TextArea
                  className="contact__input"
                  placeholder="Xabar matni *"
                  onChange={(e) => setValue(e.target.value)}
                  style={{ padding: "20px", marginBottom: "13px" }}
                  autoSize={{
                    minRows: 5,
                    maxRows: 5,
                  }}
                />
                <button className="contact__send-btn" type="submit">
                  Jo‘natish
                </button>
              </form>
            </div>
            <div className="contact__right">
              <ul className="contact__list">
                <li className="contact__item">
                  <h4 className="contact__title3">Manzil</h4>
                  <p className="contact__text">
                    Toshkent shahri, Yunusobod tumani, Sharof Rashidov ko’chasi
                    16a
                  </p>
                </li>
                <li className="contact__item">
                  <h4 className="contact__title3">Telefon raqamlar</h4>
                  <p className="contact__text">
                    +99871 123 45 67, +99871 123 45 67, +99871 123 45 67,
                  </p>
                </li>
                <li className="contact__item">
                  <h4 className="contact__title3">Ish vaqti</h4>
                  <p className="contact__text">
                    Dushanba-Shanba / 08:00 dan 19:00 gacha
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
