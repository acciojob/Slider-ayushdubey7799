import React from "react";
import { useState,useEffect } from "react";

const reviews = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
  ];
  
const App = () => {
    const [index,setIndex] = useState(0);
    
    
        useEffect(() =>  {
            let id = setInterval(() => setIndex((index+1)%4),3000);
            return () => clearInterval(id);
        },[index])

      function next(){
        setIndex((index+1)%4);
      }

      function prev(){
        if(index === 0){
            setIndex(3);
        }
        else{
            setIndex(index-1);
        }
      }



    return (
        <React.Fragment>
            <header id="review-heading.">Reviews</header>
            <section id="review-container">
              <p id={"person-"+index}>{reviews[index].name}</p>
              <img id={"person-"+index+"-image"} src= {reviews[index].image}  />
              <button className="next" onClick={next}>Next</button>
              <button className="prev" onClick={prev}>Previous</button>
            </section>
        </React.Fragment>
    )
}


export default App;