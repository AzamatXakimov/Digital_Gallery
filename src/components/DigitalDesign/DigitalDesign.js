import './DigitalDesign.scss';

// SWIPER IMPORTS 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ImageCard } from '../ImageCard/ImageCard';
import { Link } from 'react-router-dom';
export const DigitalDesign = () => {

    const dataTemp = [
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
        },
        {
            title: "Sangardak sharsharasi",
            desc: "Muallif: Xurshid Istamov",
            img: "https://picsum.photos/id/237/200/300",
            link: "/"
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
							<SwiperSlide key={i}>
								<ImageCard obj={item} />
							</SwiperSlide>
						))}
					</Swiper>

                    <div className='digital-design-link-box'>
                        <Link className='digital-design-link' to="/">3D xonada tomosha qilish</Link>
                        <Link className='digital-design-link' to="/">Bo'limni ko'rish</Link>
                    </div>
				</div>
			</section>
		</>
	);
};
