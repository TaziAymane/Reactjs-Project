import { Link } from "react-router-dom";
import Card from "./Card";
import './Contentstyle.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function Content(props){
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px',
        width:'100%'
    }

  const slideImages = [
    {
      url: 'https://www.heinemann-shop.com/medias/10-2023-XMAS-Fragrance-HHT-Desktop-1280x800.jpg?context=bWFzdGVyfGltYWdlc3wzMjUyODV8aW1hZ2UvanBlZ3xhRGcyTDJobFlpODVPRGMwT1RZME9UTTROemd5THpFd0xUSXdNak10V0UxQlV5MUdjbUZuY21GdVkyVXRTRWhVTFVSbGMydDBiM0F0TVRJNE1IZzRNREF1YW5CbnxjNjA5ZTIxN2Q0Y2Q1Njg4MGVlMmY0MTMwMmZmOTliNDllZjg5N2IwZDc4YWQ0OWFlYTRjM2U5NDk1MmY1Njg2&v=1696931444100',
    },
    {
      url: 'https://www.envie2parfum.fr/img/site/thumbs/banh-2102_970x400.jpg',
     
    },
    {
      url: 'https://media.gqmagazine.fr/photos/63e12f2082e384fe4d7ac8ab/16:9/w_2560%2Cc_limit/montage_parfums1.jpeg',
     
    },
 
  ];
  
function Slideshow () {
    return (
      <div className="slide-container my-3">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
};


   return(
    <> 
    {Slideshow()}
    <h2 className="des">Our Parfums</h2>
    <div className="products">
        {
            props.parfums.map((parfum,i)=>{
                return <Card parfum={parfum} key={i} />
            })
        }
    </div>

        <footer className="footer" >
          <div className="content">
            <p className="justify-content-sm-center">&copy; 2024 TAZI SHOP . All rights reserved.</p>
            <p>Contactez nous <Link to={'/Contactez'}>ici</Link></p>
          </div>
        </footer>








    
    
    </>
   )
}


