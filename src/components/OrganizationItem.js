import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {setDelete, setOrganization, setContacts, setDeleteImage} from '../redux/actions/action';
import axios from 'axios';


import Footer from './Footer';
import ImageItem from './ImageItem';

const OrganizationItem = () => {
    const [title, setTitle] = React.useState(true);
    const [newTitle, setNewTitle] = React.useState('');
    const [newName, setNewName] = React.useState('');
    const [newNo, setNewNo] = React.useState('');
    const [newBusiness, setNewBusiness] = React.useState('');
    const [newType, setNewType] = React.useState('');
    const [newLastName, setNewLastName] = React.useState('');
    const [newFirstName, setNewFirstName] = React.useState('');
    const [newPatronymic, setNewPatronymic] = React.useState('');
    const [newPhone, setNewPhone] = React.useState('');
    const [newEmail, setNewEmail] = React.useState('');
    const [descr, setDescr] = React.useState(true);
    const [contact, setContact] = React.useState(true);
    const [update, setUpdate] = React.useState(false);
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

    const deleteImage = (item, index) => {
        console.log(item);
        const newObj = organization;
        delete newObj.photos[index];
        axios.delete(`http://135.181.35.61:2112/companies/12/image/${item}`, {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
          }}).then (response => {
            if (response.status === 200) {
                dispatch(setDeleteImage(newObj)) 
                setUpdate(!update);
            }
        })
    }

    const onChangeTitle = () => {
        setTitle(!title);
    }
    
    const onValueTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const onValueNameChange = (e) => {
        setNewName(e.target.value);
    }

    const onValueNoChange = (e) => {
        setNewNo(e.target.value);
    }

    const onValueBusinessChange = (e) => {
        setNewBusiness(e.target.value);
    }

    const onValueTypeChange = (e) => {
        setNewType(e.target.value);
    }

    const onValueLastNameChange = (e) => {
        setNewLastName(e.target.value);
    }

    const onValueFirstNameChange = (e) => {
        setNewFirstName(e.target.value);
    }

    const onValuePatronymicChange = (e) => {
        setNewPatronymic(e.target.value);
    }

    const onValuePhoneChange = (e) => {
        setNewPhone(e.target.value);
    }

    const onValueEmailChange = (e) => {
        setNewEmail(e.target.value);
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

    const onSaveDescr = (e) => {
        e.preventDefault();
        axios({
            method: 'patch',
            url: 'http://135.181.35.61:2112/companies/12',
            data: {
                name: newName === '' ? organization.name : newName,
                contract: {no: newNo === '' ? organization.contract.no : newNo},
                businessEntity: newBusiness === '' ? organization.businessEntity : newBusiness,
                type:["agent"]
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
            }
          }).then (response => {
              console.log(response)
            dispatch(setOrganization(response.data));
        })
        setDescr(!descr);
    }

    const onChangeContact = () => {
        setContact(!contact);
    }

    const onSaveContact = (e) => {
        e.preventDefault();
        console.log('asdads');
        axios({
            method: 'patch',
            url: 'http://135.181.35.61:2112/contacts/16',
            data: {
                lastname: newLastName === '' ? contacts.lastname : newLastName,
                firstname: newFirstName === '' ? contacts.firstname : newFirstName,
                patronymic: newPatronymic === '' ? contacts.patronymic : newPatronymic,
                phone: newPhone === '' ? contacts.phone : newPhone,
                email: newEmail === '' ? contacts.email : newEmail
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
            }
          }).then (response => {
            dispatch(setContacts(response.data));
        }).catch (() => alert('Ошибка! Скорее всего вы ввели невалидный номер телефона или адрес электронной почты!'))
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
                    <form onSubmit={onSaveDescr}>
                        <div className='organization__info'>
                            <h4>ОБЩАЯ ИНФОРМАЦИЯ</h4>
                            {descr ? 
                                <a href='/#' className='organization__descr-icon' onClick={onChangeDescr}>
                                    <div uk-icon="icon: pencil"></div>
                                </a> :
                                <button className='organization__button' type='submit'>Сохранить изменения</button>
                            }
                        </div>
                        <div className='organization__our'>
                            <div className='organization__our-text'>
                                <p>Полное название:</p>
                                <p>Договор:</p>
                                <p>Форма:</p>
                                <p>Тип:</p>
                            </div>
                            {descr ? 
                                <div className='organization__our-des'>
                                    <p>{organization.name}</p>
                                    <p>{organization.contract.no}</p>
                                    <p>{organization.businessEntity}</p>
                                    <p>{organization.type[0]}</p>
                                </div> :
                                <div className='organization__our-inputs'>
                                    <div className="organization__our-input">
                                        <input  value={newName} onChange={onValueNameChange} className="uk-input uk-form-success uk-form-width-medium uk-form-small" type="text" placeholder={organization.name}/>
                                    </div>
                                    <div className="organization__our-input">
                                        <input  value={newNo} onChange={onValueNoChange} className="uk-input uk-form-success uk-form-width-medium .uk-form-small" type="text" placeholder={organization.contract.no}/>
                                    </div>
                                    <div className="organization__our-input">
                                        <input  value={newBusiness} onChange={onValueBusinessChange} className="uk-input uk-form-success uk-form-width-medium .uk-form-small" type="text" placeholder={organization.businessEntity}/>
                                    </div>
                                    <div className="organization__our-input">
                                        <input  value={newType} onChange={onValueTypeChange} className="uk-input uk-form-success uk-form-width-medium .uk-form-small" type="text" placeholder={organization.type[0]}/>
                                    </div>
                                </div>
                                
                            }
                        </div>
                    </form >
                    <div className='organization__border'></div>
                    <form onSubmit={onSaveContact}>
                        <div className='organization__contact-info'>
                            <h4>КОНТАКТНЫЕ ДАННЫЕ</h4>
                            {contact ? 
                                <a href='/#' className='organization__descr-icon' onClick={onChangeContact}>
                                    <div uk-icon="icon: pencil"></div>
                                </a> :
                                <button className='organization__button' type='submit'>Сохранить изменения</button>
                            }
                        </div>
                        <div className='organization__contact'>
                            <div className='organization__contact-text'>
                                <p>ФИО:</p>
                                <p>Телефон:</p>
                                <p>Эл. почта:</p>
                            </div>
                            {contact ? 
                                <div className='organization__contact-des'>
                                    <p>{contacts.lastname} {contacts.firstname} {contacts.patronymic}</p>
                                    <p>{contacts.phone}</p>
                                    <p>{contacts.email}</p>
                                </div> :
                                <div className='organization__our-inputs'>
                                    <div className="organization__our-input">
                                        <input  value={newLastName} onChange={onValueLastNameChange} className="uk-input uk-form-success uk-form-width-medium uk-form-small" type="text" placeholder={contacts.lastname}/>
                                        <input  value={newFirstName} onChange={onValueFirstNameChange} className="uk-input uk-form-success uk-form-width-medium uk-form-small" type="text" placeholder={contacts.firstname}/>
                                        <input  value={newPatronymic} onChange={onValuePatronymicChange} className="uk-input uk-form-success uk-form-width-medium uk-form-small" type="text" placeholder={contacts.patronymic}/>
                                    </div>
                                    <div className="organization__our-input">
                                        <input  value={newPhone} onChange={onValuePhoneChange} className="uk-input uk-form-success uk-form-width-medium .uk-form-small" type="number" placeholder={contacts.phone}/>
                                    </div>
                                    <div className="organization__our-input">
                                        <input  value={newEmail} onChange={onValueEmailChange} className="uk-input uk-form-success uk-form-width-medium .uk-form-small" type="email" placeholder={contacts.email}/>
                                    </div>
                                </div>
                            }
                        </div>
                    </form>
                    <div className='organization__border'></div>
                    <h5>ПРИЛОЖЕННЫЕ ФОТО</h5>
                    <div className='organization__photos'>
                        {organization.photos && organization.photos.map((_, index) => (
                            <ImageItem organization={organization} key={organization.photos[index].name} index={index} onDeleteImage={deleteImage}/>
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