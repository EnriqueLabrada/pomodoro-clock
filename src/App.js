import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Tiempo from './components/time'


function App() {
  return (
    <div className='App d-flex'>
      <Tiempo></Tiempo>
      <footer>
	      <p> Created by EnriqueLabrada </p>
        <div className='enlaces d-flex'>
          <a href='https://github.com/EnriqueLabrada' rel='noreferrer' target='_blank'><i className='bi bi-github'></i></a>
          <a href='https://www.linkedin.com/in/enrique-labrada-rivero-814b4927a/' rel='noreferrer' target='_blank'><i className='bi bi-linkedin'></i></a>
          <a href='https://www.instagram.com/enri_labrada?igsh=MWdnMHZobXNmZGVjbQ==' rel='noreferrer' target='_blank'><i class="bi bi-instagram"></i></a>
        </div>
      	</footer>
    </div>
  );
}

export default App;
