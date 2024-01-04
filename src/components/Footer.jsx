import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaStackOverflow, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <Container className="text-center">
        <Link
          className="m-2 h3"
          to="https://github.com/ArmanBarseghyan83"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          className="m-2 h3"
          to="https://www.linkedin.com/in/arman-barseghyan"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="m-2 h3"
          to="https://stackoverflow.com/users/23197769/arman-barseghyan?tab=profile"
          target="_blank"
        >
          <FaStackOverflow />
        </Link>
      </Container>
    </footer>
  );
}
