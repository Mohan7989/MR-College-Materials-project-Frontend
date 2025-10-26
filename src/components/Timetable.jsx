import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';

function Timetable({ data }) {
  if (!data.length) {
    return <div className="text-danger">No active timetables found.</div>;
  }

  return (
    <Row>
      {data.map(t => (
        <Col md={6} key={t.id} className="mb-4">
          <Card className="shadow h-100 animate__animated animate__fadeInDown">
            <Card.Body>
              <Card.Title>
                {t.title} <Badge bg={t.active ? 'success' : 'secondary'}>{t.active ? 'Active' : 'Inactive'}</Badge>
              </Card.Title>
              <div><strong>Date:</strong> {t.dateDay}</div>
              <div><strong>Time:</strong> {t.time}</div>
              <div><strong>BA Subjects:</strong> {t.baSubjects}</div>
              <div><strong>BSc Subjects:</strong> {t.bscSubjects}</div>
              <div><strong>BCom Subjects:</strong> {t.bcomSubjects}</div>
              <div><strong>BBA Subjects:</strong> {t.bbaSubjects}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Timetable;
