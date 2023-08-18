import Person1 from "../../assets/images/RatingImage1.svg";
import Person2 from "../../assets/images/RatingImage2.svg";
import Person3 from "../../assets/images/RatingImage3.svg";
import Person4 from "../../assets/images/RatingImage4.svg";
import { Rate } from "antd";
import "./Rating.scss";

export const Rating = () => {
  const cards = [
    {
      img: Person1,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person2,
      name: "Muxlisa Azimova",
    },
    {
      img: Person3,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person4,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person1,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person2,
      name: "Muxlisa Azimova",
    },
    {
      img: Person3,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person4,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person1,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person2,
      name: "Muxlisa Azimova",
    },
    {
      img: Person3,
      name: "Tolib Rakhmonov",
    },
    {
      img: Person4,
      name: "Tolib Rakhmonov",
    },
  ];

  return (
    <>
      <section className="rating">
        <div className="container">
          <div className="rating__wrap">
            <div className="rating__txts">
              <h2 className="rating__title">Reyting</h2>
              <p className="rating__text">2023 yil g‘oliblari</p>
            </div>
            <ul className="rating__list">
              {cards.map((item, index) => {
                return (
                  <li className="rating__item" key={index}>
                    <img src={item.img} alt="Person" />
                    <div className="rating__box">
                      <h4 className="rating__name">{item.name}</h4>
                      <Rate
                        allowHalf
                        defaultValue={4.5}
                        className="rating__stars"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
