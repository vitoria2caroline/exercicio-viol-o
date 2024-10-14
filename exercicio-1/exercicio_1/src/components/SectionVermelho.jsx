import Style from "./SectionVermelho.module.css"
import Cubo from "./Cubo.jsx"

function SectionVermelho() {

    return(
    <section className= {Style.sectionVermelho}>
        <Cubo/>
        <Cubo/>
    </section>
    )
}
export default SectionVermelho
