import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, Container, Image } from "react-bootstrap";

const Gambar = (props) => {
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
            {/* Menampilkan Gambar KuCing */}
            {gambar.map((gmbr) => (
                <div key={gmbr.id}>
                    <Image 
                        className="d-block w-100"
                        src={gmbr.url}
                        alt="Cat"
                    />
                </div>
            ))} 
        </>
    )
}

export default Gambar;