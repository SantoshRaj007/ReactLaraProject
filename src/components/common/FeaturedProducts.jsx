import React from 'react'
import FeatuProImg from '../../assets/images/eleven.jpg'

const FeaturedProducts = () => {
    return (
        <>
            <section className='section-2 py-5'>
                <div className='container'>
                    <h2>Featured Products</h2>
                    <div className='row mt-4'>
                        <div className='col-md-3'>
                            <div className='product card border-0'>
                                <div className='card-img'>
                                    <img src={FeatuProImg} className='w-100' alt='pro-img' />
                                </div>
                                <div className='card-body pt-3'>
                                    <a href=''>Red Check Shirt for Men</a>
                                    <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='product card border-0'>
                                <div className='card-img'>
                                    <img src={FeatuProImg} className='w-100' alt='pro-img' />
                                </div>
                                <div className='card-body pt-3'>
                                    <a href=''>Red Check Shirt for Men</a>
                                    <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='product card border-0'>
                                <div className='card-img'>
                                    <img src={FeatuProImg} className='w-100' alt='pro-img' />
                                </div>
                                <div className='card-body pt-3'>
                                    <a href=''>Red Check Shirt for Men</a>
                                    <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='product card border-0'>
                                <div className='card-img'>
                                    <img src={FeatuProImg} className='w-100' alt='pro-img' />
                                </div>
                                <div className='card-body pt-3'>
                                    <a href=''>Red Check Shirt for Men</a>
                                    <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts