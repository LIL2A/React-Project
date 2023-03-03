import './footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="http://facebook.com" target="_blank" rel="noreferrer">
                        <img src="./img/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com" target="_blank" rel="noreferrer">
                        <img src="./img/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com" target="_blank" rel="noreferrer">
                        <img src="./img/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        
        <section>
            <p>
                Desenvolvido por Marília Branco.
            </p>
        </section>
    </footer>
    )
}

export default Footer;

