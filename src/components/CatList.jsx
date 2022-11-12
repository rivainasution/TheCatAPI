import { useState } from "react";
import { Badge, Button, Col, Modal, Row} from "react-bootstrap";
import Gambar from "./PrintGambar";

function CatList({item: { 
        id, 
        name, 
        origin,
        country_codes,
        description,
        cfa_url,
        vetstreet_url,
        vcahospitals,
        temperament,
        wikipedia_url,
        rare,
        life_span,
        indoor,
        adaptability,
        affection_level,
        child_friendly,
        dog_friendly,
        energy_level,
        grooming,
        health_issues,
        intelligence,
        shedding_level,
        social_needs,
        stranger_friendly,
        vocalisation,
        experimental,
        hairless,
        natural,
        rex,
        suppressed_tail,
        short_legs,
        hypoallergenic,
        lap
    }}) {
        const [lgShow, setLgShow] = useState(false);
        
        //Show Modal
        const clickHandler = () => {
              setLgShow(true);
        }
        
        //Check Rarity
        const rareHandle = () => {
            if(rare == 0){
                return (<Badge bg="secondary">Rarity: {rare}</Badge>);
            }
            if(rare == 2){
                return (<Badge bg="primary">Rarity: {rare}</Badge>);
            }
            if(rare == 3){
                return (<Badge bg="info">Rarity: {rare}</Badge>);
            }
            if(rare == 4){
                return (<Badge bg="danger">Rarity: {rare}</Badge>);
            }
            if(rare == 5){
                return (<Badge bg="warning">Rarity: {rare}</Badge>);
            }
        }

        //Show star
        const starHandling = (number) =>{
            let starTotal = 5;
            
            let star = Array.apply(null,{
                length: number
            }).map((e,i) => (
                <span>&#9733;</span>
            ))
            let starNull = Array.apply(null,{
                length: (starTotal-number)
            }).map((e,i) => (
                <span>&#9734;</span>
            ))
            let all = Array.apply(null,{
                length: 1
            }).map((e,i) => (
                <span>{star}{starNull}</span>
            ))
            return (all);
        }

    return (
        <>  
            {/* Cat Card */}
            <div class="my-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="d-flex flex-column border border-light rounded cards img-hover">
                  <div>
                    <Gambar id={id} />
                  </div>
                  <div class="p-2">
                    <Row>
                        <Col md lg={5}>
                            <Badge bg="secondary">{origin}</Badge>
                        </Col>
                        <Col md lg={7}>
                            <div className='d-flex flex-row'>
                            <Badge bg="secondary" className="mx-2">{country_codes}</Badge>
                            {rareHandle()}
                            </div>
                        </Col>
                    </Row>
                    <h5 class="card-title fw-bold mt-3 mb-2">{name}</h5>
                    <div className="d-flex justify-content-between flex-row">
                        <h6>Affection Level: </h6>
                        <h6>{starHandling(affection_level)}</h6>
                    </div>
                    <div className="d-flex justify-content-between flex-row">
                        <h6>Adaptability: </h6>
                        <h6>{starHandling(adaptability)}</h6>
                    </div>
                    <div className="d-flex justify-content-between flex-row">
                        <h6>Energy Level: </h6>
                        <h6>{starHandling(energy_level)}</h6>
                    </div>
                    <div className="d-flex justify-content-between flex-row">
                        <h6>Intelligence: </h6>
                        <h6>{starHandling(intelligence)}</h6>
                    </div>
                    <div className="d-flex justify-content-between flex-row">
                        <h6>Vocalisation: </h6>
                        <h6>{starHandling(vocalisation)}</h6>
                    </div>
                  </div> 
                  <Button variant='outline-primary' onClick={() => clickHandler()}
                  >Detail</Button>
                </div>		
            </div>


            {/* Modal Click */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                

                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className="fw-bold">Details Cat</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md className='mb-3'>
                            <Row className="py-2">
                                <Gambar id={id} />
                            </Row>
                            <Row className="py-2">
                                <h5 className="fw-bold">{name}</h5>
                            </Row>
                            <Row className="py-1">
                                <Col>
                                <Badge bg="success">
                                    <a className="decor" href={wikipedia_url}>Wikipedia</a>
                                </Badge>
                                <Badge bg="primary" className="mx-2">
                                    <a className="decor" href={cfa_url}>CFA</a>
                                </Badge>
                                <Badge bg="danger">
                                    <a className="decor" href={vetstreet_url}>VetStree</a>
                                </Badge>
                                <Badge bg="warning" className="mx-2">
                                    <a className="decor" href={vcahospitals}>VCA Hospitals</a>
                                </Badge>
                                </Col>
                            </Row>
                            <Row className="py-1">
                                <h6 className="fw-bold">Description</h6>
                                <p className="text">{description}</p>
                            </Row>
                            </Col>

                            <Col md>
                            <Row className="py-1">
                                <h6 className="fw-bold">Temperament</h6>
                                <p className="text">{temperament}</p>
                            </Row>
                            <Row className="py-1">
                                <h6 className="fw-bold">Cats Statistic</h6>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Life Span </h6>
                                        <h6>{life_span}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Indoor: </h6>
                                        <h6>{starHandling(indoor)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Lap</h6>
                                        <h6>{starHandling(lap)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Adaptability</h6>
                                        <h6>{starHandling(adaptability)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Affection level</h6>
                                        <h6>{starHandling(affection_level)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Child Friendly</h6>
                                        <h6>{starHandling(child_friendly)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Dog Friendly</h6>
                                        <h6>{starHandling(dog_friendly)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Energy Level</h6>
                                        <h6>{starHandling(energy_level)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Grooming</h6>
                                        <h6>{starHandling(grooming)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>health Issues</h6>
                                        <h6>{starHandling(health_issues)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>inteligence</h6>
                                        <h6>{starHandling(intelligence)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Shedding Level</h6>
                                        <h6>{starHandling(shedding_level)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Social Needs</h6>
                                        <h6>{starHandling(social_needs)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Stranger Friendly</h6>
                                        <h6>{starHandling(stranger_friendly)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Vocalisation</h6>
                                        <h6>{starHandling(vocalisation)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Experimental</h6>
                                        <h6>{starHandling(experimental)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Hairless</h6>
                                        <h6>{starHandling(hairless)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Natural</h6>
                                        <h6>{starHandling(natural)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Rex</h6>
                                        <h6>{starHandling(rex)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Suppressed tails</h6>
                                        <h6>{starHandling(suppressed_tail)}</h6>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Short legs</h6>
                                        <h6>{starHandling(short_legs)}</h6>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="d-flex justify-content-between flex-row">
                                        <h6>Hypoallergenic </h6>
                                        <h6>{starHandling(hypoallergenic)}</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CatList;
