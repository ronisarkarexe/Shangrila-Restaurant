import React from 'react';

const BlogDetail = (props) => {
    const {img,title,date,description} = props.blog;
    return (
        <div className="col-md-4 col-sm-4">
            <div className="card" >
                <img src={img} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4>{title}</h4>
                    <h6 className="text-muted">{date}</h6>
                    <p> { description} </p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;