import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';
import './Control_temp.css';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

function Control_temp() {
  return (
    <div className="App tempPageContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Control_temp;
