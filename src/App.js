import './App.css';
import {fullname} from './component/profile/fullname';
import {adress} from './component/profile/adress';
import {profilephoto} from './component/profile/profilephoto';

function App() {
  return (
    <div className="App">
      <p> hey my name is <fullname/> and my adress is <adress/> and heres my photo <profilephoto /></p>
      
    </div>
  );
}

export default App;
