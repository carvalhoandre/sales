
const Footer = () => {
    return (
        <>
            <footer>
                <div className="main">
                    <div className="content footer-links">
                        <div className="footer-company">
                            <h4>Company</h4>
                            <h6>About</h6>
                            <h6>Contact</h6>
                        </div>
                        <div className="footer-rental">
                            <h4>Rental</h4>
                            <h6>Self-Driver</h6>
                            <h6>Chauffer-Driver</h6>
                            <h6>Help</h6>
                        </div>
                        <div className="footer-social">
                            <h4>Stay connected</h4>
                            <div className="solcial-icons">
                                <a href="https://www.github.com/carvalhoandre" target="_blank" rel="noreferrer">
                                    <i className="uil uil-github-alt icon_footer" />
                                </a>
                                <a href="https://www.linkedin.com/in/carvalhoandree" target="_blank" rel="noreferrer">
                                    <i className="uil uil-linkedin-alt icon_footer" />
                                </a>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h4>Contact US</h4>
                            <h6>andre_carvalho0@live.com</h6>
                            <h6>São Paulo Brazil</h6>
                        </div>
                    </div>
                </div>
                <div className="last">© AC Developer 2021</div>
            </footer>
        </>
    )
}

export default Footer;