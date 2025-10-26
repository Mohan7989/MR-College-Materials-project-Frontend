import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

function NoticeBoard({ notices }) {
  if (!notices.length) {
    return <div className="text-muted">No current notices.</div>;
  }

  return (
    <Row>
      {notices.map((notice) => (
        <Col md={6} key={notice.id} className="mb-4">
          <Card className="shadow animate__animated animate__fadeInLeft">
            <Card.Body>
              <Card.Title>
                {notice.title} <Badge bg="warning" className="ms-2">Notice</Badge>
              </Card.Title>
              <Card.Text>{notice.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{notice.date}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default NoticeBoard;
