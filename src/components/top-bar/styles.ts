import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"



export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '32px 24px',
            backgroundColor: colors.primary.DEFAULT,
            maxHeight: '95px',
            borderBottom: `1px solid ${colors.borderColor}`
        },
        iconBlock: {
            display: 'flex',
            alignItems: 'center',
            paddingRight: '28px',
            borderRight: `1px solid ${colors.borderColor}`,
        },
        searchBlock: {
            display: 'flex',
            borderRadius: '8px',
            marginLeft: '28px',
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