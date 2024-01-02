import { BrowserRouter } from "react-router-dom"
import MenuBar from "./Components/Menus/MenuBar"
import About from "./Components/About/About"
import Banner from "./Components/Banner/Banner"
import Service from "./Components/Service/Service"

function App() {

  return (
    <>
      <BrowserRouter>
        <MenuBar />

        <Banner id="Home" />
        <About id="About" />
        <Service id="Service" />


      </BrowserRouter>
    </>
  )
}

export default App
