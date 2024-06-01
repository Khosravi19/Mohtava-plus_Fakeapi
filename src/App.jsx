import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import AddArticle from './Pages/AddArticle/AddArticle'
import Article from './Pages/Article/Article'
import EditArticle from './Pages/EditArticle/EditArticle'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />} />
        <Route path='/AddArticle' element={<AddArticle />} />
        <Route path='/Article/:id' element={<Article />} />
        <Route path='/EditArticle/:id' element={<EditArticle />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
