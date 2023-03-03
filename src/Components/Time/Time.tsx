
import { IColaborador } from '../../Shared/Interfaces/IColaborador';
import Colaborador from '../Colaborador/Colaborador';
import './time.css';


interface TimeProps{
    corPrimaria: string;
    corSecundaria: string;
    nome: string;
    colaboradores: IColaborador[];
    
}

const Time = ({colaboradores,corPrimaria,corSecundaria,nome}:TimeProps) => {

    const css = {backgroundColor: corPrimaria}
    
    return(
        (colaboradores.length > 0) ? <section className="time" style={css}>
            <h3 style={{borderColor: corSecundaria}} >{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => 
                    <Colaborador 
                        corDeFundo={corSecundaria}
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                />)}
            </div>
        </section>
        : <></>
        //<></> esses sinais são um atalho para p React.Fragment
    )
}

export default Time;