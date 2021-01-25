import React from 'react';

const Nav = () => {
    return (
        <div className='navigation'>
            <div className='navigation__up'>
                <a href='/#' className='navigation__item'>
                    <div uk-icon="icon: home"></div>
                </a>
                <a href='/#' className='navigation__item'>
                    <div uk-icon="icon: desktop"></div>
                </a>
                <a href='/#' className='navigation__item'>
                    <div uk-icon="icon: search"></div>
                </a>
            </div>

            <div className='navigation__bottom'>
                <a href='/#' className='navigation__item'>
                    <div uk-icon="icon: cog"></div>
                </a>
                <a href='/#' className='navigation__item'>
                    <div uk-icon="icon: commenting"></div>
                </a>
                <a href='/#' className='navigation__item'>
                    <div uk-icon="icon: sign-out"></div>
                </a>
            </div>
        </div>
    )
}

export default Nav;