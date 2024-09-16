import './App.css';
import TheFooter from './components/footer/TheFooter';
import TheHeader from './components/header/TheHeader';
import TheMain from './components/main/TheMain';

function App() {
  return (
    <div className="app">
        <TheHeader />
        <TheMain />
        <TheFooter />
    </div>
  );
}

export default App;
