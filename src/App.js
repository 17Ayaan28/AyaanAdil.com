import './App.css';
import ParticlesComp from './ParticlesComp';
import linkedInLogo from './linkedin-image.png';
import githubLogo from './gh-img.png';
import resumeLogo from './resume-logo.png'
import Pdf from './resume.pdf';

function App() {
  return (
    <div className='test'>
      <div className='name'>Ayaan Adil</div>
      <div className='title'>Software Engineer @ ANZ</div>
      <div className='links-container'>

        <div className='logo-image-container'>
          <a href="https://www.linkedin.com/in/ayaanadil/">
            <img className='logo-image' src={linkedInLogo}/>
          </a>
        </div>
        
        <div className='logo-image-container'>
          <a href="https://github.com/17Ayaan28">
            <img className='logo-image' src={githubLogo}/>
          </a>
        </div>

        <div className='logo-image-container'>
        <a href={Pdf} target="_blank">
          <img className='logo-image' src={resumeLogo}/>
        </a>
        </div>
      </div>
      <div className="prtcls"><ParticlesComp/></div>
    </div>
  );
}

export default App;
