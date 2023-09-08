import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"

export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            padding: '32px',
            alignItems: 'center',
        },
        card: {
            display: 'flex',
            justifyContent: 'center',
        },
        cardItem: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            width: '100%',
            maxWidth: '500px',
            minHeight: '185px',
            marginBottom: '25px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: '12px',
        },
        trendUp: {
            color: '#A9FFA7',
        },
        trendDown: {
            color: '#FFA7A7',
        },
    }
})