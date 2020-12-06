import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<div className='app-wrapper'>
			<div className='app-wrapper__header'>
				<Header />
			</div>
			<div className='app-wrapper__nav'>
				<Navbar />
			</div>
			<div className='app-wrapper__main'>
				<Profile />
			</div>
		</div>
	);
}

export default App;