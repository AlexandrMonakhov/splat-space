import './App.scss';
import { MainScreen, TheFooter, TheHeader, ThePrizes, TheQuestions, TheRules, TheWinners } from './components';

function App() {
  return (
    <div className="App">
      <TheHeader />
      <MainScreen />
      <TheRules />
      <ThePrizes />
      <TheWinners />
      <TheQuestions />
      <TheFooter />
    </div>
  );
}

export default App;
