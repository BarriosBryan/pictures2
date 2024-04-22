import { useState } from 'react'
import SearchBar from './componentes/SearchBar'
import ImageList from './componentes/ImageList'
import SearchImage from './Api'
import './App.css'
import './App.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit =async(term)=>{
    console.log('uste esta buscando con:',term)
  }

  return (
    <div>
      <h1>APP</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images ={images}/>
      </div>
  ) 
}

export default App
