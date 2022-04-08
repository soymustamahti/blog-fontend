import axios from 'axios';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {server} from '../../config/api-url';
import Image from 'next/image'

const Header = () => {
    const [profileNotif, setProfileNotif] = useState(true);

    const checkProfile = async () => {
        if (localStorage.getItem('accessToken')) {
            const user: any = localStorage.getItem('userLoged');
            const email = JSON.parse(user).user.email;
            try {
                const response = await axios.post(
                    `${server}/user/check-profile`,
                    {
                        email,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        },
                    }
                );
                if (response.status === 200) setProfileNotif(response.data.response);
            } catch (err: any) {
                if (err.response.status === 404) {
                    if (err.response.data.message === 'No profile')
                        setProfileNotif(false);
                }
            }
        }
    };

    useEffect(() => {
        checkProfile();
    }, []);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>

                            </a>

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center">
                            <a className="text-reset me-3" href="#">
                                <i className="fas fa-shopping-cart"></i>
                            </a>

                            <div className="dropdown">
                                <a
                                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-bell"></i>
                                    {!profileNotif ? (
                                        <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                                    ) : null}
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    {!profileNotif ? (
                                        <li>
                                            <Link href="/profile">
                                                <a className="dropdown-item flex justify-between">
                                                    Profile
                                                    <i className="fa-solid fa-circle-exclamation"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    ) : null}
                                    <li>
                                        <Link href="#">
                                            <a className="dropdown-item">Nothing for now</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <a
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    href="#"
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Image
                                        src="/png-clipart-computer-icons-user-s-included-miscellaneous-user-profile.png"
                                        alt="Logo profile" width={42} height={25}
                                        loading="lazy"
                                        className="rounded-circle icon"
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            My profile
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
