import {useState} from 'react';
import zoom from '../imgs/zoom.png'

export default function Image(props){

    const imageStyles={
        //set the background-image to the received image from props
        backgroundImage : `URL(${props.src})`
    }

    //show/hide zoom icon based on hovering
    const [icon, setIcon] = useState(props.visible)

    return(
        <div 
            style={imageStyles}    
            className="image" 
            //show zoom icon when hover
            onMouseEnter={()=>setIcon(true)}
            //hide zoom icon 
            onMouseLeave={()=>setIcon(false)} >
           {
               //if icon value is true then display this div and the icon
               icon && 
               <div className='zoomContainer' onClick={props.showImage}>
                   <div className = "zoomIconDiv"></div>
                   <img src={zoom} className="zoomIcon"></img>               
                </div>
           }
        </div>
    )
}