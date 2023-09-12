import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"



export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            padding: '32px',
        },
        tabsContainer: {
            borderBottom: `1px solid ${colors.borderColor}`
        },
    }
})