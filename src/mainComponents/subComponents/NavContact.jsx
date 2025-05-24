const NavContact = ({ icon, text }) => {
    return (
        <>
            <div className="nav__contact">
              {icon}
                <span className="nav__contact--text">{ text }</span>
            </div>
        </>
    )
}

export default NavContact;