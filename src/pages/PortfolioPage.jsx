import { Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import data from '../assets/data/projectsData';

export default function PortfolioPage() {
  return (
    <Row style={{paddingBottom: '7rem'}}>
      <h2 className="my-3 text-secondary">Portfolio</h2>
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
