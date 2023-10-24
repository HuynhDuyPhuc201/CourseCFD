/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import LoginModal from './../../LoginModal';

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <LoginModal />
        </>
    );
}

export default MainLayout;
