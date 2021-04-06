import React, { useState, useEffect } from 'react';
import {postComments} from '../services/API';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useAlert } from "react-alert";
import { Form, Input, } from "reactstrap";

const CommentForm = ({news}) => {
    const alert = useAlert()
    const [comment, setComment] = useState({
        username: '',
        email: '',
        criticism: '',
        naslovTeme: '',
        naslovVesti: ''
    })
    useEffect(() => {
      setComment({
        naslovTeme: news.naslovTeme,
        naslovVesti: news.naslovVesti
      })
    }, [news])
    const handleSubmit = (e) => {
        e.preventDefault()
        postComments(comment).then((res)=>{
            alert.info("Komentar je uspesno dodat");
            setComment({
                username: '',
                email: '',
                criticism: '',
                naslovTeme: news.naslovTeme,
                naslovVesti: news.naslovVesti
            })
        })
    }
    return (
        <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 id="scroll" className="text-center" style={{ color: 'white' }}>Vas komentar?</h2><br></br>
                <Form onSubmit={(e)=>handleSubmit(e)} className="contact-form blurred_glass_quick_message2 blurred_glass_quick_message">
                  <Row>
                    <Col md="12">
                      <label style={{color: "grey", fontSize: 18}}>Korisnik</label>
                        <Input value={comment.username} onChange={(e)=>setComment({...comment, username:e.target.value})} placeholder="Anonymous" name="username" type="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <label style={{color: "grey", fontSize: 18}}>Email</label>
                        <Input value={comment.email} onChange={(e)=>setComment({...comment, email:e.target.value})} placeholder="anonymous@gmail.com" name="email" type="email" />
                    </Col>
                  </Row>
                  <Row>
                  <Col md="12">
                    <label style={{color: "grey", fontSize: 18}}>Komentar</label>
                    <Input
                        value={comment.criticism} 
                        onChange={(e)=>setComment({...comment, criticism:e.target.value})}
                        placeholder="Napisite nam sta mislite o ovoj temi..."
                        name="criticism"
                        type="textarea"
                        rows="5"
                        style={{resize: "none"}}
                    />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" md="3">
                        <Button type="submit">Dodaj Komentar</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
        </Container>
    )
}

export default CommentForm
