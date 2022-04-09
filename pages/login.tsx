import React, {useState} from 'react';
import axios from 'axios';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Alert from '../components/Errors/Alert';
import Title from '../components/Title';
import {server} from '../config/urls';

export default function Login() {
    //const {token, setToken}: any = useAuth('')
    const router = useRouter();
    const [error, setError] = useState([]);
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const loginFunction = async () => {
        window.scrollTo(0, 0);
        try {
            const response = await axios.post(`${server}/auth/signin`, login);
            if (response)
                if (response.status === 200) {
                    localStorage.setItem(
                        'accessToken',
                        response.data.response.accessToken
                    );
                    const user: any = await axios(`${server}/auth/me`, {
                        headers: {
                            Authorization: `Bearer ${response.data.response.accessToken}`,
                        },
                    });

                    localStorage.setItem('userLoged', JSON.stringify(user.data));
                    router.push('/');
                }
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
        // <Layout
        //   title={'Login'}
        //   description={
        //     'Here is where the user will login to have access to the application'
        //   }
        // >
        <>
            <Title title={'Login'}/>
            <div className="w-80 flex flex-col gap-3 w-8/12 mr-auto ml-auto mt-12 mb-12">
                {error.length
                    ? error.map((e: string, i: number) => <Alert key={i} text={e}/>)
                    : null}
                <label htmlFor={'email'} className="font-bold">
                    Email
                </label>
                <input
                    type={'text'}
                    id={'email'}
                    className="border-2 border-slate-200 rounded-lg h-12"
                    onChange={e =>
                        setLogin({
                            ...login,
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
                        setLogin({
                            ...login,
                            password: e.target.value,
                        })
                    }
                />
                <div className="mr-auto ml-auto pt-10">
                    <button
                        onClick={loginFunction}
                        className="bg-black h-14 mb-6 text-white w-52 rounded-md align-middle"
                    >
                        Done
                    </button>
                </div>
                <div className="mr-auto ml-auto flex flex-col ">
                    <p className="self-center">Dont have an account yet?</p>
                    <Link href={'/signup'}>
                        <a className="underline self-center p-2">Create an account</a>
                    </Link>
                </div>
            </div>
        </>
        // </Layout>
    );
}
