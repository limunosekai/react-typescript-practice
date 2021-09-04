import ReactDOM from 'react-dom';
import Redux from './redux/components/App';

const App = () => {
  return (
    <div>
      <Redux />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));