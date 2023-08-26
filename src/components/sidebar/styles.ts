import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"


export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        sideLogo: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '30px 15px',
            cursor: 'pointer',
        },
        navBlock: {
            borderBottom: `1px solid ${colors.borderColor}`,
            width: '100%',
        },
        navList: {
            marginBottom: '55px',
        },
        active: {
            backgroundColor: '#1900D5',
            color: '#FFFFFF',
            borderRadius: '4px',
        }
    }
})