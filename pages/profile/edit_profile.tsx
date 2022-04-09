import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import axios from "axios";
import {server} from "../../config/urls";
import Alert from "../../components/Errors/Alert";
import Image from "next/image";

const Edit_profile = () => {
    const [errorReq, setErrorReq]: any = useState([]);

    const [profile, setProfile]: any = useState({})
    const getProfile = async () => {
        const user: any = localStorage.getItem('userLoged');
        const email = JSON.parse(user).user.email;
        try {
            const response = await axios.post(`${server}/user/getprofile`, {email}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            if (response.status === 200) setProfile(response.data.response)
        } catch (err: any) {
            if (err.response) {
                //todo
            }
        }
    }

    useEffect(() => {
        getProfile()
    }, []);
    return (
        <Layout title={'Profile'} description={"Here you can see your profile and you can edit it"}>
            {errorReq.length
                ? errorReq.map((e: string, i: number) => <Alert key={i} text={e}/>)
                : null}
            <>
                <div className="container bootstrap snippets bootdey">
                    <div className="row">
                        <div className="profile-nav col-md-3">
                            <div className="panel">
                                <div className="user-heading round">
                                    <a href="#">
                                        <Image
                                            src="/png-clipart-computer-icons-user-s-included-miscellaneous-user-profile.png"
                                            alt="Logo profile" width={400} height={350}
                                            loading="lazy"
                                            className="rounded-circle icon"
                                        /> </a>
                                    <h1>{profile.firstName + " " + profile.lastName}</h1>
                                    <p>{profile.email}</p>
                                </div>

                                <ul className="nav nav-pills nav-stacked flex-col">
                                    <li className="active"><a href="#"> <i className="fa fa-user"/> Profile</a></li>
                                    <li><a href="#"> <i className="fa fa-calendar"/> Recent Activity <span
                                        className="label label-warning pull-right r-activity">9</span></a></li>
                                    <li><a href="#"> <i className="fa fa-edit"/> Edit profile</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="profile-info col-md-9">
                            <div className="panel my-5">
                                <form>
                                    <textarea placeholder="Whats in your mind today?" rows={2}
                                              className="form-control input-lg p-text-area"/>
                                </form>
                                <footer className="panel-footer">
                                    <div className="flex justify-between items-center">
                                        <ul className="nav nav-pills w-1/5 flex justify-between ml-2">
                                            <li>
                                                <a href="#"><i className="fa fa-map-marker"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-camera"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className=" fa fa-film"/></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-microphone"/></a>
                                            </li>
                                        </ul>
                                        <button className="btn btn-warning pull-right">Post</button>
                                    </div>
                                </footer>
                            </div>
                            <div className="panel">
                                <div className="bio-graph-heading">
                                    Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum.
                                    Aliquam ac
                                    magna metus.
                                </div>
                                <div className="panel-body bio-graph-info">
                                    <h1>Bio Graph</h1>
                                    <div className="row">
                                        <div className="bio-row">
                                            <p><span>First Name </span>: {profile.firstName}</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Last Name </span>: {profile.lastName}</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Country </span>: {profile.contry}</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Birthday</span>: {profile.dateBirth}</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Username </span>: {profile.username}</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Email </span>: {profile.email}</p>
                                        </div>
                                        <div className="bio-row">
                                            <p><span>Phone </span>: {profile.phoneNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </Layout>
    )
}

export default Edit_profile