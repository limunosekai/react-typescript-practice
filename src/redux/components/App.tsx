import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search fro a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
