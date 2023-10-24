import imgHeader from '../images/logo_ipb.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';
import '../Pages/Control_temp.css';

function Header() {
  return (
        
      <header className="headerDiv container-fluid row">
        <div className="headerLogoDiv col">
          <img
            src={imgHeader}
            className="imgHeader"
            alt="logo_ipb"
            width={1000}
          />
        </div>

        <div className="headerTitleDiv col">
          <h1>Controlo da temperatura do seu quarto:</h1>
        </div>

        <div className="headerButtonDiv col">
          <button className="btn btnToggle">
            <h1>📤 Editar 📥</h1>
          </button>
        </div>
      </header>

  );
}

export default Header;
