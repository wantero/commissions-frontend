import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Vendor from '../vendor/Vendor'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Vendor} />
        </Switch>
    </BrowserRouter>
)