import React, { Component } from 'react';

import SearchForm from '../components/SearchForm';

class Home extends Component {
	render() {
	    return <header className="bg-white position-fixed w-100 border-gray border-bottom fixed-header">
            <div className="container">
                <div className="row d-flex flex-row justify-content-between align-items-center py-4">
                    <div className="col-md-auto">
                        <h1 id="--hello-title" className="h2 text-secondary font-weight-bold text-center hello-title my-0">Hello Scotch</h1>
                    </div>
                    <div className="col-md-4 pt-xs-3 pt-md-0">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </header>
	}
}

export default Home;
