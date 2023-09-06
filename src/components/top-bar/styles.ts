import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"

export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // padding: '32px 24px',
            background: colors.primary.DEFAULT,
            // maxHeight: '95px',
            borderBottom: `1px solid ${colors.borderColor}`,
            boxShadow: 'none',
            
        },
        toolBar: {
            justifyContent: 'space-between',
            padding: '23px 48px'
        },
        iconBlock: {
            display: 'flex',
            alignItems: 'center',
            paddingRight: '28px',
            borderRight: `1px solid ${colors.borderColor}`,
        },
        
    }
})