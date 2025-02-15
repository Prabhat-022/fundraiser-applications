import { useSelector } from 'react-redux';
import Header from './mainContaint/Header';
import Menu from './leftMenu/Menu';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';



const Layout = () => {
    const statusTabCart = useSelector(store => store.cart.statusTab);

    return (
        <div>
            <div className='bg-zinc-200'>
                <main >
                    <Header />
                    <Outlet />
                    <Footer />
                </main>

                <div
                    className={`fixed top-0 left-0 h-full w-56 bg-white shadow-lg transform transition-transform duration-500
                ${statusTabCart ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Layout