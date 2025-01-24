
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Posts.css';
import Card from '../../common/Card/Card';
import lab from '../../../assets/productivity_lab.png';
import yout_academy from  '../../../assets/youtuber_academy.png';
import table from  '../../../assets/table.avif';

const Posts = () => {
    const posts = [
        { id: 1, title: 'First Post',  },
        { id: 2, title: 'Second Post' },
        { id: 3, title: 'Third Post' },
        { id: 4, title: 'Fourth Post' },
        { id: 5, title: 'Fifth Post' },
        { id: 6, title: 'Sixth Post' },
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
                <Card image={lab} title={'Our laboratory'} ></Card>
                <Card image={yout_academy} title={'Youtube academy'}></Card>
                <Card image={table} title={'Just table'}></Card>
            </section>
        </div>
    );
};

export default Posts;
