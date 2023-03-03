import { useState } from 'react';
import {Banner} from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Formulario from './Components/Formulario/Formulario';
import Time from './Components/Time/Time';
import { IColaborador } from './Shared/Interfaces/IColaborador';



function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Front End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Inovaçaõ e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    }
  ]

  
  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  //função que está lendo os dados inseridos, devido a isso não poderia ser adcionando um colaboradores.push()
  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='app'>
      <Banner enderecoImagem='./Img/HeaderHeader_total.png' textoAlternativo='Banner principal da página'/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Footer />
    </div>
  )
}

export default App;
