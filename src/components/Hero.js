import { FaEnvelope, FaGlobe, FaLinkedin} from 'react-icons/fa'

function Hero() {
  return (
    <div>
    <h1>Adeniji Adetomiwa</h1>
    <h4>Frontend Developer</h4>

    <div>
      <a className='bt1' href="mailto:adetomiw1@email.com"><FaEnvelope/> &nbsp; Email</a> &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <a className='bt2' href="www.linkedIn.com"><FaLinkedin/> &nbsp; LinkedIn</a>&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <a className='bt3' href='www.pediforte.com'><FaGlobe/>&nbsp; Website</a>
    </div>

    <div className='lrm'>
      <h3>About</h3>
      <p>
      I am a frontend developer with a particular interest in making things simple and automating daily tasks.
      I try to keep up with security and best practices, and I'm always looking for new things to learn.
      </p>

      <h3>Interests</h3>

      <p>
       Broad knowledge on Reactjs, ReactNative, and Angular. 
      </p>
    </div>
  </div>
  )
}

export default Hero