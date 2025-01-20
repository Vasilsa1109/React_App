import { NavLink } from "react-router";

const styleCard = {
  display: 'flex', 
  alignItems: "center", 
  flexDirection: 'column',
   gap: '15px', 
   fontSize: '18px', 
   backgroundColor: '#dee0ff', 
   padding: '20px',
  borderRadius: '10px'
}

const Card = ({ title, description, img}) => {
    return  <article>
    <div className="article-wrapper">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="article-body">
        <h2>{title}</h2>
        <p>
         {description}
        </p>
        <NavLink  className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </NavLink>
      </div>
    </div>
  </article>
};

export default Card;


