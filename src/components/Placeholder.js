import React, { Component, Fragment } from "react";
import "./Placeholder.css";

class Placeholder extends Component {
	render() {
		return <Fragment>
				<div className="container pt-5 d-flex flex-column justify-content-between position-relative mx-auto w-100">
					<div className="row d-flex flex-row justify-content-between align-items-center border-bottom border-gray pb-4">
						<div className="col-md-4">
							<div className="d-flex flex-row">
								<div className="mr-2 placeholder placeholder-0" />
								<div className="mr-2 placeholder placeholder-md placeholder-animate" />
							</div>
							<div className="d-flex flex-row">
								<div className="mr-2 placeholder placeholder-0" />
								<div className="mr-2 placeholder placeholder-5 placeholder-animate" />
							</div>
						</div>
						<div className="col-md-4">
							<div className="mx-auto placeholder placeholder-ball" style={{ width: 50, height: 50 }} />
						</div>
						<div className="col-md-4">
							<div className="d-flex flex-row justify-content-end">
								<div className="ml-3 placeholder placeholder-2 placeholder-animate" />
								<div className="ml-3 placeholder placeholder-2 placeholder-animate" />
								<div className="ml-3 placeholder placeholder-2 placeholder-animate" />
								<div className="ml-3 placeholder placeholder-2 placeholder-animate" />
							</div>
						</div>
					</div>
					<div className="row d-flex flex-row my-5 py-5">
						<div className="col-auto my-5 py-5 w-100">
							<div className="mx-auto mt-5 placeholder placeholder-animate placeholder-md"></div>
							<div className="mx-auto mt-2 placeholder placeholder-animate placeholder-lg"></div>
							<div className="d-flex flex-row mx-auto mt-5 justify-content-center">
								<div className="mr-2 placeholder placeholder-0" />
								<div className="mr-2 placeholder placeholder-5 placeholder-animate" />
							</div>
						</div>
					</div>
					<div className="row d-block mt-5 pt-5">
						<div className="mx-auto mt-5 placeholder placeholder-animate placeholder-6" />
					</div>
				</div>
			</Fragment>;
	}
}

export default Placeholder;
