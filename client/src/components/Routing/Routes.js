import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NotFound from '../layout/NotFound'
import Register from '../auth/Register'
import Login from '../auth/Login'
import PasswordResetRequest from '../auth/PasswordResetRequest'
import ResetPassword from '../auth/ResetPassword'
import Alert from '../layout/Alert'
import Dashboard from '../dashboard/Dashboard'

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route
          exact
          path='/password-reset-request'
          component={PasswordResetRequest}
        />
        <Route exact path='/reset-password/:token' component={ResetPassword} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

export default Routes
