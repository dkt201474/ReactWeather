var React = require('react');
var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.location.value; // attention location.value pas location

        if(location.length > 0) {
            this.refs.location.value = ''; 
            this.props.onSearch(location);  // onSeach est une fonction du parent de la composante qui appelle handleSearch 
        }
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <p><input type="text" ref="location" placeholder="Enter city name" /></p>
                <p><input type="submit" className="hollow button expanded" value="Get Weather"/></p>
            </form>
        );
    }
});

module.exports = WeatherForm;
