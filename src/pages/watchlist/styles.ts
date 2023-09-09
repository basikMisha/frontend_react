import {makeStyles} from "tss-react/mui"
import { tokens } from "../../theme"

export const useStyles = makeStyles()((theme) => {
    const colors = tokens(theme.palette.mode);
    return {
        tableBlock: {
            backgroundColor: `${
                theme.palette.mode === 'light'
                    ? colors.primary.DEFAULT
                    : colors.primary[600]
            }`,
            padding: '20px 16px',
            minHeight: '270px',
            marginBottom: '25px',
            border: `1px solid ${colors.borderColor}`,
            borderRadius: '12px',
            '& .MuiPaper-root': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                backgroundImage: 'none',
            },
        },
    }
})