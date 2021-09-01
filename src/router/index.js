import { Switch, Route } from 'react-router-dom'
import Home from '../views/home/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Movies from '../views/movies/Movies'

const router = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/register'>
        <Register/>
      </Route>
      <Route path='/movies' exact>
        <Movies />
      </Route>
    </Switch>
  )
}

export default router
