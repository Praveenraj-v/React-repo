import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Menubar from './components/menubar/Menubar'; 
import Helloworld from './components/task1/Helloworld';
import Congratscard from './components/task2/Congratscard';
import Superoverleague from './components/task3/Superoverleague';
import Socialbutton from './components/task4/Socialbutton';
import Notifications from './components/task5/Notifications';
import LoginDesign from './components/task6/LoginDesign';
import TechnologyCard from './components/task7/TechnologyCard';
import HooksAssignment from './components/hooks1/HooksAssignment';
import { FruitsCounter } from './components/fruitscounter/FruitsCounter';
import { FeedBackApp } from './components/feedbackapp/FeedBackApp';
import { Response } from './components/feedbackapp/Response';
import { JsonAssignment } from './components/jsonAssignment/JsonAssignment';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={[<Menubar/>,<Helloworld/>]}/>
        <Route path='/Congratscard' element={[<Menubar/>,<Congratscard/>]}/>
        <Route path='/Superoverleague' element={[<Menubar/>,<Superoverleague/>]}/>
        <Route path='/Socialbutton' element={[<Menubar/>,<Socialbutton/>]}/>
        <Route path='/Notifications' element={[<Menubar/>,<Notifications/>]}/>
        <Route path='/LoginDesign' element={[<Menubar/>,<LoginDesign/>]}/>
        <Route path='/TechnologyCard' element={[<Menubar/>,<TechnologyCard/>]}/>
        <Route path='/HooksAssignment' element={[<Menubar/>,<HooksAssignment/>]}/>
        <Route path='/FruitsCounter' element={[<Menubar/>,<FruitsCounter/>]}/>
        <Route path='/Response' element={[<Menubar/>,<Response/>]}/>
        <Route path='/FeedBackApp' element={[<Menubar/>,<FeedBackApp/>]}/>
        <Route path='/JsonAssignment' element={[<Menubar/>,<JsonAssignment/>]}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
