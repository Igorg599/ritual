import axios from 'axios';

export const fetchOrganization = () => (dispatch)  => {
    axios.get('http://135.181.35.61:2112/companies/12', {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
      }}).then (response => {
        dispatch(setOrganization(response.data));
        })
};

export const fetchContacts = () => (dispatch)  => {
    axios.get('http://135.181.35.61:2112/contacts/16', {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVVNFUk5BTUUiLCJpYXQiOjE2MTE1NjUwNzYsImV4cCI6MTYxMjE2OTg3Nn0.z0OLptBe_eXbO39kDfo0rkcaDaAGxH1Ked9aLTddyFc'
      }}).then (response => {
        dispatch(setContacts(response.data));
        })
};

export const setOrganization = (items) => ({
    type: 'SET_ORGANIZATION',
    payload: items,
});

export const setContacts = (items) => ({
    type: 'SET_CONTACTS',
    payload: items,
});

export const setDelete = () => ({
  type: 'SET_DELETE'
});