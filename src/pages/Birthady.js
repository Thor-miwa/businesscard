import Header from "../components/Header"
import tomandjerry from "../assets/tomandjerry.jpg"

function Birthady() {
  return (
    <div>
        <Header/>
        <div>
            <img src={tomandjerry} alt="tom"/>
            <h1>Hello</h1>
        </div>
    </div>
  )
}

export default Birthady