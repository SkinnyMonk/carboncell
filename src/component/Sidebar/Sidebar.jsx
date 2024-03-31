import { InputAdornment, TextField } from '@mui/material';
import { navData, accountData } from './NavLinkData';
import SearchIcon from '@mui/icons-material/Search';
import NavLink from '../NavLink/NavLink';
import ProfileCard from '../ProfileCard/ProfileCard';
import MenuIcon from '@mui/icons-material/Menu';
import './Sidebar.css';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {

    const showMenu = window.innerWidth > 800;

    return (
        <div id="header" className={isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}>
            <>
                <div className='headerLogo'>

                    {isSidebarOpen ? <img src={process.env.PUBLIC_URL + '/Image/name.png'} alt="Carbon Cell" />
                        : <img src={process.env.PUBLIC_URL + '/Image/logo.png'} alt="Carbon Cell" />
                    }

                    {showMenu && <MenuIcon onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{ margin: isSidebarOpen ? '0' : 'auto' }} />}

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
