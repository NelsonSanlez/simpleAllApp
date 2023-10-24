
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../App.css';
import '../Pages/Control_temp.css';

function Main() {
  return (

<main className="mainDiv container-fluid">
<button className="btn btnMais">
  <h1> + </h1>
</button>

<div>Texto da temperatura aqui.</div>
<div>20º</div>

<button className="btn btnMenos">
  <h1> - </h1>
</button>
</main>

);
}

export default Main;
