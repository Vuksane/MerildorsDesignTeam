import React from 'react'
import { Row, Col } from "react-bootstrap";

const SingleComment = ({singleComment}) => {
    const {username, criticism} = singleComment
    return (
        <Row>
            <Col md="4">
                <div className="firstDiv2 bg-light" style={{ width: 1100, textAlign: 'left', borderRadius: "15px" , border: "4px solid #5bc0de" }}>
                    <h5 className="card-category text-dark" style={{ paddingLeft: '30px', paddingTop: '15px', paddingBottom: '10px' }}>{username}</h5>
                    <p className="card-description text-justify text-dark" style={{ fontSize: 16, paddingLeft: '30px', paddingRight: '30px', paddingBottom: '10px' }}>{criticism}</p>
                </div>
            </Col>
        </Row>
    )
}

export default SingleComment