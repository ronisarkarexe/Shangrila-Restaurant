import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import AddGallery from '../AddGallery/AddGallery';
import AddTestimonial from '../AddTestimonial/AddTestimonial';

const MainAdminPage = () => {
    return (
        <div>
            <AddBlog></AddBlog>
            <AddGallery></AddGallery>
            <AddTestimonial></AddTestimonial>
        </div>
    );
};

export default MainAdminPage;