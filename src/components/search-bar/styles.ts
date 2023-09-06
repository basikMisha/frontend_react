import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"

export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        searchBlock: {
            display: 'flex',
            borderRadius: '8px',
            backgroundColor: `${colors.primary[600]}`,
        },
        searchIcon: {
            '&:hover': {
                'backgroundColor': 'transparent',
            }
        },
        searchInput: {
            padding: '8px 16px',
        }
    }
})