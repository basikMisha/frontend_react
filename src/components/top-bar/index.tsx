import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";
import { useStyles } from "./styles";

const TopBarComponent = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useContext(ColorModeContext);
    const {classes} = useStyles();
    const user = useAppSelector((state) => state.auth.user );
    console.log(user.email);
    return (
        <Box className={classes.root}>
            <Grid>Welcome </Grid>
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
        </Box>
    )
}

export default TopBarComponent;