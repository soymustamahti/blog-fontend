import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { server } from '../config/api-url';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout title="Home" description={'Home description todo'}>
      <p>Profile</p>
    </Layout>
  );
};

export default Home;
