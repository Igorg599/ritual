import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setDelete, setOrganization} from '../redux/actions/action';
import axios from 'axios';


import Footer from './Footer';

const OrganizationItem = () => {
    const [title, setTitle] = React.useState(true);
    const [newTitle, setNewTitle] = React.useState('');
    const [descr, setDescr] = React.useState(true);
    const [contact, setContact] = React.useState(true);
    const dispatch = useDispatch();
    const organization = useSelector(({data}) => data.organization);
    const contacts = useSelector(({data}) => data.contacts);
    const deleteItem = () => {
        axios.delete('http://135.181.35.61:2112/companies/12', {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
          }}).then (response => {
            if (response.status === 200) {
               dispatch(setDelete()) 
            }
        })
    }

    const onChangeTitle = () => {
        setTitle(!title);
    }
    
    const onValueTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const onSaveTitle = (e) => {
        e.preventDefault();
        if (newTitle === '') {
            setTitle(!title);
        } else {
            axios({
                method: 'patch',
                url: 'http://135.181.35.61:2112/companies/12',
                data: {
                    shortName: newTitle
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
                }
              }).then (response => {
                dispatch(setOrganization(response.data));
                setTitle(!title);
            })
        }
    }

    const onChangeDescr = () => {
        setDescr(!descr);
    }

    const onSaveDescr = () => {
        setDescr(!descr);
    }

    const onChangeContact = () => {
        setContact(!contact);
    }

    const onSaveContact = () => {
        setContact(!contact);
    }

    return (
        <div className='organization'>
            <div className='organization__header'>
                <a href='/#' className='organization__header-left'>
                    &#8592; К списку юридических лиц
                </a>
                <div className='organization__header-right'>
                    <a href='/#' className='organization__header-icon'>
                        <div uk-icon="icon: link"></div>
                    </a>
                    <a href='/#' className='organization__header-icon'>
                        <div uk-icon="icon: refresh"></div>
                    </a>
                    <a href='/#' className='organization__header-icon-delete' onClick={deleteItem}>
                        <div uk-icon="icon: trash"></div>
                    </a>
                </div>
            </div>
            {organization === null || contacts === null ? <div></div> :
                <div className='organization__descr'>
                    <form onSubmit={onSaveTitle} className='organization__title'>
                        {title ? 
                            <h2>{organization.shortName}</h2> :
                            <div className="uk-margin">
                                <input  value={newTitle} onChange={onValueTitleChange} className="uk-input uk-form-success uk-form-width-medium" type="text" placeholder={organization.shortName}/>
                            </div>
                        }
                        {title ?
                            <a href='/#' className='organization__descr-icon'>
                                <div uk-icon="icon: pencil" onClick={onChangeTitle}></div>
                            </a> :
                            <button className='organization__button' type='submit'>Сохранить изменения</button>
                        }
                    </form>
                    <div className='organization__info'>
                        <h4>ОБЩАЯ ИНФОРМАЦИЯ</h4>
                        {descr ? 
                            <a href='/#' className='organization__descr-icon' onClick={onChangeDescr}>
                                <div uk-icon="icon: pencil"></div>
                            </a> :
                            <button className='organization__button' onClick={onSaveDescr} type='submit'>Сохранить изменения</button>
                        }
                    </div>
                    <div className='organization__our'>
                        <div className='organization__our-text'>
                            <p>Полное название:</p>
                            <p>Договор:</p>
                            <p>Форма:</p>
                            <p>Тип:</p>
                        </div>
                        <div className='organization__our-des'>
                            <p>{organization.name}</p>
                            <p>{organization.contract.no} от {organization.contract.issue_date}</p>
                            <p>{organization.businessEntity}</p>
                            <p>{organization.type[0]}, {organization.type[1]}</p>
                        </div>
                    </div>
                    <div className='organization__border'></div>
                    <div className='organization__contact-info'>
                        <h4>КОНТАКТНЫЕ ДАННЫЕ</h4>
                        {contact ? 
                            <a href='/#' className='organization__descr-icon' onClick={onChangeContact}>
                                <div uk-icon="icon: pencil"></div>
                            </a> :
                            <button className='organization__button' onClick={onSaveContact} type='submit'>Сохранить изменения</button>
                        }
                    </div>
                    <div className='organization__contact'>
                        <div className='organization__contact-text'>
                            <p>ФИО:</p>
                            <p>Телефон:</p>
                            <p>Эл. почта:</p>
                        </div>
                        <div className='organization__contact-des'>
                            <p>{contacts.lastname} {contacts.firstname} {contacts.patronymic}</p>
                            <p>{contacts.phone}</p>
                            <p>{contacts.email}</p>
                        </div>
                    </div>
                    <div className='organization__border'></div>
                    <h5>ПРИЛОЖЕННЫЕ ФОТО</h5>
                    <div className='organization__photos'>
                        {organization.photos.map((photo, index) => (
                            <div className='organization__photo' key={organization.photos[index].name}>
                                <img src={organization.photos[index].thumbpath} alt='kartinka'/>
                                <p>{organization.photos[index].name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='organization__button-plus'>
                        <button className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">+ Добавить изображение</button>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    )
}

export default OrganizationItem;