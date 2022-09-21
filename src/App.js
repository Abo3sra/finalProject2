
import './App.css';
import Nav from './component/Nav';
import Courss from './component/Courss';
import Foteer from './component/Foteer';
import M1 from './images/m1.png'
import M2 from './images/m2.png'
import M3 from './images/m3.png'
import M4 from './images/m4.png'
import M5 from './images/m5.png'
import M6 from './images/m6.png'


function App() {
  return (
    <div >
     <Nav/>


     <di className='card '>
     <Courss img={M1}/>
     <Courss img={M2}/>
     <Courss img={M3}/>
     <Courss img={M4}/>
     <Courss img={M5}/>
     <Courss img={M6}/>
    
     </di>

   
    
     <Foteer/>
 

    </div>
  );
}

export default App;
