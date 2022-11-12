import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, Col, Container, Modal, Row, Badge, Table } from "react-bootstrap";
import Gambar from "./components/PrintGambar";
import DetailCat from "./components/DetailCat";

function App() {
  const [breeds, setBreeds] = useState ([]);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [catName, setCatName] = useState("");
  const [catAlias, setCatAlias] = useState("");
  const [catOrigin, setCatOrigin] = useState("");
  const [catCountryCode, setCatCountryCode] = useState("");
  const [catDescription, setCatDescription] = useState("");
  const [catCfaUrl, setCatCfaUrl] = useState("");
  const [catVetStreetUrl, setCatVetStreetUrl] = useState("");
  const [catVcaHospitals, setCatVcaHospital] = useState("");
  const [catTemperament, setCatTemperament] = useState("");
  const [catWikipediaUrl, setCatWikipediaUrl] = useState("");
  const [catRare, setCatRare] = useState("");
  const [catLifeSpan, setCatLifeSpan] = useState("");
  const [catIndoor, setCatIndoor] = useState("");
  const [catAdaptability, setCatAdaptability] = useState("");
  const [catAffectionLevel, setCatAffectionLevel] = useState("");
  const [catChildFriendly, setCatChildFriendly] = useState("");
  const [catDogFriendly, setCatDogFriendly] = useState("");
  const [catEnergyLevel, setCatEnergyLevel] = useState("");
  const [catGrooming, setCatGrooming] = useState("");
  const [catHealthIssues, setCatHealthIssues] = useState("");
  const [catIntelligence, setCatIntelligence] = useState("");
  const [catSheddingLevel, setCatSheddingLevel] = useState("");
  const [catSocialNeeds, setCatSocialNeeds] = useState("");
  const [catStrangerFriendly, setCatStrangerFriendly] = useState("");
  const [catVocalisation, setCatVocalisation] = useState("");
  const [catExperimental, setCatExperimental] = useState("");
  const [catHairless, setCatHairless] = useState("");
  const [catNatural, setCatNatural] = useState("");
  const [catRex, setCatRex] = useState("");
  const [catSuppressedTail, setCatSuppressedTail] = useState("");
  const [catShortLegs, setCatShortLegs] = useState("");
  const [catHypoallergenic, setCatHypoallergenic] = useState("");
  const [catLap, setCatLap] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://api.thecatapi.com/v1/breeds");
      setBreeds(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${query}`);
      setData(res.data);
    };
    if (query.length === 3 || query.length > 0) fetchData();
  }, [query]);

  const clickHandler = (
    idCat, 
    nameCat,
    originCat,
    country_codesCat,
    descriptionCat,
    cfa_urlCat,
    vetstreet_urlCat,
    vcahospitalsCat,
    temperamentCat,
    wikipedia_urlCat,
    rareCat,
    life_span,
    indoor,
    lap,
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
    hypoallergenics
    ) => {
      setLgShow(true);
      setCatAlias(idCat);
      setCatName(nameCat);
      setCatOrigin(originCat);
      setCatCountryCode(country_codesCat);
      setCatDescription(descriptionCat);
      setCatCfaUrl(cfa_urlCat);
      setCatVetStreetUrl(vetstreet_urlCat);
      setCatVcaHospital(vcahospitalsCat);
      setCatTemperament(temperamentCat);
      setCatWikipediaUrl(wikipedia_urlCat);
      setCatRare(rareCat);
      setCatLifeSpan(life_span);
      setCatIndoor(indoor);
      setCatLap(lap);
      setCatAdaptability(adaptability);
      setCatAffectionLevel(affection_level);
      setCatChildFriendly(child_friendly);
      setCatDogFriendly(dog_friendly);
      setCatEnergyLevel(energy_level);
      setCatGrooming(grooming);
      setCatHealthIssues(health_issues);
      setCatIntelligence(intelligence);
      setCatSheddingLevel(shedding_level);
      setCatSocialNeeds(social_needs);
      setCatStrangerFriendly(stranger_friendly);
      setCatVocalisation(vocalisation);
      setCatExperimental(experimental);
      setCatHairless(hairless);
      setCatNatural(natural);
      setCatRex(rex);
      setCatSuppressedTail(suppressed_tail);
      setCatShortLegs(short_legs);
      setCatHypoallergenic(hypoallergenics);
  }

  return (
    <>
    <Container className='my-5'>
      <h1 className="text-center my-3">The Cats API</h1>
        <input
          type="search"
          className="mb-5"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />

      {
        query.length == 0? 
          <div class="row my-3">
            {breeds.map((br) => (
              <div class="my-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="d-flex flex-column border border-light rounded cards img-hover">
                  <div>
                    <Gambar id={br.id} />
                  </div>
                  <div class="p-2">
                    <h5 class="card-title fw-bold">{br.name}</h5>
                    <h6 class="card-title">{br.origin}</h6>
                  </div> 
                  <Button variant='outline-primary' onClick={() => clickHandler(
                    br.id, 
                    br.name,
                    br.origin,
                    br.country_codes,
                    br.description,
                    br.cfa_url,
                    br.vetstreet_url,
                    br.vcahospitals,
                    br.temperament,
                    br.wikipedia_url,
                    br.rare,
                    br.life_span,
                    br.indoor,
                    br.adaptability,
                    br.affection_level,
                    br.child_friendly,
                    br.dog_friendly,
                    br.energy_level,
                    br.grooming,
                    br.health_issues,
                    br.intelligence,
                    br.shedding_level,
                    br.social_needs,
                    br.stranger_friendly,
                    br.vocalisation,
                    br.experimental,
                    br.hairless,
                    br.natural,
                    br.rex,
                    br.suppressed_tail,
                    br.short_legs,
                    br.hypoallergenic,
                    br.lap
                  )}
                  >Detail</Button>
                </div>		
              </div>
            ))}
          </div>
          : 
          <div class="row my-3">
            {data.map((br) => (
              <div class="my-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <div class="d-flex flex-column border border-light rounded cards img-hover">
                  <div>
                    <Gambar id={br.id} />
                  </div>
                  <div class="p-2">
                    <h5 class="card-title fw-bold">{br.name}</h5>
                    <h6 class="card-title">{br.origin}</h6>
                  </div> 
                  <Button variant='outline-primary' onClick={() => clickHandler(
                    br.id, 
                    br.name,
                    br.origin,
                    br.country_codes,
                    br.description,
                    br.cfa_url,
                    br.vetstreet_url,
                    br.vcahospitals,
                    br.temperament,
                    br.wikipedia_url,
                    br.rare,
                    br.life_span,
                    br.indoor,
                    br.adaptability,
                    br.affection_level,
                    br.child_friendly,
                    br.dog_friendly,
                    br.energy_level,
                    br.grooming,
                    br.health_issues,
                    br.intelligence,
                    br.shedding_level,
                    br.social_needs,
                    br.stranger_friendly,
                    br.vocalisation,
                    br.experimental,
                    br.hairless,
                    br.natural,
                    br.rex,
                    br.suppressed_tail,
                    br.short_legs,
                    br.hypoallergenic,
                    br.lap
                  )}
                  >Detail</Button>
                </div>		
              </div>
            ))}
          </div>
      }
    </Container>

    {/* --- Modal --- */}
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
                <Gambar id={catAlias} />
              </Row>
              <Row className="py-2">
                <h5 className="fw-bold">{catName}</h5>
              </Row>
              <Row className="py-1">
                <Col>
                  <Badge bg="success">
                    <a className="decor" href={catWikipediaUrl}>Wikipedia</a>
                  </Badge>
                  <Badge bg="primary" className="mx-2">
                    <a className="decor" href={catCfaUrl}>CFA</a>
                  </Badge>
                  <Badge bg="danger">
                    <a className="decor" href={catVetStreetUrl}>VetStree</a>
                  </Badge>
                  <Badge bg="warning" className="mx-2">
                    <a className="decor" href={catVcaHospitals}>VCA Hospitals</a>
                  </Badge>
                </Col>
              </Row>
              <Row className="py-1">
                <h6 className="fw-bold">Description</h6>
                <p className="text">{catDescription}</p>
              </Row>
            </Col>

            <Col md>
            <Row className="py-1">
                <h6 className="fw-bold">Temperament</h6>
                <p className="text">{catTemperament}</p>
              </Row>
              <Row className="py-1">
                <h6 className="fw-bold">Cats Statistic</h6>
              </Row>
              <Table responsive hover>
                <tbody>
                  <tr>
                    <th>Life Span</th>
                    <td>:</td>
                    <td>{catLifeSpan}</td>
                    <td></td>
                    <th>Indoor</th>
                    <td>:</td>
                    <td>{catIndoor}</td>
                  </tr>
                  <tr>
                    <th>Lap</th>
                    <td>:</td>
                    <td>{catLap}</td>
                    <td></td>
                    <th>Adaptability</th>
                    <td>:</td>
                    <td>{catAdaptability}</td>
                  </tr>
                  <tr>
                    <th>Affection Level</th>
                    <td>:</td>
                    <td>{catAffectionLevel}</td>
                    <td></td>
                    <th>Child Friendly</th>
                    <td>:</td>
                    <td>{catChildFriendly}</td>
                  </tr>
                  <tr>
                    <th>Dog Friendly</th>
                    <td>:</td>
                    <td>{catDogFriendly}</td>
                    <td></td>
                    <th>Energy Level</th>
                    <td>:</td>
                    <td>{catEnergyLevel}</td>
                  </tr>
                  <tr>
                    <th>Grooming</th>
                    <td>:</td>
                    <td>{catGrooming}</td>
                    <td></td>
                    <th>Health Issues</th>
                    <td>:</td>
                    <td>{catHealthIssues}</td>
                  </tr>
                  <tr>
                    <th>Intelligence</th>
                    <td>:</td>
                    <td>{catIntelligence}</td>
                    <td></td>
                    <th>Shedding Level</th>
                    <td>:</td>
                    <td>{catSheddingLevel}</td>
                  </tr>
                  <tr>
                    <th>Social Needs</th>
                    <td>:</td>
                    <td>{catSocialNeeds}</td>
                    <td></td>
                    <th>Stranger Friendly</th>
                    <td>:</td>
                    <td>{catStrangerFriendly}</td>
                  </tr>
                  <tr>
                    <th>Vocalisation</th>
                    <td>:</td>
                    <td>{catVocalisation}</td>
                    <td></td>
                    <th>Experimental</th>
                    <td>:</td>
                    <td>{catExperimental}</td>
                  </tr>
                  <tr>
                    <th>Hairless</th>
                    <td>:</td>
                    <td>{catHairless}</td>
                    <td></td>
                    <th>Natural</th>
                    <td>:</td>
                    <td>{catNatural}</td>
                  </tr>
                  <tr>
                    <th>Rex</th>
                    <td>:</td>
                    <td>{catRex}</td>
                    <td></td>
                    <th>Suppressed Tail</th>
                    <td>:</td>
                    <td>{catSuppressedTail}</td>
                  </tr>
                  <tr>
                    <th>Short Legs</th>
                    <td>:</td>
                    <td>{catShortLegs}</td>
                    <td></td>
                    <th>Hypoallergenic</th>
                    <td>:</td>
                    <td>{catHypoallergenic}</td>
                  </tr>
                  <tr>
                    <th>Rarity</th>
                    <td>:</td>
                    <td>{catRare}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>  
          </Row>
        </Modal.Body>
    </Modal>
    </>
  );
}

export default App;
