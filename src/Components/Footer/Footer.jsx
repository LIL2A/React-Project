import './footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="./img/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="./img/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
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

