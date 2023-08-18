import './DigitalDesign.scss';

// SWIPER IMPORTS 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ImageCard } from '../ImageCard/ImageCard';
import { Link, useNavigate } from 'react-router-dom';

// IMAGE IMPORTS 
import img1 from "../../assets/images/oy-bola.jpg"
import img2 from "../../assets/images/Rinki.jpg"
import img3 from "../../assets/images/Quvonch.jpg"
import img4 from "../../assets/images/qoziqorin-uy.jpg"
import img5 from "../../assets/images/Baliq-ovi.jpg"
import img6 from "../../assets/images/qish-fasli.jpg"
import img7 from "../../assets/images/tabiat.jpg"
import img8 from "../../assets/images/dizayn.jpg"
import img9 from "../../assets/images/abdug'afforova-jamila.jpg"
import img10 from "../../assets/images/anoor-6.jpg"
import img11 from "../../assets/images/dilurojonova.jpg"
import img12 from "../../assets/images/nematjonova-dilbaroy.jpg"
import img13 from "../../assets/images/usmonova-malik.jpg"
import img14 from "../../assets/images/xosiyatoy-rustamjonova.jpg"
import img15 from "../../assets/images/xursanova.jpg"
import img16 from "../../assets/images/yusupaliyeva.jpg"
export const DigitalDesign = () => {
    const navigate = useNavigate()

    const dataTemp = [
        {
            id: 1,
            title: "Oybola surati",
            desc: "Muallif: Digital Generation",
            img: img1,
            link: "art/d-design:1"
        },
        {
            id: 2,
            title: "Rinky",
            desc: "Muallif: Digital Generation",
            img: img2,
            link: "art/d-design:2"
        },
        {
            id: 3,
            title: "Quvonch",
            desc: "Muallif: Digital Generation",
            img: img3,
            link: "art/d-design:3"
        },
        {
            id: 4,
            title: "Qo'ziqorinli uy",
            desc: "Muallif: Digital Generation",
            img: img4,
            link: "art/d-design:4"
        },
        {
            id: 5,
            title: "Baliq ovi",
            desc: "Muallif: Digital Generation",
            img: img5,
            link: "art/d-design:5"
        },
        {
            id: 6,
            title: "Qish fasli",
            desc: "Muallif: Digital Generation",
            img: img6,
            link: "art/d-design:6"
        },
        {
            id: 7,
            title: "Tabiat",
            desc: "Muallif: Digital Generation",
            img: img7,
            link: "art/d-design:7"
        },
        {
            id: 8,
            title: "Dizayn",
            desc: "Muallif: Digital Generation",
            img: img8,
            link: "art/d-design:8"
        },
        {
            id: 9,
            title: "Abdug`afforova Jamila",
            desc: "Muallif: Digital Generation",
            img: img9,
            link: "art/d-design:9"
        },
        {
            id: 10,
            title: "Anoor6",
            desc: "Muallif: Digital Generation",
            img: img10,
            link: "art/d-design:10"
        },
        {
            id: 11,
            title: "Dilurodjonova Ismigul11",
            desc: "Muallif: Digital Generation",
            img: img11,
            link: "art/d-design:11"
        },
        {
            id: 12,
            title: "NE`MATJONOVA  DILBAROY",
            desc: "Muallif: Digital Generation",
            img: img12,
            link: "art/d-design:12"
        },
        {
            id: 13,
            title: "USMONOVA MALIKA33",
            desc: "Muallif: Digital Generation",
            img: img13,
            link: "art/d-design:13"
        },
        {
            id: 14,
            title: "XOSIYATOY RUSTAMJONOVA",
            desc: "Muallif: Digital Generation",
            img: img14,
            link: "art/d-design:14"
        },
        {
            id: 15,
            title: "XURSANOVA SHABNAM1",
            desc: "Muallif: Digital Generation",
            img: img15,
            link: "art/d-design:15"
        },
        {
            id: 16,
            title: "YUSUPALIYEVA MARG`UBA",
            desc: "Muallif: Digital Generation",
            img: img16,
            link: "art/d-design:16"
        },
    ]

	return (
		<>
			<section className='digital-design'>
				<div className='container'>
					<h2 className='digital-design-title'>Raqamli dizayn</h2>

					<Swiper
						effect={'coverflow'}
						grabCursor={false}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 400,
							modifier: 1.5,
							slideShadows: true,
						}}
						// breakpoints={{
						// 	600: {
						// 		slidesPerView: 2,
						// 		spaceBetween: 20,
						// 	},
                        //     1000: {
                        //         slidesPerView: 3,
						// 		spaceBetween: 20,
                        //     },
						// }}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className='mySwiper'
					>
						{dataTemp.map((item, i) => (
							<SwiperSlide key={i} onClick={() => {
                                navigate(item.link)
                            }}>
								<ImageCard obj={item} />
							</SwiperSlide>
						))}
					</Swiper>

                    <div className='digital-design-link-box'>
                        <Link className='digital-design-link' to="/">3D xonada tomosha qilish</Link>
                        <Link className='digital-design-link' to="selected-by-categories/digital-design">Bo'limni ko'rish</Link>
                    </div>
				</div>
			</section>
		</>
	);
};
