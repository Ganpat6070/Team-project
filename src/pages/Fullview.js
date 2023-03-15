import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { CryptoState } from '../Context';
import { SingleCoin } from '../config/api';
import CoinInfo from '../components/CoinInfo';
import { Typography } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

import '../components/Fullview.css';

const Fullview = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className='sideContainer'>
      <div className='coindata'>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />  
        <Typography variant="h3" className='coinHeading'>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className='descriptionStyle'>
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </Typography>
      </div>
      <CoinInfo coin={coin}/>
    </div>
    )
}

export default Fullview