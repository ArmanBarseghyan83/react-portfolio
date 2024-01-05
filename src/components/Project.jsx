import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Project({ title, image, github, demo }) {
  return (
    <Card className="my-2 rounded">
      <Link to={demo} target="_blank">
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Card.Title as="div" className="">
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text>
          <Link to={github} target="_blank" className="h2 text-secondary">
            <FaGithub />
          </Link>
          <Link to={demo} target="_blank" className="btn bg-secondary text-light">
            Demo
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
