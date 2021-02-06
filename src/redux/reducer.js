const initialState = {
    visible: true,
    opaque: false,
};


function rootReducer(state = initialState, action) {


    switch (action.type) {
        case 'SET_INVISIBLE':
            return Object.assign({}, state, {
                visible: false
            });
        case 'SET_VISIBLE':
            return Object.assign({}, state, {
                visible: true
            });
        case 'SET_OPAQUE':
            return Object.assign({}, state, {
                opaque: true,
                visible: true,
            });
        case 'SET_TRANSPARENT':
            return Object.assign({}, state, {
                opaque: false,
                visible: state.opaque !== true
            });
        default:
            return state
    }
}

export default rootReducer;
