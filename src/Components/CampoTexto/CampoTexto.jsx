
import './campoTexto.css';

const CampoTexto = (props) => {

    //let valor = ''
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
                <div>
                    <label >{props.label}</label>
                    <input 
                        value={props.valor} 
                        onChange={aoDigitado} 
                        required={props.obrigatorio} 
                        placeholder={props.placeholder}
                    />
                </div>
        </div>
    )
}

export default CampoTexto;