import { Provider } from 'react-redux';
import { store } from './store/index';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>Hello</Provider>
		</div>
	);
}

export default App;
