import React from 'react';
import Article from '../../components/article/Article';
import { blog01 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="traction__blog section__padding" id="blog">
        <div className="traction__blog-heading">
            <h4>Blog</h4>
            <h2>Novidades no Blog</h2>
        </div>
        <div className="traction__blog-container">
            <div className="traction__blog-container_groupB">
                <Article imgUrl={blog01} date="03 dez 2021" text="Tractian Conheça os principais motivos que atrasam a ordem de serviço" />
                <Article imgUrl={blog01} date="03 dez 2021" text="Tractian Conheça os principais motivos que atrasam a ordem de serviço" />
                <Article imgUrl={blog01} date="03 dez 2021" text="Tractian Conheça os principais motivos que atrasam a ordem de serviço" />
            </div>
        </div>
    </div>
);

export default Blog;