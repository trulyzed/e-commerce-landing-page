import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.scss';
import { Home } from '~/views/home/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className={'container'}>
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
