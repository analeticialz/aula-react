import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes/Componente1'

function App() {
  let estilotitulos3 = {
    backgroundColor:'red',
    color: 'blue'
  }

  let azul = true

  let estiloBotao = {
    backgroundColor: azul == true ? 'blue' : 'gray',
    color: 'white',
    padding: '10px'
  }

  return (
    <>
      <div>
        <h1>Aula 27</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iusto aliquid quam placeat similique nam dolorem deleniti nulla obcaecati totam. Similique, dolorum! Dolorem nobis distinctio laboriosam sit maxime laborum tempora.</p>
      <h1>Titulo 2</h1>
      <p className='paragrafo1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, labore! Soluta repellendus, commodi debitis quas sed reprehenderit voluptatibus enim dicta! Officia cumque placeat nisi, magni pariatur tempore sequi delectus mollitia?</p>
      </div>
      <Componente1/>
      {/*CSS inline*/}

      <h1 style={estilotitulos3}>Titulo 3</h1>
      <p style = {{backgroundColor:'gray', color: 'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas alias, sint numquam quod nostrum officia hic? Dignissimos numquam omnis asperiores eligendi nesciunt explicabo nemo tenetur, quidem autem aut, voluptates similique.</p>
      <button style={estiloBotao}>Click aqui</button>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem animi, eligendi corrupti, eos adipisci obcaecati suscipit, ipsa itaque veritatis voluptatibus illo mollitia. Deserunt, commodi odit! Molestias cum minus necessitatibus optio.</p>
    </>
  )
}

export default App
