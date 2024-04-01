// Layout.tsx
import { Outlet } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

const Layout = () => (
    <>
        <Header/>
        <Slider/>
        <main>
            <Outlet /> {/* Здесь будут отображаться страницы в зависимости от маршрута */}
        </main>
        <Footer/>
    </>
);

export default Layout;
