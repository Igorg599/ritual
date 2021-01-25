import React from 'react';

import Footer from './Footer';

const OrganizationItem = () => {
    return (
        <div className='organization'>
            <div className='organization__header'>
                <div className='organization__header-left'>
                    &#8592; К списку юридических лиц
                </div>
                <div className='organization__header-right'>
                    <div className='organization__header-icon'>
                        <div uk-icon="icon: link"></div>
                    </div>
                    <div className='organization__header-icon'>
                        <div uk-icon="icon: refresh"></div>
                    </div>
                    <div className='organization__header-icon'>
                        <div uk-icon="icon: trash"></div>
                    </div>
                </div>
            </div>
            <div className='organization__descr'>
                <div className='organization__title'>
                    <h2></h2>
                    <div className='organization__descr-icon'>
                        <div uk-icon="icon: pencil"></div>
                    </div>
                </div>
                <div className='organization__info'>
                    <h4>ОБЩАЯ ИНФОРМАЦИЯ</h4>
                    <div className='organization__descr-icon'>
                        <div uk-icon="icon: pencil"></div>
                    </div>
                </div>
                <div className='organization__border'></div>
                <div className='organization__border'></div>
                <div className='organization__button'>
                    <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">+ Добавить изображение</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default OrganizationItem;