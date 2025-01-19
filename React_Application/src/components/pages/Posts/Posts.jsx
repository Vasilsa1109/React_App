// src/pages/Posts.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Posts.css';
import Card from '../../common/Card/Card';
const Posts = () => {
    const posts = [
        { id: 1, title: 'First Post' },
        { id: 2, title: 'Second Post' },
    ];

    return (
        <div className='main'>
            <h1>Posts</h1>
             <ul>
                {posts.map(post => (
                    <div key={post.id}>
                        <NavLink to={`/posts/${post.id}`}>Post number {`${post.id}`}</NavLink>
                    </div>
                ))}
            </ul>
            <section className="articles">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </section>
        </div>
    );
};

export default Posts;
