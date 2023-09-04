import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ISingleAsset } from "../../common/types/assets";
import { useStyles } from "./styles";

const TopPriceComponent = (props: any) => {
    const { classes } = useStyles();
    const { assets } = props;
    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
    ) {
        return { name, calories, fat, carbs };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Изменения в (%)</TableCell>
                        <TableCell align="right">Изменения в ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((elem: any) => (
                        <TableRow
                            key={elem.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {elem.name}
                            </TableCell>
                            <TableCell align="right">{elem.current_price}</TableCell>
                            <TableCell
                                className={
                                    elem.price_change_percentage_24h > 0
                                        ? `${classes.priceUp}`
                                        : `${classes.priceDown}`
                                }
                                align="right">
                                {elem.price_change_percentage_24h.toFixed(2)}
                            </TableCell>
                            <TableCell
                                className={
                                    elem.price_change_24h > 0
                                        ? `${classes.priceUp}`
                                        : `${classes.priceDown}`
                                }
                                align="right">
                                {elem.price_change_24h.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TopPriceComponent;