import { Provider } from 'react-redux';
import { store } from './store/index';
import { Inner } from './components/Inner';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Inner />
			</Provider>
		</div>
	);
}

export default App;
