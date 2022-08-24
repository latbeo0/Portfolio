import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

const data = [
    {
        id: 1,
        avatar: AVTR1,
        name: 'Reviewer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto et. Mollitia aut recusandae ab repellendus aperiam excepturi, ea, esse inventore optio, architecto voluptatem earum? Repellat esse harum amet atque.',
    },
    {
        id: 2,
        avatar: AVTR2,
        name: 'Reviewer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto et. Mollitia aut recusandae ab repellendus aperiam excepturi, ea, esse inventore optio, architecto voluptatem earum? Repellat esse harum amet atque.',
    },
    {
        id: 3,
        avatar: AVTR3,
        name: 'Reviewer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto et. Mollitia aut recusandae ab repellendus aperiam excepturi, ea, esse inventore optio, architecto voluptatem earum? Repellat esse harum amet atque.',
    },
    {
        id: 4,
        avatar: AVTR4,
        name: 'Reviewer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto et. Mollitia aut recusandae ab repellendus aperiam excepturi, ea, esse inventore optio, architecto voluptatem earum? Repellat esse harum amet atque.',
    },
];

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className='container testimonials__container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map((dt) => (
                    <SwiperSlide className='testimonial' key={dt.id}>
                        <div className='client__avatar'>
                            <img src={dt.avatar} alt='Avatar One' />
                        </div>
                        <h5 className='client__name'>{dt.name}</h5>
                        <small className='client__review'>{dt.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
