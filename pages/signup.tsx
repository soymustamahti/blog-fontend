import axios from 'axios';
import Link from 'next/link';
import React, {useState} from 'react';
import Title from '../components/Title';
import {server} from '../config/urls';
import {useRouter} from 'next/router';
import Alert from '../components/Errors/Alert';

const Signup = () => {
    const router = useRouter();
    const [signup, setSignup] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState([]);

    const signupFunction = async () => {
        window.scrollTo(0, 0);
        try {
            const response = await axios.post(`${server}/auth/signup`, signup);
            if (response) if (response.status === 200) router.push('/login');
        } catch (err: any) {
            if (err.response)
                if (err.response.status) {
                    if (err.response.status === 403) {
                        const errors: any = [err.response.data.message];
                        setError(errors);
                    }
                    if (err.response.status === 400) {
                        const errors = err.response.data.message.map((e: any) => e);
                        setError(errors);
                    }
                }
        }
    };

    return (
        <>
            {/* <Layout> */}
            <Title title={'Sign Up'}/>

            <div className="w-80 flex flex-col gap-3 w-8/12 mr-auto ml-auto mt-12 mb-12">
                {error.length
                    ? error.map((e: string, i: number) => <Alert key={i} text={e}/>)
                    : null}
                <label htmlFor={'email'} className="font-bold">
                    Email
                </label>
                <input
                    type={'email'}
                    id={'email'}
                    className="border-2 border-slate-200 rounded-lg h-12"
                    onChange={e =>
                        setSignup({
                            ...signup,
                            email: e.target.value,
                        })
                    }
                />
                <label htmlFor="password" className="font-bold">
                    Password
                </label>
                <input
                    type={'password'}
                    id={'password'}
                    className="border-2 border-slate-200 rounded-lg h-12"
                    onChange={e =>
                        setSignup({
                            ...signup,
                            password: e.target.value,
                        })
                    }
                />
                <label htmlFor="confirm_password" className="font-bold">
                    Confirm password
                </label>
                <input
                    type={'password'}
                    id={'confirm_password'}
                    className="border-2 border-slate-200 rounded-lg h-12"
                />
                <div className="mr-auto ml-auto pt-10">
                    <button
                        onClick={signupFunction}
                        className="bg-black h-14 mb-6 text-white w-52 rounded-md align-middle"
                    >
                        Done
                    </button>
                </div>
                <div className="mr-auto ml-auto flex flex-col ">
                    <p className="self-center">You already have an account yet?</p>
                    <Link href={'/login'}>
                        <a className="underline self-center p-2">Sign in</a>
                    </Link>
                </div>
            </div>
            {/* </Layout> */}
        </>
    );
};

export default Signup;
