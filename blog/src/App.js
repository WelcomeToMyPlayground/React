import logo from './logo.svg';
import './App.css';

function App() {
 
  let post = '굿모닝';

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{color:'red',fontSize:'16px'}}>블로그</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
