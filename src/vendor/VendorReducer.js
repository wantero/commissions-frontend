const INITIAL_STATE = {vendorList: []}

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    console.log(action.payload)
    switch(action.type) {
        case 'VENDOR_FETCHED':
            return {...state, vendorList: action.payload}
        case 'VENDOR_REMOVED':
            return {...state, messages:  action.payload}
        default:
            return state
    }
}