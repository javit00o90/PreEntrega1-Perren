import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBar/NavBarComponent';
import FooterComponent from './components/Footer/FooterComponent';
import ItemContainer from './components/ItemContainer/ItemContainerComponent';
import styles from "./App.module.css";

const App = () => {

  return(
    <div>
      <nav>
      <NavBarComponent/>
      </nav>
      <div className={styles.mainStyle}>
        <ItemContainer saludo="Bienvenidos, cargando lista de items..."/>
      </div>
      <footer>
      <FooterComponent/>
      </footer>
    </div>
  )
}



export default App