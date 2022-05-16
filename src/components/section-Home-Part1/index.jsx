import {  Background, Conteiner, Contetnt} from "./styles";
import Button from "../Button";


const SectionHomePart1 = () => {
    return (
        <Conteiner>
            <Contetnt>
                    <h1>Somos amantes de animais</h1>
                    <h1>de estimação tentando fazer a diferença</h1>
                    <Button>Adote um pet</Button>
            </Contetnt>
            <Background/>
        </Conteiner>
    )
}

export default SectionHomePart1;