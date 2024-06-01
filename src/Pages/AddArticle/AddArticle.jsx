import MyNavbar from "../../components/MyNavbar/MyNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import './AddArticle.css'
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import Swal from "sweetalert2";


function AddArticle() {

    const [formData, setFormData] = useState({})

    const formHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    const resetForm = () => {
        setFormData({
            title: '',
            desc: '',
            image: '',
            writer: '',
            category: '',
            readingTime: ''
        })
    }

    const addArticleHandler = () => {
        axios.post('http://localhost:5000/articles', formData)
            .then(response => {
                if (response.status === 201) {
                    Swal.fire({
                        title: "مقاله جدید افزوده شد",
                        timer: 1700,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                }
                resetForm()
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: "افزودن مقاله ناموفق بود !",
                    confirmButtonText: "تلاش مجدد",
                    color: 'red'
                });
            })
    }

    return (
        <>
            <MyNavbar />
            <div className="formContainer">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>عنوان</Form.Label>
                        <Form.Control
                            value={formData.title}
                            name="title"
                            onChange={formHandler} type="text"
                            placeholder="عنوان مقاله را وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>توضیحات</Form.Label>
                        <Form.Control
                            value={formData.desc}
                            name="desc"
                            onChange={formHandler} type="text"
                            placeholder="توضیح مختصری وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>تصویر </Form.Label>
                        <Form.Control
                            value={formData.image}
                            name="image"
                            onChange={formHandler} type="text"
                            placeholder="آدرس تصویر را وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>نویسنده</Form.Label>
                        <Form.Control
                            value={formData.writer}
                            name="writer"
                            onChange={formHandler} type="text"
                            placeholder="نام نویسنده را وارد کنید" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> موضوع</Form.Label>
                        <Form.Control
                            value={formData.category}
                            name="category"
                            onChange={formHandler} type="text"
                            placeholder="موضوع برای دسته بندی" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>زمان مطالعه</Form.Label>
                        <Form.Control className="text-start"
                            value={formData.readingTime}
                            name="readingTime"
                            onChange={formHandler} type="number"
                            placeholder="عددی برای مدت زمان" />
                    </Form.Group>

                    <Button onClick={addArticleHandler} variant="primary" type="button">
                        افزودن مقاله
                    </Button>
                </Form>
            </div>
            <Footer />
        </>
    )
}

export default AddArticle;