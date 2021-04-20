import React from 'react';
//Class Base Component
class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
			},
			(err) => {
				console.log(err);
			}
		);

		return <div>Hello World!</div>;
	}
}

export default App;
