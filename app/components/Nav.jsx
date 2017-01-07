var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = (props) => {
    return (
        <div>
            <h2>A nav bar</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
            <Link to="/about" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/examples" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
    );
};

module.exports = Nav;


