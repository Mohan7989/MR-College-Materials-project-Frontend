import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

function FilterSection({ filters, setFilters }) {
  const handleChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Form className="mb-4">
      <Row>
        <Col md={3} sm={6} xs={12} className="mb-2">
          <Form.Select name="year" value={filters.year} onChange={handleChange}>
            <option value="">Year</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </Form.Select>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-2">
          <Form.Select name="semester" value={filters.semester} onChange={handleChange}>
            <option value="">Semester</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </Form.Select>
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-2">
          <Form.Control name="groupName" value={filters.groupName} onChange={handleChange} placeholder="Group Name" />
        </Col>
        <Col md={3} sm={6} xs={12} className="mb-2">
          <Form.Control name="subject" value={filters.subject} onChange={handleChange} placeholder="Subject" />
        </Col>
      </Row>
    </Form>
  );
}

export default FilterSection;
