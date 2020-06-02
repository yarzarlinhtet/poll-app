import PublicPage from '../components/public/public-page';
import AdminPage from '../components/admin/admin-page';
import UserPage from '../components/user/user-page';
import Public from './public';
import Admin from './admin';
import User from './user';
const route = [
    {
        path: '/',
        component: PublicPage,
        children: Public,
    },
    {
        path: '/admin',
        component: AdminPage,
        children: Admin,
    },
    {
        path: '/user',
        component: UserPage,
        children: User,
    }
];

export default route;