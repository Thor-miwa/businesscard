import logo from '../assets/logo.png'

function About() {
  return (
    <div>
      <h1>ABOUT-US</h1>
      This Page Contains Things You Need To Know About Us  <br/>
      <form>
        <label>Name:
          <input type='text' placeholder="Full Name"/> &nbsp;&nbsp;
          Course:
          <input type='text' placeholder="Present course"/>
          
        </label>
      </form>
          <img src={logo}  alt="Yo"/>
    </div>
  )
}

export default About