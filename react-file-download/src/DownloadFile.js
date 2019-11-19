import React from 'react';
import './download.css';

class DownloadFile extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	downloadEmployeeData = () => {
		fetch('http://localhost:9200/api/files/classpath/users')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'users.csv';
					a.click();
				});
				//window.location.href = response.url;
		});
	}
	
	render() {
		return (
			<div id="container">

				<button onClick={this.downloadEmployeeData}>Download</button>

			</div>
		)
	}

}

export default DownloadFile;
