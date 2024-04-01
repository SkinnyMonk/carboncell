import { Grid } from '@mui/material';
import './App.css';
import CryptoPriceCard from './component/CryptoPriceCard/CryptoPriceCard';
import PopulationChart from './component/PopulatoinChart/PopulationChart';
import Sidebar from './component/Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import Header from './component/Header/Header';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 800);
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 800);

    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className="app">
      {/* sidebar implementation is using hover for smaller screens cause collapsing it was not very ui friendly */}
      <Grid container flexWrap={"nowrap"}>
        <Grid item xs
          {...(isSidebarOpen
            ? { sm: 3.4, md: 3.1, lg: 2.9, xl: 2.5 }
            : { sm: 1, md: 0.5, lg: 0.5, xl: 0.5 })}
        >
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </Grid>
        <Grid
          item
          xs

        >
          <Header />
          <PopulationChart />
          <CryptoPriceCard />
        </Grid>
      </Grid>


    </div>
  );
}

export default App;
