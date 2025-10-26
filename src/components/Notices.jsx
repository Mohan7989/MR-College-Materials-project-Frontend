import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

function Notices({ notices }) {
  if (!notices || notices.length === 0) {
    return <div className="text-muted">No notices available.</div>;
  }

  return (
    <ListGroup>
      {notices.map((notice) => (
        <ListGroup.Item key={notice.id} className="animate__animated animate__fadeInLeft">
          <strong>{notice.title}</strong>
          <Badge bg="info" className="ms-2">New</Badge>
          <div className="mt-1">{notice.description}</div>
          <small className="text-muted">{notice.date}</small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Notices;
