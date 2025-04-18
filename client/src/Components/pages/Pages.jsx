import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from '../Common/Header/Header';
import Home from '../Home/Home';
import About from '../about/about';
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import Footer from '../Common/footer/Footer';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Login from './Login';
import Register from './Register';

const Pages = () => {
  return (
    <>
    
        <Routes>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        </Switch>
        <Footer/>
       </Routes>
       
    </>
  )
}

export default Pages