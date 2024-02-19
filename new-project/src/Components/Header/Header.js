import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <div>
            <h1>Breaking News!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button bsStyle="primary">Learn more</Button>
            </p>
 //    </div>
    );
};

export default Header;