import React from 'react';
import './about.css';
import ME from '../../assets/anh2.jpg';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { IoSchoolOutline } from 'react-icons/io5';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='me-about' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <IoSchoolOutline className='about__icon' />
                            <h5>School</h5>
                            <small>
                                University of Technology and Education
                            </small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Final year students</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>4+ projects</small>
                        </article>
                    </div>

                    <p>
                        I'm a self-taught and hard-working developer, I want to
                        be an fresher developer of your business, work for your
                        business. At the same time, I want to learn more from
                        your professional working environment to become a
                        fullstack developer.
                    </p>

                    <a href='#contact' className='btn btn-primary'>
                        Let's talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
