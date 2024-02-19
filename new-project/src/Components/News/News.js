import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {
   
    // Check if props.articles exists before destrucutring
    const author = props.articles ? props.articles.author : null;
   console.log(author);
    const title = props.articles ? props.articles.title : null;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{author}</Card.Title> {/* Use content variable */}
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;
