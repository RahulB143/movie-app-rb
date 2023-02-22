import React from "react";
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
			.then(res => res.json(JSON.stringify([])))
			.then(res => {
				console.log(res)
				this.setState({
					isLoaded: true,
					data: [res]
				});
				console.log([res])
			},
			)
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				{data.map(item => (
					<div>
					<div key={item.id}>
						<h1>{item.totalResults}</h1>
					</div>
					<div>
					{item.Search.map((items,id)=>(
                     <div key={items.id} className ="moviePoster">
						<img src={items.Poster} alt="Movie-poster"/>
					 </div>
					))
					}

					</div>
					</div>

				))}

			</div>
		);

	}
}
export default App  