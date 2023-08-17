import { Outlet, useLocation } from "react-router-dom";
import TopBarComponent from "../top-bar";
import { Box, useMediaQuery } from "@mui/material";
import SidebarComponent from "../sidebar";
import { useState } from "react";

const LayoutComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:600px)');
    return (
        location.pathname === '/login' || location.pathname === '/register' ?
            (
                <>
                    <Outlet/>
                </>
            ) : (
                <>
                    <Box 
                        display={isNonMobile ? 'flex' : 'block'}
                        justifyContent='space-between'
                        width='100%'
                        height='100%'
                    >
                        <SidebarComponent
                            isNonMobile={isNonMobile}
                            drawerWidth='250px'
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <Box sx={{
                            display: 'flex',
                            flexGrow: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}>
                            <TopBarComponent
                                isOpen={isOpen}
                                setIsOpen={setIsOpen} 
                            />
                            <Outlet/>
                        </Box>
                    </Box>
                </>
            )
    )
}

export default LayoutComponent;