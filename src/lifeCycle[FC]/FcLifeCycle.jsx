import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"

export default function FcLifeCycle(props) {
    const  {id}= useParams();
   const [name , setName] =useSearchParams ({name:"Defaultname"})
    console.log(id);
   
    const [count, setCount] = useState(0)
    const [test,setTest] = useState(0)
    
    useEffect(() => {
        console.log('I m rendering 1')
        console.log(count)
        return ()=> { console.log("I m unmouting")}
    }, [])

    useEffect(() => {
        console.log('I m rendering 2')
        console.log(count)
    }, [count])
    
    useEffect(() => {
        console.log('I m rendering 3')
        console.log(count)
    })

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }
    

    console.log(count)
    console.log(props)
    return (
        <>
             <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {count}
            <p>le parametre envoye: {id}</p>
        </>
    )
}