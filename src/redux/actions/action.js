import axios from 'axios';

export const fetchData = () => ()  => {
    axios('http://135.181.35.61:2112/auth?user=USERNAME').then (response => {
        console.log(response);
        // dispatch(setData(data));
    });
};

export const setData = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});
