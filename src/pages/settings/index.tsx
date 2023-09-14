import { Box, Tabs, Tab, Grid, useTheme, } from '@mui/material';
import React, { useState, useEffect } from 'react'
import TabPanel from '../../components/tab-panel';
import { tabProps } from '../../utils/other';
import { tokens } from '../../theme';
import { useStyles } from './styles';
import UserInfoComponent from '../../components/settings-user-info';
import { useAppDispatch } from '../../utils/hook';
import { getPublicUser } from '../../store/thunks/auth';
import ChangePasswordComponent from '../../components/change-password';


const SettingsPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { classes } = useStyles();
    const [value, setValue] = useState(0);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch]);
    
    const handleChange = (e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Grid className={classes.root}>
            <Box  sx={{ width: '100%' }}>
                <Box className={classes.tabsContainer}>
                    <Tabs
                        value={value}
                        centered
                        textColor='secondary'
                        
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: colors.blue
                            }
                        }}
                        onChange={handleChange}
                        aria-label="settings-tabs">
                        <Tab label="Данные пользователя" {...tabProps(0)} />
                        <Tab label="Сменить пароль" {...tabProps(1)} />
                        <Tab label="Удалить аккаунт" {...tabProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <UserInfoComponent/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ChangePasswordComponent/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
        </Grid>
    )
}

export default SettingsPage;