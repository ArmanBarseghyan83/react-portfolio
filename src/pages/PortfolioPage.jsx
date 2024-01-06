import { Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import data from '../assets/data/projectsData';

export default function PortfolioPage() {
  return (
    <Row >
      <h2 className="my-3">Portfolio</h2>
      {/* Map over projects data and display the Project component for each project */}
      {data.map((project) => (
        <Col key={project.id} sm={12} md={6} lg={4} xl={3}>
          <Project
            title={project.title}
            image={project.image}
            demo={project.demo}
            github={project.github}
          />
        </Col>
      ))}
    </Row>
  );
}
