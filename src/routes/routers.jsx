import { lazy } from 'react';
const MainLayout = lazy(() => import('../components/Layout/MainLayout'));
const ProfileLayout = lazy(() => import('../components/Layout/ProfileLayout'));

import { path } from '../config/path';
import Register from '../pages/dang-ky/[slug]';

const Home = lazy(() => import('../pages'));
const Page404 = lazy(() => import('../pages/404'));
const CourseDetail = lazy(() => import('../pages/[slug]'));
const Profile = lazy(() => import('../pages/ca-nhan'));
const Coin = lazy(() => import('../pages/ca-nhan/coin'));
const Project = lazy(() => import('../pages/ca-nhan/du-an'));
const MyCourse = lazy(() => import('../pages/ca-nhan/khoa-hoc'));
const Payment = lazy(() => import('../pages/ca-nhan/lich-su-thanh-toan'));
const Contact = lazy(() => import('../pages/hop-tac'));
// eslint-disable-next-line react-refresh/only-export-components
const Team = lazy(() => import('../pages/thanh-vien'));

const routers = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: path.Contact,
                element: <Contact />,
            },
            {
                path: path.Team,
                element: <Team />,
            },
            {
                path: path.CourseDetail,
                element: <CourseDetail />,
            },
            {
                path: path.RegisterCourse,
                element: <Register />,
            },
            {
                path: path.ProfileLayout.Profile,
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <Profile />,
                    },
                    {
                        path: path.ProfileLayout.Project,
                        element: <Project />,
                    },
                    {
                        path: path.ProfileLayout.MyCourse,
                        element: <MyCourse />,
                    },
                    {
                        path: path.ProfileLayout.Coin,
                        element: <Coin />,
                    },
                    {
                        path: path.ProfileLayout.Payment,
                        element: <Payment />,
                    },
                ],
            },
            {
                path: '*',
                element: <Page404 />,
            },
        ],
    },
];

export default routers;
