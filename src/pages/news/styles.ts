import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"



export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        root: {
            padding: '32px',
            '& a': {
                textDecoration: 'none',
                color: `${
                    theme.palette.mode === 'light' ?
                        colors.black.DEFAULT : colors.white.DEFAULT
                }`
            }
        },
        newsBlock: {
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            marginBottom: 32,
            minHeight: 270,
            border: `1px solid ${colors.borderColor}`,
            borderRadius: 12,
            '& .MuiPaper-root': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                backgroundImage: 'none',
            },
        },
        newsImage: {
            maxWidth: '100%',
            height: 'auto',
        }
    }
})