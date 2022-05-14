const initState = {
    items:[],
    isFetching: true,
    count: 0
}

const repoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE-COUNT':
            return {
                ...state,
                count: state.count + 1
            }


        default:
            return state
    }
}

export const changeCount = () => ({
    type: 'CHANGE-COUNT'
})

export default repoReducer