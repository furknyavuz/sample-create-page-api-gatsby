import React from 'react';
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import {
    Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Container, Row, Col
} from "reactstrap";

export default ({pageContext: {repositories}}) => (
    <div className="layout">
        <h1 className="title">Repositories</h1>
        <ListGroup>
            {/* Because repositories parameter is a list, we are iterating over each item and using their fields */}
            {repositories.map(repository => (repository.tagName &&
                <ListGroupItem className="repository-list-item">
                    <Link to={`/repository/${repository.owner}/${repository.name}`}>
                        <ListGroupItemHeading className="text-muted">
                            <Container fluid={true}>
                                <Row>
                                    <Col lg={1}>
                                        <img src={repository.avatarUrl} height={60} width={60}/>
                                    </Col>
                                    <Col>
                                        <h2>{`${repository.owner}/${repository.name}`}</h2>
                                    </Col>
                                </Row>
                            </Container>
                            <hr/>
                        </ListGroupItemHeading>
                    </Link>
                    <ListGroupItemText>
                        <Container fluid={true} className="repository-data-container">
                            <Row>
                                {`${repository.repositoryDescription}`}
                            </Row>
                            <Row className="repository-buttons-row">
                                <a href={`https://www.github.com${repository.resourcePath}`}
                                   rel="noopener noreferrer" target="_blank">
                                    <Button className="repository-button" size="sm" outline color="success">
                                        {`Latest release: ${repository.tagName}`}
                                    </Button>
                                </a>
                                {repository.homepageUrl &&
                                <a href={`${repository.homepageUrl}`}
                                   rel="noopener noreferrer"
                                   target="_blank">
                                    <Button className="repository-button" size="sm" outline color="secondary">
                                        {`${repository.homepageUrl}`}
                                    </Button>
                                </a>}
                            </Row>
                        </Container>
                    </ListGroupItemText>
                </ListGroupItem>
            ))}
        </ListGroup>
    </div>
);
