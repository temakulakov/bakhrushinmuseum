// Layout.tsx
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <>
        <header><p>Шапка сайта</p></header>
        <main>
            <Outlet /> {/* Здесь будут отображаться страницы в зависимости от маршрута */}
        </main>
        <footer>Подвал сайта</footer>
    </>
);

export default Layout;
