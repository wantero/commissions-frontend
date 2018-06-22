import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import vendorReducer from '../vendor/VendorReducer'

const rootReducer = combineReducers({
    vendor: vendorReducer,
    form: formReducer
})

export default rootReducer