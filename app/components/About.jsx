var React= require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This site was build in order to mastery how react works. For this purpose I have use : </p>
            <p>
                <ul>
                    <li>
                        <a href="http://foundation.zurb.com">Foundation</a>
                    </li>

                    <li>
                        <a href="http://openweathermap.com">Open weather map</a>
                    </li>

                    <li>
                        <a href="https://facebook.github.io/react/">React js</a>
                    </li>
                </ul>
            </p>
        </div>
    );
};

module.exports =About;


