const INITIAL_STATE = { vendorList: [] }

export default (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'VENDOR_FETCHED':
            return { ...state, vendorList: action.payload }
        case 'VENDOR_ACTION_MESSAGE':
            return { ...state, messages: action.payload }
        case 'VENDOR_UPDATED':
            return { ...state, vendor: action.payload }
        default:
            return state
    }
}