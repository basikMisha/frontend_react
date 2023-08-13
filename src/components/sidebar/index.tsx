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
import {
    HomeOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    LogoutOutlined
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FlexBetween from '../flexBetween';
import { navMenu } from '../../common/moks/navigate';
import SidebarLogo from '../../assets/images/sidebar/logo.svg'
import { tokens } from '../../theme';
import { useStyles } from './styles';


const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('');
    const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {classes} = useStyles();

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname]);

    const renderMenu = navMenu.map((menuItem): JSX.Element => {
        return (
            <ListItem
                key={menuItem.id}

            >
                <ListItemButton
                    onClick={() => navigate(`${menuItem.path}`)}
                    sx={{
                        px: '16px',
                        py: '8px',
                        borderRadius: '4px',
                        '&:hover': {
                            backgroundColor: '#1900D5 !important',
                            color: '#FFFFFF !important',
                            '.MuiSvgIcon-root': {
                                color: colors.white.DEFAULT
                            }
                        }
                    }}
                >
                    <ListItemIcon>
                        {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>{menuItem.name}</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    })

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
                            '.MuiDrawer-paper': {
                                color: theme.palette.secondary.main,
                                backgroundColor: theme.palette.primary.main,
                                boxSizing: 'border-box',
                                width: drawerWidth,
                                
                            }
                        }}
                    >
                        <Box className={classes.navBlock}>
                            <Box>
                                <FlexBetween>
                                    <Box
                                        onClick={() => navigate('/')}
                                        className={classes.sideLogo}
                                        >
                                        <img src={SidebarLogo} alt='logo' />
                                        <Typography
                                            variant='h1'
                                            sx={{
                                                color: theme.palette.mode === 'dark' ? colors.white.DEFAULT : colors.black.DEFAULT
                                            }}
                                        >
                                            App
                                        </Typography>
                                    </Box>
                                    {!isNonMobile && (
                                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                                            <ChevronLeftOutlined />
                                        </IconButton>
                                    )}
                                </FlexBetween>
                            </Box>
                            <List className={classes.navList}>
                                {
                                    renderMenu
                                }
                            </List>
                        </Box>
                        <Box
                            width='100%'
                        >
                            <List>
                                <ListItem>
                                    <ListItemButton 
                                        sx={{
                                            px: '16px',
                                            py: '8px',
                                            borderRadius: '4px',
                                            '&:hover': {
                                                backgroundColor: '#1900D5 !important',
                                                color: '#FFFFFF !important',
                                                '.MuiSvgIcon-root': {
                                                    color: colors.white.DEFAULT
                                                }
                                            }
                                        }}
                                    >
                                        <ListItemIcon>
                                            <LogoutOutlined/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography>
                                                Logout
                                            </Typography>
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                )}
            </Box>
        </>
    )
}

export default SidebarComponent;