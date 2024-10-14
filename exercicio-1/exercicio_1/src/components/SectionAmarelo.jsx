import Style from "./SectionAmarelo.module.css"
import CuboEscuro from "./CuboEscuro.jsx"
import CuboClaro from "./CuboClaro.jsx"

function SectionAmarelo() {

    return(
        <section className={Style.sectionAmarelo}>
        <CuboEscuro/>
        <CuboClaro/>
        </section>
    )
}
export default SectionAmarelo