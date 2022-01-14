import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="personal_info">
            <p>Phạm Anh Khoa</p>
            <p>MSSV: 19120257</p>
            <p>Lớp: 19CTT2</p>
            <p>Trường Đại học Khoa học-Tự nhiên</p>
        </div>
      </header>
    </div>
  );
}

export default App;
