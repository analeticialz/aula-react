import './Componente1.css'
import styles from './Componente1.module.css'

function Componente1(){
    let nome = true
    alert('ola ´$(nome)')
    return(
        <>
        <h1> Titulo do componente 1</h1>
        <p className= {`${styles.primaria} ${styles.fonte}`}>Paragrafo do componente 1</p>
        <p className= {styles.secundaria}>Paragrafo do componente 2</p>
        </>
    )
}

export default Componente1 