import { Outlet, NavLink } from 'react-router-dom';
import Header from './Header';
import Logo from '../assets/logo.png';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">

      <Header />

      <main className="flex-grow bg-ivory-200">
        <div className=" mx-auto pt-5 md:pt-7">
          <Outlet />
        </div>
      </main>

      <footer className="bg-purple-100 text-center p-4 text-sm">
        © {new Date().getFullYear()} BrainBloomKids
      </footer>

    </div>
  );
};


export default Layout;
