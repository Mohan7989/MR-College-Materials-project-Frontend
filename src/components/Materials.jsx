import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Materials({ materials }) {
  if (!materials.length) {
    return <div className="text-danger">No materials found for the selected filters.</div>;
  }

  return (
    <Row>
      {materials.map(mat => (
        <Col md={4} key={mat.id} className="mb-4">
          <Card className="shadow h-100 animate__animated animate__fadeInUp">
            <Card.Body>
              <Card.Title style={{ color: '#1976d2' }}>{mat.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{mat.subject}</Card.Subtitle>
              <div><strong>Group:</strong> {mat.groupName}</div>
              <div><strong>Year:</strong> {mat.year}</div>
              <div><strong>Semester:</strong> {mat.semester}</div>
            </Card.Body>
            <Card.Footer>
              <a
                href={mat.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary w-100"
              >
                Download/View
              </a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Materials;
