import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/hinh1.PNG';
import IMG2 from '../../assets/hinh2.PNG';
import IMG3 from '../../assets/hinh3.PNG';
import IMG4 from '../../assets/hinh4.PNG';

const data = [
    {
        id: 1,
        img: IMG1,
        title: 'Shop (P2) for admin ',
        github: 'https://github.com/latbeo0/shop',
        live: 'https://lv7devshopadmin.herokuapp.com/',
    },
    {
        id: 2,
        img: IMG2,
        title: 'Shop (P1) for client ',
        github: 'https://github.com/latbeo0/shop',
        live: 'https://lv7devshopclient.herokuapp.com/',
    },
    {
        id: 3,
        img: IMG3,
        title: 'Shop shoes clone Ananas',
        github: 'https://github.com/latbeo0/Web_Shoes',
        live: 'https://lv7devshopshoes.herokuapp.com/',
    },
    {
        id: 4,
        img: IMG4,
        title: 'Youtube clone',
        github: 'https://github.com/latbeo0/youtube',
        live: 'https://lv7devyoutube.herokuapp.com/',
    },
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {data.map((dt) => (
                    <article key={dt.id} className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={dt.img} alt='' />
                        </div>
                        <h3>{dt.title}</h3>
                        <div className='portfolio__item-cta'>
                            <a href={dt.github} className='btn'>
                                Github
                            </a>
                            <a
                                href={dt.live}
                                target='_blank'
                                className='btn btn-primary'
                                rel='noreferrer'
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
