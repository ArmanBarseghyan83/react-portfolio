import { Row, Col, Image } from 'react-bootstrap';
import hero from '../assets/images/hero.png';

export default function AboutPage() {
  return (
    <>
      <Row className="mt-lg-4">
        <Col md={3} xs={5} className='m-auto'>
          <Image src={hero} alt="programmer" fluid />
        </Col>
        <Col lg={8} xs={12} className='m-auto'>
          <h2 className='mb-4'>About me</h2>
          <p className='h5' style={{ lineHeight:'1.5'}}>
            Hello, I am a web developer with a Bachelor Degree in Engineering. I
            have successfully completed online learning courses and obtained a
            professional certificate in Computer Science for Web Programming
            from Harvard University. I work with HTML, CSS, Bootstrap,
            JavaScript, React, Next.js, Python, Django, Flask & SQL.
          </p>
          <p className='h5' style={{ lineHeight:'1.5'}}>
            Facing challenges and trying to solve them while learning new skills
            is my passion. After learning these languages, I have implemented
            them into many of my projects, some of which can be found below.
            Currently excited to explore career opportunities within web
            development and expand my web development knowledge. Feel free to
            review my projects.
          </p>
        </Col>
      </Row>
    </>
  );
}
