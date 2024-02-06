import Navbar from "./components/layout/NavBar/Navbar"
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer"


function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hola desde App"/>
    </>
  )
}

export default App
