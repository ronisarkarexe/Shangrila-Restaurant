import React from 'react';
import './Blogs.css';

import BlogDetail from '../BlogDetail/BlogDetail';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        Blogs: state.blogData
    }
}
const Blogs = (props) => {
    console.log('from blog',props);
    return (
        <section className="blog pb-5">
            <div className="container">
                <div>
                    <h1 className="titleText">Blogs</h1>
                    <p className="p-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quibusdam accusamus iure nam praesentium perspiciatis.</p>
                </div>
                <div className="row mt-5">                   
                        {
                            props.Blogs.map(blog=> <BlogDetail blog={blog} key={blog.title}></BlogDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default connect(mapStateToProps) (Blogs);