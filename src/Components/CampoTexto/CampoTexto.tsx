
import './campoTexto.css';


export interface CampoTextoProps{
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean

}

const CampoTexto = ({aoAlterado, label, valor, placeholder, obrigatorio = false}: CampoTextoProps) => {

    //let valor = ''
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
                <div>
                    <label >{label}</label>
                    <input 
                        value={valor} 
                        onChange={aoDigitado} 
                        required={obrigatorio} 
                        placeholder={placeholder}
                    />
                </div>
        </div>
    )
}

export default CampoTexto;