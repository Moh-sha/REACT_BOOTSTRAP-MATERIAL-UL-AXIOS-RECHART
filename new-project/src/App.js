import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import News from './Components/News/News';  
import Topheadline from './Components/TopHeadLine/Topheadline';
import { Fragment } from 'react';

function App() {
  return (
   <div>

       <Header></Header>  
       <Topheadline></Topheadline>
       <News></News>

       <Fragment></Fragment>
       
      


  

      
        

   </div>
  );
}

export default App;
