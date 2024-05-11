const initialState = {
    token: localStorage.getItem('token'  )
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET':
            localStorage.setItem('token' , action.payload )
            return {
                token:  action.payload
            };
        case 'REMOVE':
            
            localStorage.removeItem('token' )
            return {
                token: ""
            };
        default:
            return state;
    }
};

export default Reducer