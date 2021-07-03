import logo from './logo.svg';
import './App.css';
import Header from './components/Header'


function App() {
  return (
    <div className="container">
      <h1>Hello From React!</h1>
      <h2>Dear god a Task Tracker?</h2>

      <Header />

    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class!</h1>
//   }
// }

export default App;
