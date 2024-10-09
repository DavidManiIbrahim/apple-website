 import './App.css'
 import Iphone16pro from './Components/Container/Iphone 16 Pro/Iphone16pro.jsx';
import Iphone16 from './Components/Container/Iphone 16/Iphone16.jsx';
import Macbook from './Components/Container/Macbook Air/Macbook air.jsx';
import Grid from './Components/Container/Grid/Grid.jsx';
import Footer from './Components/Container/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx'

function App () {
  return (
    <>
      <Navbar />
      <Iphone16pro />
      <Iphone16 />
      <Macbook />
      <Grid />
      <Footer />
    </>

  )
}

export default App;
