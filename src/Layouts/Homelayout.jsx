import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/HomeLayout/LeftAside';
import RightAside from '../Component/HomeLayout/RightAside';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar>

                    </Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main col-span-6'>

                    <Outlet></Outlet>

                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default Homelayout;