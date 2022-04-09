import React from 'react';
import Layout from '../../components/Layout';
import Thanks from '../../components/messages/Thanks';
import Title from '../../components/Title';

export default function thanks_creation() {
    return (
        <>
            <Layout>
                <Title title={'Apply'}/>

                <Thanks
                    msgOne={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sequi'
                    }
                    msgTwo={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sequi'
                    }
                    msgThree={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, sequi'
                    }
                />
            </Layout>
        </>
    );
}
