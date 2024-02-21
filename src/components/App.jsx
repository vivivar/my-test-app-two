/* 
Viviana Vargas
Feb-19th
Interview Test for GitHub, APIs and MUI
*/


import React, { useState } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { fetchNASAData, fetchDogData, fetchNewsData } from './api'; // Import specific functions

const AppBarComponent = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          My MUI Test Application
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

const Home = () => {
  const [apodData, setApodData] = useState(null);
  const [dogData, setDogData] = useState(null); // State for dog data
  const [newsData, setNewsData] = useState(null); // State for news data

  const handleNewsButtonClick = async () => {
    try {
      const response = await fetchNewsData();
      setNewsData(response);
      setApodData(null);
      setDogData(null);
    } catch (error) {
      console.error('Error fetching News data:', error.message);
    }
  };

  const handleAPODButtonClick = async () => {
    try {
      const response = await fetchNASAData();
      setApodData(response);
      setDogData(null);
      setNewsData(null);
    } catch (error) {
      console.error('Error fetching APOD data:', error.message);
    }
  };

  const handleDogButtonClick = async () => {
    try {
      const response = await fetchDogData();
      setDogData(response);
      setApodData(null);
      setNewsData(null);
    } catch (error) {
      console.error('Error fetching Dog data:', error.message);
    }
  };

  return (
    <div>
      <AppBarComponent />

      <Container>
        <Box display="flex" justifyContent="center" marginBottom="20px">
          <Box marginRight="10px" marginBottom="10px">
            <Button variant="contained" onClick={handleNewsButtonClick}>
              Show me today's Top News
            </Button>
          </Box>
          <Box marginRight="10px" marginBottom="10px">
            <Button variant="contained" onClick={handleAPODButtonClick}>
              Show me the Astronomy Picture of The Day
            </Button>
          </Box>
          <Box marginRight="10px" marginBottom="10px">
            <Button variant="contained" onClick={handleDogButtonClick}>
              Show me a Random Dog Photo
            </Button>
          </Box>
        </Box>

        {newsData && (
          <Box marginTop="20px">
            {newsData.map((article, index) => (
              <div key={index}>
                <Typography variant="h6">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </Typography>
                <Typography>{article.description}</Typography>
                <Typography style={{ marginTop: '10px' }}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.url}
                  </a>
                </Typography>
                <hr />
              </div>
            ))}
          </Box>
        )}

        {apodData && (
          <Box marginTop="20px">
            <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
            <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
              {apodData.title} - {apodData.date}
            </Typography>
            <Typography style={{ marginTop: '10px' }}>{apodData.explanation}</Typography>
          </Box>
        )}

        {dogData && (
          <Box marginTop="20px" display="flex" justifyContent="center">
            <img src={dogData.message} alt="Random Dog" style={{ maxWidth: '100%' }} />
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Home;
