import React from 'react'
import LatestProducts from './common/LatestProducts';
import Banner from './common/Banner';
import FeaturedProducts from './common/FeaturedProducts';
import Layout from './common/Layout';

const Home = () => {
    return (
        <>
            <Layout>
                <Banner />
                <LatestProducts />
                <FeaturedProducts />
            </Layout>
        </>
    )
}

export default Home
