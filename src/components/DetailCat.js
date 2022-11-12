import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Carousel, Col, Container, Image, Modal, Row } from "react-bootstrap";
import Gambar from "./PrintGambar";

const DetailCat = (props) => {
    const [gambar, setGambar] = useState([]);

    useEffect(() => {
        const getGambar = async () => {
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${props.id}`);
            setGambar(res.data);
        }
        getGambar();
    },[]);

    return(
        <>
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Details Cat
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md className='mb-3'>
                        <Gambar id={props.id} />
                    </Col>
                    <Col md>
                        <Row>
                            <h5>Title Product</h5>
                        </Row>
                        <Row style={{marginBottom: '20px'}}>
                            <Col>
                                    <Badge bg="success">Mandheling</Badge>
                                    <Badge bg="warning">Medan</Badge>
                                    <Badge bg="danger">5 Star</Badge>
                                    <Badge bg="primary">Rp 85.000/kg</Badge>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="text">
                                Mandheling coffee is Arabica coffee originating from the Mandailing area, 
                                Bukit Barisan Mountains, North Sumatra. This coffee has a good thick taste, medium acidity, 
                                floral taste with a sweet finish. In William H. Ukers' book (New York, 1922), mandailing 
                                coffee is described as the finest and most expensive coffee on the international market. 
                                In 1875, Mandailing Coffee was priced at 79 Florin per Pikul.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
          </Modal.Body>
        </>
    )
}

export default DetailCat;