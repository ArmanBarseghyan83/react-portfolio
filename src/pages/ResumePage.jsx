import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import { MdDownload } from "react-icons/md";
import '../styles/Resume.css'
import resume from '../assets/images/Arman_Resume.pdf'
import { HiDownload } from "react-icons/hi";
import { LiaDownloadSolid } from "react-icons/lia";
import { FcDownload } from "react-icons/fc";
import { PiDownloadSimpleThin } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";

export default function ResumePage() {
  return (
    <>
      <Row className='resume'>
        <Col md={6}>
          <h3 className='my-3'>Front-end Proficiencies</h3>
          <Card >
            <ListGroup className='h5'>
              <ListGroup.Item>HTML</ListGroup.Item>
              <ListGroup.Item>CSS, Bootstrap, Tailwind</ListGroup.Item>
              <ListGroup.Item>Responsive Design</ListGroup.Item>
              <ListGroup.Item>JavaScript, JQuery</ListGroup.Item>
              <ListGroup.Item>React, Nextjs</ListGroup.Item>
            </ListGroup>
          </Card>
          <a href={resume} download className='btn'>
            <span className='m-2'>Resume</span>
            <MdOutlineFileDownload />
          </a>
        </Col>
        <Col>
          <h3 className='my-3'>Back-end Proficiencies</h3>
          <Card>
            <ListGroup className='h5'>
              <ListGroup.Item>APIs</ListGroup.Item>
              <ListGroup.Item>Node</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
              <ListGroup.Item>PostgeSQL</ListGroup.Item>
              <ListGroup.Item>REST</ListGroup.Item>
              <ListGroup.Item>GraphQL</ListGroup.Item>
              <ListGroup.Item>Python, Django, Flask</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
