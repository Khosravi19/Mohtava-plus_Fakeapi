import MyNavbar from "../../components/MyNavbar/MyNavbar";
import ArticleItem from "../../components/ArticleItem/ArticleItem";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function Home() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/articles')
            .then(response => setArticles(response.data));
    }, [])

    return (
        <>
            <MyNavbar />

            <Container>
                <Row className="gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">

                    {articles.map(article => (
                        <Col key={article.id} >
                            <ArticleItem {...article} />
                        </Col>
                    ))}

                </Row>

            </Container>
            <Footer />

        </>
    )
}

export default Home;