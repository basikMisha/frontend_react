import { Grid, IconButton, useTheme } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import { useStyles } from "./styles";

const ThemeSwitcher: React.FC = (): JSX.Element => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext);
    const { classes } = useStyles();
    return (
        <Grid className={classes.iconBlock}>
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
    )
}

export default ThemeSwitcher;