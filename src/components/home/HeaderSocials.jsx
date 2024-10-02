import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/DipakDesale28' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
            
            <a href='https://dev.to' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/dipak-desale-83291a195' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/profile.php?id=100008844546794' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/dipakdesale28' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>

            <a href='https://hashnode.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a>
        </div>
    );
};

export default HeaderSocials;
