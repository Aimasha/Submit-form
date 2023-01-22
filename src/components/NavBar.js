

const NavBar = ({ title, page }) => {
    return (
        <div className="navbar">
            <header>
                <h5 className="header">АНКЕТА НА КОНСУЛЬТАЦИЮ </h5>
            </header>
            <nav>
                <h6 className={page === 0 ? "active" : "size"}>{title.info}</h6>
                <h6 className={page === 1 ? "active" : "size"}>{title.service}</h6>
                <h6 className={page === 2 ? "active" : "size"}>{title.submitInfo}</h6>
            </nav>
        </div>
    )
}

export default NavBar;