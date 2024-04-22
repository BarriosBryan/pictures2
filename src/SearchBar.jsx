import {useState} from "reacct"
import './SearchBar.css'

function SearchBar ({ onSubmit }){
    const [term, setTerm] = useState('')


    const handleFromSubmit  = (event)=> {
        event.preventDefault()
        console.log('necesito decirle al componente padre los datos')
        onSubmit(term)
    }


    const handleChange = (event)=> {
        console.log(event.target.value)
        setTerm(event.target.value)
    }
    
    const handleClick = ()=>{
        onSubmit(term)
    }

    return(
        <div className=".search-bar">
            <h1>Search Bar</h1>
            <from onSubmit={handleFromSubmit}>
                confirma tu busqueda: {term}
                <input onChange={handleChange} value={term}/>
                <button onClick={handleClick}>Click me</button>
            </from>
        </div>
    )
}
export default SearchBar