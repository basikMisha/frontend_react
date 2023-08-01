import { Box, Grid, IconButton, InputBase, useTheme } from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import  NotificationsNoneIcon  from "@mui/icons-material/NotificationsNone";
import { ColorModeContext, tokens } from "../../theme";
import { useContext } from "react";

const TopBarComponent = () => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useContext(ColorModeContext);
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 4,
            py: 3,
        }}
        >
            <Grid>Welcome</Grid>
            <Box display='flex'>
                <Grid 
                sx={{
                    pr: '28px',
                    borderRight: `1px solid ${colors.borderColor}`
                }}
                onClick={colorMode.toggleColorMode}>
                    <IconButton 
                        sx={{
                            mr: '40px'
                        }}
                    >
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon/>
                    </IconButton>
                </Grid>
                <Grid sx={{
                    display: 'flex',
                    backgroundColor: `${colors.primary[600]}`,
                    borderRadius: 2,
                    ml: '28px',

                }}>
                    <IconButton sx={{
                        '&:hover': {background: 'transparent'}
                    }}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase 
                        sx={{
                            px: '16px',
                            py: '8px',
                        }}
                        placeholder="Поиск"
                    />
                </Grid>
            </Box>
        </Box>
    )
}

export default TopBarComponent;