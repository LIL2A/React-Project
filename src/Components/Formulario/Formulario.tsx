import "./formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/listaSuspensa";
import Button from "../Button/Button";
import { useState } from "react";
import { IColaborador } from "../../Shared/Interfaces/IColaborador";


interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void;
    times: string[];
  }

const Formulario = (props: FormularioProps) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={evento => aoSalvar(evento)}>
        <h2>Preencha os dados para criar os dados do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome:"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo:"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem:"
          placeholder="Insira o usuário do GitHub"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Formulario;
