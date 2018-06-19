import { combineReducers } from 'redux'

import vendorReducer from '../vendor/VendorReducer'

const rootReducer = combineReducers({
    vendor: vendorReducer
})

export default rootReducer