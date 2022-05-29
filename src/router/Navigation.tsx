import { LazyPage2, LazyPage3 } from '01-lazyLoad/pages';
import { ShoppingPage } from '02-component-patterns/pages/ShoppingPage';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React" />
          <ul>
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping page</NavLink> </li>
            <li><NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy2</NavLink></li>
            <li><NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy3</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ShoppingPage/>} />
          <Route path="lazy2" element={<LazyPage2/>} />
          <Route path="lazy3" element={<LazyPage3/>} />
          <Route path="/*" element={<Navigate to='/lazy1' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
