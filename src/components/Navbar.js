import {Link} from 'react-router-dom';

function Navbar() {
    function openNav() {
        document.getElementsByClassName("sidenav")[0].style.display = "block";
        document.getElementsByClassName("sidenav")[0].style.width = "220px";
        document.getElementById("home").style.marginLeft = "220px";
    }
      function closeNav() {
        document.getElementsByClassName("sidenav")[0].style.width = "0px";
        document.getElementById("home").style.marginLeft = "0px";
      }
    return(
        <nav width="100%">
             <button className="bt1" onClick={openNav} style={{cursor:"pointer",marginLeft:"1%",marginTop:"1%"}} >
                <i className="fa fa-bars yas" aria-hidden="true"></i>
            </button>
                <Link exact to="/"><span style={{alignContent:"center",marginLeft:"15%",}}>CodeEdit</span></Link>
                <ul className="nav navbar-nav navbar-right" style={{flexDirection:"row",marginTop:"1%",marginRight:"2%"}}>
                   <li><Link to="/about"><span>About Us</span></Link></li>
                   <li><a href="mailto:webmaster@example.com"><span>Contact Us</span></a></li>
                </ul>
            <div id="mySidenav" className="sidenav" style={{float:'left'}}>
                <Link to="/coding" onClick={closeNav}>Start Coding</Link>
                <Link to="/" onClick={closeNav}>Words Count</Link>
                <Link to="/notes" onClick={closeNav}>Notes</Link>
            </div>
        </nav>
    )
}
export default Navbar;