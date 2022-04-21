import {useState} from 'react'
import leftArrow from '../imgs/left-arrow.png'
import close from '../imgs/close.png'

export default function Sliders(props){

    //save the index of the current image
    const [current, setCurrent] = useState(props.index)
    const count = props.Images.length

    //get the index of the next image when click the right arrow
    function nextImage(){
       setCurrent(current === count-1 ? 0 : current+1);
    }

    //get the index of the previous image when click the left arrow
    function previousImage(){
        setCurrent(current === 0 ? count-1 : current-1);
    }

    return(
        <div className="slider">
            <img className='closeIcon' src={close} onClick={props.close}/>
            <img className='rightArrow' src={leftArrow} onClick={nextImage}/>
            {
                //search for the required image to display it in the slider
                props.Images.map((img,index)=>{
                    if(current === index)
                        return(
                            <div>
                                <p className='imageName'>{img.name}</p>
                                <img className='SlideImage' src={img.url}/>
                                <p>{`${index+1} / ${count}`}</p>
                            </div>
                        )
                    else 
                    return null;
                })
            }
            <img className='leftArrow' src={leftArrow} onClick={previousImage}/>
        </div>
    )
}