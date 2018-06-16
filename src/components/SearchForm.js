import React, { Component, Fragment } from 'react';

class SearchForm extends Component {
    render() {
        return <Fragment>
            <div className="search-section__form">
                <div className="form-group row my-0">
                    <div className="col-sm-8">
                        <input type="text" id="--scotch-author" className="form-control form-control-md w-100" placeholder="Enter author scotchname" autocomplete="false" autofocus />
                    </div>
                    <div className="col-sm-4">
                        <button type="button" id="--search-scotch-button" className="btn btn-md btn-primary">Get Posts</button>
                    </div>
                </div>
            </div>
        </Fragment>;
    }
}

export default SearchForm;
