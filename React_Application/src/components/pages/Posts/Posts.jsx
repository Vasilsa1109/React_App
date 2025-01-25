import React from 'react';  
import { NavLink } from 'react-router-dom';  
import './Posts.css';  
import Card from '../../common/Card/Card';  
import lab from '../../../assets/productivity_lab.png';  
import yout_academy from  '../../../assets/youtuber_academy.png';  
import table from  '../../../assets/table.avif';  
  
const Posts = () => {  
    const posts = [  
        { id: 1, title: 'First Post', description: 'Description of the first post.', image: lab },  
        { id: 2, title: 'Second Post', description: 'Description of the second post.', image: yout_academy },  
        { id: 3, title: 'Third Post', description: 'Description of the third post.', image: table },  
        { id: 4, title: 'Fourth Post', description: 'Description of the fourth post.', image: lab },  
        { id: 5, title: 'Fifth Post', description: 'Description of the fifth post.', image: yout_academy },  
        { id: 6, title: 'Sixth Post', description: 'Description of the sixth post.', image: table },  
    ];  
  
    return (  
        <div className='main'>  
            <h1>Posts</h1>  
             <ul className='posts'>  
                {posts.map(post => (  
                    <div key={post.id}>  
                        <NavLink to={`/posts/${post.id}`}>Post number {`${post.id}`}</NavLink>  
                        <Card id={post.id} title={post.title} description={post.description} image={post.image}></Card>
                    </div>  
                ))}  
            </ul>  
        </div>  
    );  
};  
  
export default Posts; 