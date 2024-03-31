import HomeIcon from '@mui/icons-material/Home';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';

export const navData =
    [
        { name: 'Home', icon: <HomeIcon /> },
        { name: 'Organization', icon: <CorporateFareIcon /> },
        { name: 'Assets', icon: <ViewInArIcon /> },
        { name: 'Trade', icon: <SwapVertIcon /> },
        { name: 'History', icon: <HourglassEmptyIcon /> },
        { name: 'Wallet', icon: <AccountBalanceWalletIcon /> },
    ];




export const accountData =
    [
        { name: 'Notifications', icon: <NotificationsIcon />, count: Math.floor(Math.random() * 50) + 1 },
        { name: 'Support', icon: <HelpOutlineIcon /> },
        { name: 'Settings', icon: <SettingsIcon /> },
    ];