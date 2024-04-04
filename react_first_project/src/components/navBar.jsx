import "./navBar.css";


function BrandLogo(){
   return <img src="./brandlogo.png" alt="" id="logo"/>
}

function List(){
    return (
        <div className="list">
            <a href="">MENU</a>
            <a href="">LOCATION</a>
            <a href="">ABOUT</a>
            <a href="">CONSTACT</a>
        </div>
    )
}

function Btn(){
    return (
        <button className="login_btn">Login</button>
    )
}

function Navbar(){
    return (
        <div className="navbar">
            <BrandLogo/>
            <List/>
            <Btn/>
        </div>
    )
}

export default Navbar;