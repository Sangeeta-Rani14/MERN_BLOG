
import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import LoginPage from './Component/LoginPage';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './Component/RegistrationForm';
import Layout from './Component/Layout';
import IndexPage from './Pages/IndexPage';
import { UserContextProvider } from './Component/UserContext';
import CreatePost from './Component/CreatePost';
import PostPage from './Pages/PostPage';
import EditPost from './Component/EditPost';
function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Hero/>} />
      <Route path='/post' element={<IndexPage/>} />
      <Route path='/login' element = {<LoginPage/>} />
      <Route path='/registration' element={<RegistrationForm />} />
      <Route path='/home' element={<Hero />} />
      <Route path='/create' element={ <CreatePost/>} />
      <Route path='/post/:id' element={<PostPage/>} />
      <Route path='/edit/:id' element={<EditPost/>} />
        </Route>

      </Routes>
    </UserContextProvider>
    
  ); 
}

export default App;
