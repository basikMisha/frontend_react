import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

import { MenuOutlined } from "@mui/icons-material";
import { useStyles } from "./styles";
import FlexBetween from "../flexBetween";
import { ITopBarProps } from "../../common/types/topbar";
import ThemeSwitcher from "../theme-switcher";
import SearchBar from "../search-bar";

const TopBarComponent: React.FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const { isOpen, setIsOpen, isNonMobile } = props;

    const { classes } = useStyles();
    const user = sessionStorage.getItem('name');

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar className={classes.toolBar}>
                <Grid container sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuOutlined
                                sx={{
                                    cursor: 'pointer',
                                    mr: '10px'
                                }}
                                onClick={() => setIsOpen(!isOpen)} />
                            <Typography variant="h4">Welcome, {user}</Typography>
                        </FlexBetween>
                    </Grid>
                    {isNonMobile &&
                        <Grid sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }} item sm={9} lg={9}>
                            <ThemeSwitcher/>
                            <SearchBar/>
                        </Grid>}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default TopBarComponent;