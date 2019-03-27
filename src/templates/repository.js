import React from 'react';
import ReactMarkdown from "react-markdown";
import {Link} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Container, Row, Col
} from "reactstrap";

export default ({pageContext: {repository}}) => (
    <div className="layout">
        {repository.tagName &&
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
                        <Col>
                            <Container fluid={true}>
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
                        </Col>
                    </Row>
                    <h1 className="release-notes">{`Release notes`}</h1>
                    <hr/>
                    {/* This the place where we will use markdown formatted release notes */}
                    <ReactMarkdown source={`${repository.releaseDescription}`}/>
                </Container>
            </ListGroupItemText>
        </ListGroupItem>
        }
        <Link to={`/`}>
            <Button size="sm" outline color="danger">{`Back to All Repositories`}</Button>
        </Link>
    </div>
);
