import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useStyles } from "./styles";
import { IPriceTableData, ISingleAsset } from "../../common/types/assets";
import React from "react";

const TableComponent: React.FC<IPriceTableData> = (props: IPriceTableData): JSX.Element => {
    const {assets} = props;
    const {classes} = useStyles();
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
                    {assets.map((elem: ISingleAsset) => (
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
    );
};

export default TableComponent;