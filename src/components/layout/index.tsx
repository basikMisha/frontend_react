import { Outlet, useLocation } from "react-router-dom";
import TopBarComponent from "../top-bar";
import { Box, useMediaQuery } from "@mui/material";
import SidebarComponent from "../sidebar";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../utils/hook";
import { getPublicUser } from "../../store/thunks/auth";

const LayoutComponent: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isNonMobile = useMediaQuery('(min-width:760px)');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPublicUser());
    }, [dispatch]);
    
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
                                isNonMobile={isNonMobile}
                            />
                            <Outlet/>
                        </Box>
                    </Box>
                </>
            )
    )
}

export default LayoutComponent;