import { Outlet, NavLink } from 'react-router-dom';
import Header from './Header';
import Logo from '../assets/logo.png';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* <header className="bg-mint-100 text-white py-4 px-10 flex justify-between items-end">
        <div className="flex items-end ">
        <img src={Logo} alt="Brain Bloom Logo" className="w-[100px] h-[100px] opacity-100"/>
        <h1 className="text-4xl font-brand text-mint-900 mb-5 -ml-4">BrainBloomKids</h1>
      </div>
       <nav className="flex flex-row gap-4 items-end"> 
          <NavLink to="/"className={({ isActive }) =>
              `text-4xl font-brand mb-5 ${
                  isActive ? "text-violet-900" : "text-mint-900"
              } hover:text-mint-800`
            }>Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `text-4xl font-brand mb-5 ${
              isActive ? "text-violet-900" : "text-mint-900"
            } hover:text-mint-800`
          }>About
        </NavLink> 
      </nav>
    </header> */}
    <Header />  

    <main className="flex-grow p-6 bg-ivory-200">
      <Outlet />
    </main>

    <footer className="bg-purple-100 text-center p-4 text-sm">
      ©  {new Date().getFullYear()} BrainBloomKids
    </footer>
    </div>
  );
};

export default Layout;
