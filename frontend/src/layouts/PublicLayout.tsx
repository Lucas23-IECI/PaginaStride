import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background-dark">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
