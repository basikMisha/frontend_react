import {
    Box, 
    Drawer, 
    Divider, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText,
    ListItemIcon,
    Typography,
    useTheme
} from '@mui/material';
import {HomeOutlined, 
    ChevronLeftOutlined, 
    ChevronRightOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
    LogoutOutlined 
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FlexBetween from '../flexBetween';

const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('');
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])
    return (
        <>
            <Box component='nav'>
                {isOpen && (
                    <Drawer
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        variant='persistent'
                        anchor='left'
                        sx={{
                            width: drawerWidth,
                            '&.MuiDrawer-paper': {
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.primary.main,
                                boxSizing: 'border-box',
                                width: drawerWidth,
                            }
                        }}
                    >
                        <Box width='100%'>
                            <Box>
                                <FlexBetween>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}>
                                        <Typography>
                                            Demo App
                                        </Typography>
                                    </Box>
                                    {!isNonMobile && (
                                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                                            <ChevronLeftOutlined/>
                                        </IconButton>
                                    )}
                                </FlexBetween>
                            </Box>
                        </Box>
                    </Drawer>
                )}
            </Box>
        </>
    )
}

export default SidebarComponent;