import '../css/Menubar.css';
import { BrowserRouter as Router,  Link } from 'react-router-dom'


const Menubar = () => {
    return (
            <div>
                <nav className="navbar navbar-expand">
                    <div><a href="siva.com" className="navbar-brand">Logo</a></div>

                    <div className="navbar-nav">

                    <li className="nav-item">
                            <Link to={"/"} className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add Profile
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/get"} className="nav-link">
                                Fetch Profile
                            </Link>
                        </li>
                    </div>
                    <div className="navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to={"/edit"} className="nav-link">
                                Edit Profile
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
    )
}
export default Menubar;