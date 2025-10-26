import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';

function UploadMaterial() {
  const [form, setForm] = useState({
    title: '',
    subject: '',
    groupName: '',
    year: '',
    semester: '',
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.file) {
      setError('Please select a file.');
      return;
    }
    setLoading(true);
    const data = new FormData();
    Object.entries(form).forEach(([key, val]) => {
      data.append(key, val);
    });

    try {
      await axios.post('https://new-4rqi.onrender.com/api/materials/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccess('Material uploaded and pending admin approval!');
      setForm({
        title: '', subject: '', groupName: '', year: '', semester: '', file: null,
      });
    } catch (err) {
      setError('Upload failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white animate__animated animate__fadeIn">
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="groupName"
          value={form.groupName}
          onChange={handleChange}
          placeholder="Group Name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select name="year" value={form.year} onChange={handleChange} required>
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select name="semester" value={form.semester} onChange={handleChange} required>
          <option value="">Select Semester</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="file" name="file" onChange={handleChange} required accept=".pdf,.jpg,.jpeg,.png" />
      </Form.Group>
      <Button type="submit" variant="success" disabled={loading} className="w-100">
        {loading ? <Spinner animation="border" size="sm" /> : 'Upload'}
      </Button>
    </Form>
  );
}

export default UploadMaterial;
