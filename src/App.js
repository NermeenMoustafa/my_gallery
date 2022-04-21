import react, {useState} from "react"
import Image from "./Components/Image"
import Slider from "./Components/Slider"

export default function App(){

    //save the images from backend
    const [images, setImages] = useState([])
    //close/open the carousel modal
    const [close, setClose] = useState(false)
    //save the index of the clicked image 
    const [slide, setSlide] = useState(5)

    //import images from backend and save them in "images"
    react.useEffect(() =>{
        fetch("https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy")
        .then(res => res.json())
        .then(data => setImages(data))
    }, [])

    //this function is called when image is clicked.
    //it gets the index of the image as a parameter then...
    //open the carousel model by changing the value with "setClose(true)"
    //pass the index of the clicked image to the slider
    function ShowImage(ind){
        setClose(true)
        setSlide(ind)      
    }

    //map the images and it's info to the Image component
    const Images = images.map(
        (img,index) =>{
            return(
                <Image key={img.uuid}
                        src={img.url}
                        id={img.uuid}
                        visible={false}
                        showImage = {()=> ShowImage(index)}
                />
            )           
        }
    )

    return(
        <div className="mainBody">
            <div className="container">
                {Images}
            </div>
            {
                //this div will appear only if the close have true value to show the slider
                close && <div className="sliderContainer">
                <Slider Images={images} index={slide} close={()=>setClose(false)}/>
                </div>
            }
        </div>
    )
}
