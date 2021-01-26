const initialState = {
    organization: null,
    contacts: null
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ORGANIZATION':
            return {
                ...state,
                organization: action.payload,
            };

        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.payload,
            };
        
        case 'SET_DELETE':
        return {
            ...state,
            contacts: null,
            organization: null
        };

        case 'SET_DELETE_IMAGE':
            // const item = delete state.organization.photos;
        return {
            ...state,
            organization: action.payload
        };
        
        default:
            return state;
    }
};

export default data;