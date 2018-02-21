var moviesArray = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'About a young wizard',
    image: './images/potter.jpg'
  },
  {
  	id: 2,
    title: 'The Lion King',
    desc: 'A story about the king of the African savannah',
    image: './images/lion.jpg'
  },
  {
  	id: 3,
  	title: 'Jurassic Park',
  	desc: 'Eccentric millionaire opens a theme park with a living dinosaurs',
  	image: './images/park.jpg'
  },
  {
  	id: 4,
  	title: 'Lord of the Rings',
  	desc: 'The movie about adventures of the young hobbit',
  	image: './images/ring.jpg'
  }
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
      			React.createElement(MovieTitle, {title: this.props.movie.title}),
      			React.createElement(MovieDescription, {desc: this.props.movie.desc}),
      			React.createElement(MoviePoster, {src: this.props.movie.image})
    		)
    	)
	}
});

var MovieTitle = React.createClass ({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title);
	} 
});

var MovieDescription = React.createClass ({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc);
	} 
});

var MoviePoster = React.createClass ({
	propTypes: {
		src: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.src})
	}
});

var movieElement = moviesArray.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie: movie})
});

var MoviesList = React.createClass({
    render: function(){
        return (
            React.createElement('div', {}, 
                React.createElement('h1', {}, 'The List of Movies'),
                React.createElement('ul', {}, movieElement)
            )
        )
    }
});

var moviesListElement = React.createElement(MoviesList);
ReactDOM.render(moviesListElement, document.getElementById('app'));