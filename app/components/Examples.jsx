var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Example</h1>
            <p>Here are some example of location to try out : </p>

            <ol>
                <li>
                    <Link to='/?location=Ottawa'>Ottawa, ON</Link>
                </li>

                <li>
                    <Link to='/?location=Toronto'>Toronto, ON</Link>
                </li>

                <li>
                    <Link to='/?location=Parakou'>Parakou, BENIN</Link>
                </li>
            </ol>
        </div>
    );
};
module.exports = Examples;
