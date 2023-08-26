import { makeStyles } from "tss-react/mui"
import { tokens } from "../../theme"


export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            overflowX: 'hidden',
            padding: '20px'
        },
        form: {
            flex: 1,
        },
        loginFormText: {
            color: colors.blue,
            cursor: 'pointer',
        }
    }
})