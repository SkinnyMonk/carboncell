import { Avatar, Badge } from '@mui/material';
import { useState } from 'react'

function NavLink({ navItem, isSidebarOpen, textColor }) {
    const [isMouseInside, setIsMouseInside] = useState(false);
    return (
        <div className='navLink' style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', height: '6vh', div: {
                h5: {
                    color: textColor || 'white'
                }
            }
        }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'green'; setIsMouseInside(true) }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; setIsMouseInside(false) }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {(navItem.count && !isSidebarOpen) ?
                    <Badge sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: 'rgb(89,178,66)',
                        }
                    }} badgeContent={navItem.count} overlap="circular">
                        <div >
                            {navItem.icon}
                        </div>
                    </Badge> :

                    <div >
                        {navItem.icon}
                    </div>
                }
                {isSidebarOpen ? <h5 style={{ color: !isMouseInside ? textColor : '' }}
                >{navItem.name}</h5> : null}
            </div>

            <div>

                {navItem.count && isSidebarOpen && <Avatar sx={{ background: 'rgb(89,178,66)', width: 28, height: 24 }} variant="rounded">
                    <span style={{ fontSize: '12px', color: '#000', fontWeight: 500 }}>
                        {navItem.count}
                    </span>
                </Avatar>
                }
            </div>


        </div>
    )
}

export default NavLink