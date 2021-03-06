var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
    onSearch: function (e) {
        e.preventDefault();
        alert("not setted yet");
    },

    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather app</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
                        </li>

                        <li>
                            <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>

                        <li>
                            <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="text" placeholder="Search weather"/></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;





