import React from 'react'
import { AppBar, Container, Toolbar, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

import './Header.css';
import { CryptoState } from '../Context';

const Header = () => {

  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  return (
      <AppBar color="grey" position='static'>
        <Container>
          <Toolbar>
            <div>
              <h1 className='title'><Link to='/'>Crypto World</Link></h1>
            </div>
            <Select variant='outlined'
              style={{
                width: 200,
                height: 50,
                margin: 10,
                padding: 10,
                borderRadius: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='INR'>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Header