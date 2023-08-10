import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import Sangardak from "../../assets/images/AboutImage.svg";
import { Rate } from "antd";
import { BiDislike, BiLike } from "react-icons/bi";
import { Footer } from "../../components/Footer/Footer";
import "./AboutImage.scss";
import { Input } from "antd";
const { TextArea } = Input;

export const AboutImage = () => {
  const [value, setValue] = useState("");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const toggleDislike = () => {
    setDisliked(!disliked);
  };

  return (
    <>
      <Header />
      <section className="about-image">
        <div className="container">
          <div className="about-image__wrap">
            <img
              className="about-image__img"
              src={Sangardak}
              alt="Sangardak sharsharasi"
            />
            <div className="about-image__author">
              <h3 className="about-image__name">Xurshid Istamov</h3>
              <p className="about-image__desc">Muallif</p>
            </div>
            <div className="about-image__ratings">
              <div className="about-image__rating-left">
                <h2 className="about-image__title">Sangardak sharsharasi</h2>
                <Rate
                  allowHalf
                  defaultValue={4.5}
                  className="about-image__rating"
                />
              </div>
              <div className="about-image__likes">
                <button
                  className={
                    liked ? "about-image__like-btn" : "about-image__dislike-btn"
                  }
                  onClick={toggleLike}>
                  <BiLike />
                </button>
                <button
                  className={
                    disliked
                      ? "about-image__like-btn"
                      : "about-image__dislike-btn"
                  }
                  onClick={toggleDislike}>
                  <BiDislike />
                </button>
              </div>
            </div>
            <form className="about-image__form">
              <TextArea
                className="about-image__textarea"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ushbu fotosurat haqida o‘z izohingizni qoldiring"
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />
              <button className="about-image__send-btn" type="submit">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
