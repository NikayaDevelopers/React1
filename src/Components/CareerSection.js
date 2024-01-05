import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import jobData from './jobs.json'; // Renamed the imported variable

const CareerSection = () => {
  const [jobsList, setJobsList] = useState([]); // Renamed state variable to jobsList

  useEffect(() => {
    // Setting the state with the imported job data directly instead of fetching from JSON file
    setJobsList(jobData);
  }, []);

  return (
    <section className="career-section">
      <Container>
        <h2 className="text-center mb-4">Careers</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jobsList.map((job) => (
            <Col key={job.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.location}</Card.Subtitle>
                  <Card.Text>{job.description}</Card.Text>
                  <Card.Link href="#">Apply Now</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CareerSection;
