import Card from 'react-bootstrap/Card';
import { MdAccessTime } from "react-icons/md";
import { LiaArrowAltCircleLeft } from "react-icons/lia";
import './ArticleItem.css'
import { Link } from 'react-router-dom';

function ArticleItem({ title, desc, image, readingTime, writer,id }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className='py-2'>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Link to={`/Article/${id}`}>
                    <span className='read-more'>
                        <span>ادامه مقاله</span>
                        <LiaArrowAltCircleLeft size={25} />
                    </span>
                </Link>
            </Card.Body>

            <Card.Footer className='d-flex justify-content-between py-3'>
                <span>{writer}</span>
                <span><MdAccessTime /> {readingTime} دقیقه</span>
            </Card.Footer>
        </Card>
    )
}

export default ArticleItem;