const randomReducer = (state = Math.floor(Math.random() * 47), action) => {
    switch(action.type){
        case 'KEK':
            state = Math.floor(Math.random() * 47)
            return state
        default:
            return state;
    }
}

export default randomReducer;