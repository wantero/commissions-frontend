import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import VendorList from '../vendor/VendorList'
import VendorForm from '../vendor/VendorForm'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={VendorList} />
            <Route path='/VendorForm' component={VendorForm} />
        </Switch>
    </BrowserRouter>
)