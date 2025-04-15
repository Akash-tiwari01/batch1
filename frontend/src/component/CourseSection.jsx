import React from 'react'
import {Row, Container} from 'react-bootstrap';
import CourseCard from './CourseCard';


function CourseSection() {
    const courses = [
        {
          id: 1,
          name: 'React Fundamentals',
          description: 'Learn the basics of React including components, state, and props.',
          instructor: 'John Doe',
          price: 49.99,
          image: 'img/ai.jpg',
        },
        {
          id: 2,
          name: 'Advanced React Patterns',
          description: 'Dive deeper into advanced React patterns and best practices.',
          instructor: 'Jane Smith',
          price: 79.99,
          image: 'img/download.jpg',
        },
        {
          id: 3,
          name: 'Redux for State Management',
          description: 'Master Redux for predictable state management in your applications.',
          instructor: 'Mike Johnson',
          price: 59.99,
          image: 'img/ai.jpg',
        },
        {
          id: 4,
          name: 'React Bootstrap Styling',
          description: 'Learn how to style your React apps with React Bootstrap.',
          instructor: 'Sarah Williams',
          price: 39.99,
          image: 'img/download.jpg',
        },
      ];
    
  return (
    <>
    <section className="course-section-wrapper py-5">
        <Container className='course-container'>
            <h2 className='course-title text-center mb-4'>Our Courses</h2>
            <Row className="course-row">
                {courses.map((course)=>(<CourseCard key={course.id} course={course}/>))}
            </Row>
        </Container>
    </section>
    </>
  )
}

export default CourseSection
