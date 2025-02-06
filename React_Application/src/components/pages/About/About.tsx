import lab from '../../../assets/productivity_lab.png'
import youtuber from '../../../assets/youtuber_academy.png'
import book from '../../../assets/book.webp'
import MiniCard from '../../common/MiniCard/MiniCard';
import hero from '../../../assets/img5.webp';
import { FC } from 'react';
const About:FC = () => {
    return (
        <div className="main">
            <div className="Ali" style={{display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f0de97', padding: '20px'}}>
            <img src={hero} alt="" style={{width: '300px', height: '300px'}} />
            <h1>About Page</h1>
            <h2>Hey, I’m Ali.</h2> 
            <h3>I’m a Doctor turned Entrepreneur, YouTuber, and the author
of the New York Times bestseller,
Feel-Good Productivity</h3>
</div>
<ul> 
    <h3>Quick Facts About Me</h3>
   
    <li>I studied medicine for 6 years at Cambridge University, graduating in 2018. </li>
    <li>I spent 2 years working as a Junior Doctor in the UK National Health Service.</li>
    <li>I’m 30 years old. Born in 1994 in Pakistan. I now live in Hong Kong</li>
    <li>My first videos were about medicine and studying. Now I make content about productivity, books, tech, and evidence-based strategies and tools to help us be more productive and build a life we love. </li>
    <li>I started my YouTube channel in 2017.</li>
</ul>
<div className="card-container" style={{display: 'flex', gap: '100px', flexDirection: 'column'}}>
<MiniCard title={'Feel Good Productivity'} img={book} description={
        <>
            My New York Times Bestselling book about how to <br />
             do more of what matters to you, <br />
            while enjoying the journey along the way.
        </>
    }></MiniCard>
<MiniCard title={'Productivity Lab'} img={lab} description={
        <>
           My community of ambitious entrepreneurs, creators and professionals. <br />
            We help you double your productivity <br />
             while having fun and making friends along the way.
        </>
    }></MiniCard>
    <MiniCard title={'YouTuber Academy'} img={youtuber} description={
        <>
          My courses and programmes about<br />
           how to grow a life-changing YouTube channel.
        </>
    }></MiniCard>
</div>
        </div>
        
    );
}

export default About;