import './Navbar.css';
import piePic from '../../assets/pie.jpeg';
import Logout from './Logout/Logout';

const Navbar = () => {
  return(
    <div> 
      <nav>
        <img id="piePic" src={piePic} alt="pie"/>
        <h2>Pie Client</h2>
        <Logout clearLocalStorage={props.clearLocalStorage}/>
      </nav>
    </div>
  )
}

export default Navbar;