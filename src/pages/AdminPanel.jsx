import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';

function AdminPanel() {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Fetch pending materials
  useEffect(() => {
    const fetchPending = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://new-4rqi.onrender.com/api/materials/pending');
        setPending(response.data);
      } catch (err) {
        setPending([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPending();
  }, []);

  // Approve material by ID
  const handleApprove = async (id) => {
    setSuccess('');
    setError('');
    try {
      await axios.put(`https://new-4rqi.onrender.com/api/materials/approve/${id}`);
      setSuccess('Material approved!');
      setPending((prev) => prev.filter((m) => m.id !== id));
    } catch {
      setError('Error approving material.');
    }
  };

  return (
    <Container className="py-4">
      <h2 className="text-danger mb-4">Admin Panel: Pending Approvals</h2>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          {pending.length === 0 && <div>No pending materials.</div>}
          {pending.map((mat) => (
            <Card key={mat.id} className="mb-3 animate__animated animate__fadeInUp">
              <Card.Body>
                <Card.Title>{mat.title} <small>({mat.subject})</small></Card.Title>
                <div><strong>Group:</strong> {mat.groupName}</div>
                <div><strong>Year:</strong> {mat.year}, <strong>Semester:</strong> {mat.semester}</div>
                <div>
                  <a href={mat.filePath} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                    Download/View
                  </a>
                </div>
                <Button variant="success" className="mt-2" onClick={() => handleApprove(mat.id)}>
                  Approve
                </Button>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}

export default AdminPanel;
