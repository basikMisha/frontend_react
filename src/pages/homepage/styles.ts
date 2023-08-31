import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"



export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            flexGrow: 1,
            padding: 32,
        },
        assetName: {
            fontSize: 25,
            fontWeight: 600,
            lineHeight: '30px',
            textTransform: 'capitalize'
        },
        itemDetails: {
            display: 'flex',
            height: '80%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '20px',
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: '48px',
        },
        cardCap: {
            color: colors.secondary.DEFAULT,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '21px'
        }
    }
})