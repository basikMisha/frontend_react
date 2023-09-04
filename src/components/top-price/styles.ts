import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"

export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        priceUp: {
            color: '#A9FFA7',
        },
        priceDown: {
            color: '#FFA7A7',
        },
    }
})