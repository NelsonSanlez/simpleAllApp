import imgFooter from '../images/POCH_PT2020_FSE_Bom.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';
import '../Pages/Control_temp.css';

function Footer() {
  return (

      <footer className="footerDiv container-fluid">
        <div className="imgFooterDiv">
          <img
            src={imgFooter}
            className="imgFooter"
            alt="POCH_PT2020_FSE_Bom"
            width={1000}
          />
        </div>
      </footer>

  );
}

export default Footer;
