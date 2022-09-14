import { FaTwitter, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'


function Footer() {
  return (
    <div className="Footer">
      <a href='www.twitter.com'><FaTwitter/></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='www.facebook.com'><FaFacebook/></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='www.instagram.com'><FaInstagram/></a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href='www.github.com'><FaGithub/></a>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}

export default Footer