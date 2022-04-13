import { Outlet } from 'react-router-dom'
import About from '../../components/About me/About'
import NavBar from '../../components/Navigation/NavBar'
import style from "./homepage.module.css"
const Homepage = () => {
    // <a href="/somefile.txt" download>
    //   Click to download
    // </a>;
    return (
      <div className={style.container}>
        <NavBar />
        <h1>Welcome to Click to know!</h1>
            <Outlet />
            <About />
      </div>
    );
}

export default Homepage
