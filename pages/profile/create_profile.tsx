import axios from 'axios';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import Alert from '../../components/Errors/Alert';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import {server} from '../../config/urls';

const Profile = () => {
    const router = useRouter();

    const [error, setError] = useState(false);

    const [profile, setProfile] = useState({
        userId: 0,
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        phoneNumber: '',
        age: 0,
        dateBirth: '',
        contry: '',
        latitude: 0,
        longitude: 0,
    });
    const [errorReq, setErrorReq] = useState([]);

    const handleSubmit = async () => {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        }

        getLocation();

        async function showPosition(position: any) {
            const user: any = localStorage.getItem('userLoged');

            try {
                setProfile(
                    ((profile.email = JSON.parse(user).user.email),
                        (profile.latitude = position.coords.latitude),
                        (profile.longitude = position.coords.longitude),
                        (profile.userId = JSON.parse(user).user.sub))
                );
                const response = await axios.post(`${server}/user/profile`, profile, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                if (response.status === 200) router.push('thanks');
            } catch (err: any) {
                if (err.response)
                    if (err.response.status) {
                        if (err.response.status === 403) {
                            const errors: any = [err.response.data.message];
                            setErrorReq(errors);
                        }
                        if (err.response.status === 400) {
                            const errors = err.response.data.message.map((e: any) => e);
                            setErrorReq(errors);
                        }
                    }
            }
        }
    };

    return (
        <>
            <Layout
                title={'Profile'}
                description={'Here is where you completed your profile'}
            >
                {errorReq.length
                    ? errorReq.map((e: string, i: number) => <Alert key={i} text={e}/>)
                    : null}
                <Title title={'Profile'}/>
                <div className="w-80 flex flex-col gap-3 w-8/12 mr-auto ml-auto mt-12 mb-12">
                    <h3 className="text-3xl mb-10">Complete yout profile</h3>
                    {/* {error ? <AlertError/> : null} */}
                    <label htmlFor={'firstname'} className="font-bold">
                        Your firstname <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'text'}
                        id={'firstname'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        placeholder={'Edy'}
                        onChange={e =>
                            setProfile({
                                ...profile,
                                firstName: e.target.value,
                            })
                        }
                    />
                    <label htmlFor="lastname" className="font-bold">
                        Your lastname <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'text'}
                        id={'lastname'}
                        placeholder={'Murphy'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        onChange={e =>
                            setProfile({
                                ...profile,
                                lastName: e.target.value,
                            })
                        }
                    />
                    <label htmlFor={'username'} className="font-bold">
                        Your username <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'username'}
                        id={'username'}
                        placeholder={'im_edy'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        onChange={e =>
                            setProfile({
                                ...profile,
                                username: e.target.value,
                            })
                        }
                    />
                    <label htmlFor={'tel'} className="font-bold">
                        Your phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'tel'}
                        id={'tel'}
                        placeholder={'+33 645 23 10 56'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        onChange={e =>
                            setProfile({
                                ...profile,
                                phoneNumber: e.target.value,
                            })
                        }
                    />
                    <label htmlFor={'age'} className="font-bold">
                        Your age <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'text'}
                        id={'age'}
                        placeholder={'26'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        onChange={e =>
                            setProfile({
                                ...profile,
                                age: +e.target.value,
                            })
                        }
                    />
                    <label htmlFor={'birthday'} className="font-bold">
                        Your date of birth <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'text'}
                        id={'birthday'}
                        placeholder={'15/04/1967'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        onChange={e =>
                            setProfile({
                                ...profile,
                                dateBirth: e.target.value,
                            })
                        }
                    />
                    <label htmlFor={'contry'} className="font-bold">
                        Your contry <span className="text-red-500">*</span>
                    </label>
                    <input
                        type={'url'}
                        id={'contry'}
                        placeholder={'France'}
                        className="border-2 border-slate-200 rounded-lg h-12"
                        onChange={e =>
                            setProfile({
                                ...profile,
                                contry: e.target.value,
                            })
                        }
                    />
                    <div className="mr-auto ml-auto">
                        <button
                            onClick={handleSubmit}
                            className="bg-black h-14 mb-6 text-white w-52 rounded-md align-middle"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Profile;
