import React from 'react';
import { Container } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = ({comments}) => {
    return (
        <div>
            <Container>
                {comments.map(comment => <SingleComment key={Math.random()} singleComment={comment}/>)}
            </Container>
        </div>
    )
}

export default CommentsList
