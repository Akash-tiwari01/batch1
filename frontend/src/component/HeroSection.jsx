import React from 'react'
import {Container, Row , Col,Button, Carousel, Card}  from 'react-bootstrap'
import image from "../assets/img/4.jpeg"
import rubi from "../assets/img/7.png"

function HeroSection() {

    const persons = [
        {
            id:1,
            name:"Rubi",
            image:rubi,
            company:"Google"
        },
        {
            id:2,
            name:"Amisha",
            image:"https://www.pexels.com/photo/woman-posing-for-photo-shoot-1391498/",
            company:"Microsoft"
        },
        {
            id:3,
            name:"Shaqib",
            image:image,
            company:"Tesla"
        },
        {
            id:4,
            name:"Sikandar",
            image:image,
            company:"NASA"
        },

    ]
  return (
    <>
        <section className="hero-section py-5">
            <Container className="hero-container">
                <Row className="align-item-center">
                    <Col lg={6} className="hero-text-container mb-4 mb-lg-0">
                        <h1 className='hero-heading'>Learn From Best Instructor</h1>
                        <p className='hero-subtext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quae incidunt est dolorem deleniti labore distinctio nisi fuga eveniet quidem.</p>
                        <Button className="hero-btn">
                            Register-Now
                        </Button>
                        
                    </Col>
                    <Col lg={6} className="hero-carousel-container">
                        <Carousel indicators={false} controls={false} className="hero-carousel">
                            {
                                persons.map((person)=>(
                                    <Carousel.Item key={person.id}>
                                        <Card className="hero-card text-center">
                                            <Card.Img variant="top" src={person.image} className="hero-card-img"/>
                                            <Card.Body>
                                                <Card.Title className="hero-card-name">{person.name}</Card.Title>
                                                <Card.Text className="hero-card-company">Workin at {person.company}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default HeroSection
