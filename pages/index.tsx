import type {NextPage} from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
    return (
        <Layout title="Home" description={'Home description todo'}>
            <p>Profile</p>
        </Layout>
    );
};

export default Home;
