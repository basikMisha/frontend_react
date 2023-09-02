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
            paddingBottom: '30px',
        },
        cardPrice: {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: '48px',
        },
        priceTrend: {
            width: '20%',
            display: 'flex',
            alignItems: 'center',
            padding: '2px',
            borderRadius: '4px',
            color: colors.secondary.DEFAULT,
            fontWeight: 400,
            fontSize: 18,
            lineHeight: '21px'
        },
        trendUp: {
            backgroundColor: '#A9FFA7',
            color: '#037400'
        },
        trendDown: {
            backgroundColor: '#FFA7A7',
            color: '#740000'
        },
        lineChart: {
            backgroundColor: `${
                theme.palette.mode === 'light' ?
                colors.primary.DEFAULT : colors.primary[600]
            }`,
            padding: '20px 16px',
            minHeight: '270px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: '12px',
        },
        areaChart: {
            marginBottom: '32px',
        }
    }
})