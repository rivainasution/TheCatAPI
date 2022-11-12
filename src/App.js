import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./components/Loading";
import EndMsg from "./components/EndMsg";
import CatList from "./components/CatList";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(0);

  //Infinite Scroll
  useEffect(() => {
    const getBreeds = async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds?page=0&limit=10`
      );
      const data = await res.json();
      setItems(data);
    };

    getBreeds();
  }, []);

  const fetchBreeds = async () => {
    const res = await fetch(
      `https://api.thecatapi.com/v1/breeds?page=${page}&limit=10`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const nextData = await fetchBreeds();

    setItems([...items, ...nextData]);
    if (nextData.length === 0 || nextData.length < 10) {
      sethasMore(false);
    }
    setpage(page + 1);
  };
  

  //Search
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${query}`);
      setData(res.data);
    };
    if (query.length === 3 || query.length > 0) fetchData();
  }, [query]);

  return (
    <Container className='my-5'>
      <h1 className="text-center my-3">The Cats API</h1>
        <input
          type="search"
          className="mb-5"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />

      {
        // Jika panjang query = 0 atau belum melakukan searching
        query.length == 0? 
          //Menampilkan semua kucing
          <InfiniteScroll
            dataLength={items.length} 
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={<EndMsg />}
          >
            <div class="row my-3">
              {items.map((item) => {
                return <CatList key={item.id} item={item} />;
              })}
            </div>
          
          </InfiniteScroll>
          : 
          //menampilkan kucing berdasarkan pencarian
          <InfiniteScroll
            dataLength={items.length} 
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader />}
            endMessage={<EndMsg />}
          >
            
          <div class="row my-3">
            {data.map((br) => (
              <div class="row my-3">
                {data.map((item) => {
                  return <CatList key={item.id} item={item} />;
                })}
              </div>
            ))}
          </div>
        </InfiniteScroll>
      }
    </Container>
  );
}

export default App;
