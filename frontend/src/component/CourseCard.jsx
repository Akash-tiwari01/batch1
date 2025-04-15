import React from 'react'
import {Card , Button} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {addToCart} from "../redux/cartSlice"

function CourseCard({course}) {

    const dispatch = useDispatch()

    const handleAddToCart = ()=>{
        dispatch(addToCart(course))
    }
  return (
    <>
    <Card className='course-card' key={course.id}>
        <Card.Img variant='top' src={course.image} className='course-card-img'/>
        <Card.Body className='course-card-body'>
            <Card.Title className='course-title'>{course.name}</Card.Title>
            <Card.Text className='course-discription'>
                {course.description}
            </Card.Text>
            <Card.Text className='course-instructor'>
                <small className='text-muted' >Instructor: {course.instructor}</small>
            </Card.Text>

            <div className="course-footer">
                <span className='course-fee'>&#x20B9;{course.price}</span>
                <div className="course-buttons">
                    <Button className='course-btn course-add-cart' onClick={handleAddToCart}>Add To Cart</Button>
                    <Button className='course-btn bourse-buy-now'>Buy Now</Button>
                </div>
            </div>
        </Card.Body>
    </Card>
    
    </>
  )
}

export default CourseCard
