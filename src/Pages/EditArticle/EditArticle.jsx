import MyNavbar from "../../components/MyNavbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


function EditArticle() {

    const idParams = useParams().id
    const [articleData, setArticleData] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:5000/articles/${idParams}`)
            .then(response => setArticleData(response.data))
    }, [])

    const formHandler = (event) => {
        setArticleData({ ...articleData, [event.target.name]: event.target.value })
    }

    const editArticleHandler = () => {
        axios.put(`http://localhost:5000/articles/${idParams}` , articleData)

        Swal.fire({
            icon: "success",
            title: "مقاله با موفقیت ویرایش شد",
            showConfirmButton: false,
            timerProgressBar:true,
            timer: 2000
          });
    }


    return (
        <>
            <MyNavbar />
            <div className="formContainer">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>عنوان</Form.Label>
                        <Form.Control
                            value={articleData.title}
                            name="title"
                            onChange={formHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>توضیحات</Form.Label>
                        <Form.Control
                            value={articleData.desc}
                            name="desc"
                            onChange={formHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>تصویر </Form.Label>
                        <Form.Control
                            value={articleData.image}
                            name="image"
                            onChange={formHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>نویسنده</Form.Label>
                        <Form.Control
                            value={articleData.writer}
                            name="writer"
                            onChange={formHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> موضوع</Form.Label>
                        <Form.Control
                            value={articleData.category}
                            name="category"
                            onChange={formHandler} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>زمان مطالعه</Form.Label>
                        <Form.Control className="text-start"
                            value={articleData.readingTime}
                            name="readingTime"
                            onChange={formHandler} type="number" />
                    </Form.Group>

                    <Button onClick={editArticleHandler} variant="primary" type="button">
                        ویرایش مقاله
                    </Button>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default EditArticle;