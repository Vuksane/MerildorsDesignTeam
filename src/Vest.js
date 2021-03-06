import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { useLocation } from "react-router-dom";
import { getAllComments } from './services/API'
import CommentForm from "./comments/CommentForm";
import CommentsList from "./comments/CommentsList";

function Vest({data}) {
  const location = useLocation();
  const [news, setNews]=useState({
    naslovVesti: '',
    textVesti: ''
  })
  const [allComments, setAllComments] = useState([])
  const [filteredComments, setFilteredComments] = useState([])

  useEffect(() => {
    const title = location.pathname.replace('/vest/','')
    if(data.length){
      setNews(data.find(el => el.naslovVesti === title))
    }
  }, [location, data])


  useEffect(() => {
    getAllComments().then(res => setAllComments(res.data))
  }, [])



  useEffect(() => {
    const commentByTitle = allComments.filter(comment => 
      comment.naslovVesti === news.naslovVesti
    )
    setFilteredComments(commentByTitle)

  }, [allComments, news.naslovVesti])



  return (
    <div
      className="section section-dark text-center"
      id="maxHeight"
      style={{
        backgroundImage: "url(" + require("assets/img/muzej.jpg") + ")",
        backgroundAttachment: 'fixed',
      }}
    >
      <Container style={{ paddingTop: 100 }}>
        <Row>
          <Col ld="4">
            <div className="firstDiv2 bg-light">
              <Card
                className="card-profile card-plain"
                style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50, borderRadius: "10px" , border: "4px solid #5bc0de" }}
              >
                <CardBody>
                  <div>
                    <br />
                    <h2 className="card-category text-dark">{news.naslovVesti}</h2>
                    <br />
                    <pre className="card-description text-justify" style={{ fontSize: 16, fontWeight: 400 }}>{news.textVesti}</pre>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      <CommentsList comments={filteredComments}/>

      <CommentForm news={news}/>
    </div>
  );
}
export default Vest;
