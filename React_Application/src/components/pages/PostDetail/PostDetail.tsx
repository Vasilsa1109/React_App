import { useParams } from 'react-router-dom';
import '../Posts/Posts.css';
import Component_sum from '../../Task_1/Component_sum';
import MainList from '../../MainList/MainList';
import { FC } from 'react';
const PostDetail:FC = () => {
    const { id } = useParams();
    
    return (
        <div className='main'>
            <h1>Post Detail</h1>
            <p>It's a post with ID = {id}</p>
             <MainList />
             <Component_sum />
        </div>
    );
};

export default PostDetail;
