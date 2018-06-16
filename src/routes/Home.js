import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import Placeholder from '../components/Placeholder';

class Home extends Component {
	state = {
		loading: true,
		posts: []
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 5000);
	}

	render() {
		const { posts, loading } = this.state;
		return loading
			? <Placeholder />
			: <Fragment>
				<div id="--global-loader" className="loader-container bg-white position-fixed flex-row justify-content-center align-items-center"></div>
				<div className="d-flex flex-column justify-content-start">
					<Header />
					<section className="container scotch-articles">
						<div className="row d-flex flex-row flex-wrap justify-content-center align-content-start" id="--scotch-articles"></div>
					</section>
				</div>
			</Fragment>
	}
}

export default Home;
