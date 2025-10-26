import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

function InternshipList({ internships }) {
  if (!internships.length) {
    return <div className="text-danger">No internships available now.</div>;
  }

  return (
    <Row>
      {internships.map(job => (
        <Col md={4} key={job.id} className="mb-4">
          <Card className="shadow h-100 animate__animated animate__fadeInUp">
            <Card.Body>
              <Card.Title style={{ color: '#43a047' }}>
                {job.title}
                <Badge bg="info" className="ms-2">{job.company}</Badge>
              </Card.Title>
              <div><strong>Location:</strong> {job.location}</div>
              <div><strong>Duration:</strong> {job.duration}</div>
              <Card.Text className="mt-2">{job.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{job.company}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default InternshipList;
