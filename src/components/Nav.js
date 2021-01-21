import React from 'react';

const Nav = () => {
    return (
        <div className='navigation'>
            <div className='navigation__up'>
                <div className='navigation__item'>
                    <a href="#" uk-icon="icon: home"></a>
                </div>
                <div className='navigation__item'>
                    <a href="#" uk-icon="icon: desktop"></a>
                </div>
                <div className='navigation__item'>
                    <a href="#" uk-icon="icon: search"></a>
                </div>
            </div>

            <div className='navigation__bottom'>
                <div className='navigation__item'>
                    <a href="#" uk-icon="icon: cog"></a>
                </div>
                <div className='navigation__item'>
                    <a href="#" uk-icon="icon: commenting"></a>
                </div>
                <div className='navigation__item'>
                    <a href="#" uk-icon="icon: sign-out"></a>
                </div>
            </div>
        </div>
    )
}

export default Nav;