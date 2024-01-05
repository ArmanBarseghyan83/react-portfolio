import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaStackOverflow, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
      <Container className="text-center text-secondary my-5">
        <Link
          className="h2"
          to="https://github.com/ArmanBarseghyan83"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          className="m-4 h2"
          to="https://www.linkedin.com/in/arman-barseghyan"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="h2"
          to="https://stackoverflow.com/users/23197769/arman-barseghyan"
          target="_blank"
        >
          <FaStackOverflow />
        </Link>
      </Container>
  );
}
