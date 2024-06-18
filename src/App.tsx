import './App.css'
// import BookEdit from './components/Book'
import Counter from './components/Counter'
import LibraryAdd from './components/Library'
import Sandwich from './components/Sandwich'
import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={ <Counter/>} />
        <Route path="/sandwich" element={<Sandwich />}/>
        <Route path="/library" element= {<LibraryAdd/>} />
      </Route>
    </Routes>
  );
}

export default App


  // <BrowserRouter>
  //     <Routes>
  //       <Route path='/' element={ <Layout/>}>
  //         <Route index element={<TaskList />} />
  //         <Route path="/users" element={<UserList />} />
  //         <Route path="/fotos" element={<FotoList />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>