
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    
    return (
        <div className='main'>
            <h1>Post Detail</h1>
            <p>It's a post with ID = {id}</p>
        </div>
    );
};

export default PostDetail;
