import { AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { MenuOutlined } from "@mui/icons-material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import { useStyles } from "./styles";
import FlexBetween from "../flexBetween";
import { ITopBarProps } from "../../common/types/topbar";

const TopBarComponent: React.FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const {isOpen, setIsOpen} = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useContext(ColorModeContext);
    const {classes} = useStyles();
    const user = sessionStorage.getItem('name');
    
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolBar}>
                <FlexBetween>
                    <MenuOutlined 
                        sx={{
                            cursor: 'pointer',
                            mr: '10px'
                        }}
                        onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant="h4">Welcome, {user}</Typography>
                </FlexBetween>
                <Box display='flex'>
                <Grid className={classes.iconBlock}
                >
                    <IconButton
                        onClick={colorMode.toggleColorMode}
                        sx={{
                            mr: '40px',
                        }}
                    >
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon />
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock}>
                    <IconButton className={classes.searchIcon}>
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className={classes.searchInput}
                        placeholder="Поиск"
                    />
                </Grid>
            </Box>
            </Toolbar>
        </AppBar>
        // <Box className={classes.root}
        //      sx={{
        //         flexGrow: 1,
        //      }}
        // >
        //     <Grid>Welcome </Grid>
            
        // </Box>
    )
}

export default TopBarComponent;