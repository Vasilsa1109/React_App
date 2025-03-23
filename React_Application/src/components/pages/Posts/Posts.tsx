import {FC} from 'react';  
import { NavLink } from 'react-router-dom';  
import './Posts.css';  
import Card from '../../common/Card/Card';  
import lab from '../../../assets/productivity_lab.png';  
import yout_academy from  '../../../assets/youtuber_academy.png';  
import table from  '../../../assets/table.avif';
import mindfulness from '../../../assets/mindfulness.avif'  
import img3 from  '../../../assets/img3.avif';
import img2 from  '../../../assets/img2.avif';
const Posts:FC = () => {  
    const posts = [  
        { id: 12222, title: 'First Post', description: 'Description of the first post.', image: lab },  
        { id: 2567474, title: 'Second Post', description: 'Description of the second post.', image: yout_academy },  
        { id: 37467, title: 'Third Post', description: 'Description of the third post.', image: table },  
        { id: 4764, title: 'Fourth Post', description: 'Description of the fourth post.', image: mindfulness },  
        { id: 5676, title: 'Fifth Post', description: 'Description of the fifth post.', image: img3 },  
        { id: 6676, title: 'Sixth Post', description: 'Description of the sixth post.', image: img2 },  
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