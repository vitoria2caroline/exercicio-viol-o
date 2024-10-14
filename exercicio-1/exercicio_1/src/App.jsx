import './App.css'
import Header from './components/Header'
import SectionVermelho from './components/SectionVermelho'
import SectionAzul from './components/SectionAzul'
import SectionLaranja from './components/SectionLaranja'
import SectionAmarelo from './components/SectionAmarelo'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <div className="fundo">
      <Header/>
      <SectionVermelho/>
      <SectionAzul/>
      <SectionLaranja/>
      <SectionAmarelo/>
      <Footer/>
    </div>
    </>
  )
}

export default App
