import React from 'react';
import CATS from '../constants/cats';

import Home from './Home';
import Profile from './Profile';

function App() {
	return (
		<Profile cat={CATS[0]} />
	);
}

export default App;