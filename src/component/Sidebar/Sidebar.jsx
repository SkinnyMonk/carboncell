import { IconButton, InputAdornment, TextField } from '@mui/material';
import { navData, accountData } from './NavLinkData';
import SearchIcon from '@mui/icons-material/Search';
import NavLink from '../NavLink/NavLink';
import ProfileCard from '../ProfileCard/ProfileCard';
import { useState, useEffect } from 'react';
import './Sidebar.css';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {

    const [showMenu, setShowMenu] = useState(isSidebarOpen);

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="header"
            style={{ minWidth: isSidebarOpen ? '240px' : '60px' }}
            onMouseEnter={() => {
                if (showMenu) {
                    setIsSidebarOpen(true);
                }
            }}
            onMouseLeave={() => {
                if (showMenu) {
                    setIsSidebarOpen(false);
                }
            }}  >
            <>
                <div className='headerLogo'>

                    {isSidebarOpen ? <img src={process.env.PUBLIC_URL + '/Image/name.png'} alt="Carbon Cell" />
                        : <img src={process.env.PUBLIC_URL + '/Image/logo.png'} alt="Carbon Cell" />
                    }



                </div>

                {isSidebarOpen ? <TextField
                    id="outlined-basic"
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                        style: { color: 'white' }
                    }}
                    variant="outlined"
                    sx={{ color: 'white', background: 'rgb(51,51,51)', borderRadius: 1, margin: '2%', width: '96%' }}
                /> :
                    null
                }
            </>


            <div style={{ margin: '20px 16px 0 16px' }}>
                {navData.map((item, index) => (
                    <div key={index}>
                        <NavLink navItem={item} isSidebarOpen={isSidebarOpen} />
                    </div>
                ))}
            </div>

            <div style={{ margin: '20px 16px 0 16px' }} >
                {accountData.map((item, index) => (
                    <div key={index}>
                        <NavLink navItem={item} isSidebarOpen={isSidebarOpen} textColor="grey" />
                    </div>
                ))}
            </div>

            <ProfileCard isSidebarOpen={isSidebarOpen} />
        </div>
    );
}

export default Sidebar;
