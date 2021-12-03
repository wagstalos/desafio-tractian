import React from 'react';
import Article from '../../components/article/Article';
import { blog01 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">Novidades no Blog</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog01} date="03 dez 2021" text="Tractian Conheça os principais motivos que atrasam a ordem de serviço" />
                <Article imgUrl={blog01} date="03 dez 2021" text="Tractian Conheça os principais motivos que atrasam a ordem de serviço" />
                <Article imgUrl={blog01} date="03 dez 2021" text="Tractian Conheça os principais motivos que atrasam a ordem de serviço" />
            </div>
        </div>
    </div>
);

export default Blog;