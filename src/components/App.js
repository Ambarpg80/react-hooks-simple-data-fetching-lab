// create your App component here
import React, {useState, useEffect } from 'react';
import { data } from '../mocks/data';

function App(){
    const [imageRender, setImageRender] = useState([])


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImageRender(data))
        },[])
        if(!imageRender.message){ 
           return  <p>loading...</p> }
        else{
    return(
        <div>
            <h1> Welcome to DOG CEO</h1>
            <img src={imageRender.message } alt="A Random Dog"></img>  
        </div>
        
    )
        }
}
export default App