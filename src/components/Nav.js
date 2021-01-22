import React from 'react';

const Nav = () => {
    return (
        <div className='navigation'>
            <div className='navigation__up'>
                <div className='navigation__item'>
                    <div uk-icon="icon: home"></div>
                </div>
                <div className='navigation__item'>
                    <div uk-icon="icon: desktop"></div>
                </div>
                <div className='navigation__item'>
                    <div uk-icon="icon: search"></div>
                </div>
            </div>

            <div className='navigation__bottom'>
                <div className='navigation__item'>
                    <div uk-icon="icon: cog"></div>
                </div>
                <div className='navigation__item'>
                    <div uk-icon="icon: commenting"></div>
                </div>
                <div className='navigation__item'>
                    <div uk-icon="icon: sign-out"></div>
                </div>
            </div>
        </div>
    )
}

export default Nav;