
import './banner.css'


interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({ enderecoImagem, textoAlternativo} :BannerProps) => {
    return(
        <img className="banner" src={enderecoImagem} alt={textoAlternativo}/>
       /*<img src="./img/HeaderHeader_total.png" alt="Banner principal da página" />*/
    )
}

export default Banner;