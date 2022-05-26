import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import imgr from './photo.jpg';

function App() {
  const person={
    fullName: "Raounak lazrag",
    bio:"hhhhh ",
    profession: "kkkk",
        }
  return (
    <div className="App">
     <Profile person={person}>
       <img src={imgr}   alt="" />
       </Profile>
    </div>
  );
}

export default App;
