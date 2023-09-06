import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"

export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        iconBlock: {
            display: 'flex',
            alignItems: 'center',
            paddingRight: '28px',
            // borderRight: `1px solid ${colors.borderColor}`,
        },
    }
})