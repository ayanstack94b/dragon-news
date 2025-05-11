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
            <main>
                <aside>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main'>

                    <Outlet></Outlet>

                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default Homelayout;