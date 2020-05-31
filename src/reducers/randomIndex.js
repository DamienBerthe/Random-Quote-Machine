const randomReducer = (state = Math.floor(Math.random() * 21), action) => {
    switch(action.type){
        case 'KEK':
            state = Math.floor(Math.random() * 21)
            return state
        default:
            return state;
    }
}

export default randomReducer;