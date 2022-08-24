import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a
                href='https://www.linkedin.com/in/tu%E1%BA%A5n-l%C6%B0%C6%A1ng-anh-799419212/'
                target='_blank'
                rel='noreferrer'
            >
                <BsLinkedin />
            </a>
            <a
                href='https://github.com/latbeo0'
                target='_blank'
                rel='noreferrer'
            >
                <FaGithub />
            </a>
            <a
                href='https://www.facebook.com/LV7beo'
                target='_blank'
                rel='noreferrer'
            >
                <FaFacebookF />
            </a>
        </div>
    );
};

export default HeaderSocials;
