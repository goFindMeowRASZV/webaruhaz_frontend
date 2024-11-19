
import './App.css';
import Tablazat from './Components/Tablazat';
import Termekek from './Components/Termekek';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="logo">
            <img src='kepek/logo.png' alt="logo" className="rounded-pill"/>
            <h1>Macska webáruház</h1>
          </div>
      </header>
      <main className='row'>
        <article className='col-lg-9'>
          <h3>Termékek</h3>
          <Termekek/>
        </article>
      </main>
      
    </div>
  );
}

export default App;
