import { Alert } from '@mui/material';
import React, { useState } from 'react';
import Web3 from 'web3';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
    const [feedback, setFeedback] = useState('');
    const [open, setOpen] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                const selectedAccount = accounts[0];
                setFeedback(`Connected to MetaMask with address: ${selectedAccount}`);
                setIsSuccess(true);
            } catch (error) {
                setFeedback('Error connecting to MetaMask. Please try again.');
                console.error(error);
            }
        } else {
            setFeedback('MetaMask is not installed. Please install MetaMask to connect your wallet.');
        }
        setTimeout(() => {
            setFeedback('');
        }, 5000);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', height: '170px', gap: '10px', }}>
            <Button sx={{ color: 'white', margin: '20px 50px', height: '40px' }} color='secondary' variant='outlined' onClick={connectWallet}>Connect Wallet</Button>

            {feedback && <Collapse in={open}>
                <Alert
                    severity={isSuccess ? "success" : "error"}
                    variant='outlined'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ my: '20px', mx: '50px', maxWidth: '60vw' }}
                >
                    {feedback}
                </Alert>
            </Collapse>

            }

        </div>
    );
};

export default Header;
