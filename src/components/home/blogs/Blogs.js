import React from 'react';
import './Blogs.css';
import newsOne from '../../../images/news-1.jpg';
import newsTwo from '../../../images/news-2.jpg';
import newsThree from '../../../images/news-3.jpg';
import BlogDetail from '../BlogDetail/BlogDetail';


const blogData = [
    {
        img: newsOne,
        title : 'Ingredients For Pasta',
        date : '10 June 2016 by Peter Parker',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        
        
    },
    {
        img: newsTwo,
        title : 'The Best Tips For Tasty Food',
        date : '10 June 2016 by Peter Parker',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        
        
    },
    {
        img: newsThree,
        title : 'Your Weeknight Dinner Plan',
        date : '10 June 2016 by Peter Parker',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        
        
    }
    
]

const Blogs = () => {
    return (
        <section className="blog pb-5">
            <div className="container">
                <div>
                    <h1 className="titleText">Blogs</h1>
                    <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quibusdam accusamus iure nam praesentium perspiciatis.</p>
                </div>
                <div className="row mt-5">                   
                        {
                            blogData.map(blog=> <BlogDetail blog={blog} key={blog.title}></BlogDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Blogs;