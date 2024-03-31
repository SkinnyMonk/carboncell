import React from 'react'
import { Avatar, Card, Badge } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
function ProfileCard({ isSidebarOpen }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }} >
            {isSidebarOpen ?
                <Card variant='outlined' sx={{ display: 'flex', justifyContent: 'space-between', background: 'rgb(51,51,51)', borderRadius: '5%', padding: '16px 8px', width: '100%', margin: '0 10px' }}  >
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Badge sx={{
                            "& .MuiBadge-badge": {
                                backgroundColor: 'rgb(89,178,66)',
                            }
                        }} variant="dot" overlap="circular">
                            <Avatar sx={{ width: 30, height: 30 }} alt="Brooklyn Simmons" src={process.env.PUBLIC_URL + '/Image/nitin.jpg'} />
                        </Badge>
                        <div style={{ margin: '0 auto ' }}>
                            <h5 style={{ color: 'white', marginBlock: '0' }}>Brooklyn Simmons</h5>
                            <h6 style={{ color: 'grey', marginBlock: '0' }}>brooklyn@simmons.com</h6>
                        </div>
                    </div>
                    <MoreVertIcon style={{ color: 'grey' }} />

                </Card> :

                <Badge variant="dot" overlap="circular"
                    sx={{
                        "& .MuiBadge-badge": {
                            backgroundColor: 'rgb(89,178,66)',
                        }
                    }}
                >

                    <Avatar sx={{ width: 30, height: 30 }} alt="Brooklyn Simmons" src={process.env.PUBLIC_URL + '/Image/nitin.jpg'} />
                </Badge>
            }


        </div>
    )
}

export default ProfileCard