import { IPriceTableData } from "../../common/types/assets";
import TableComponent from "../table";

const TopPriceComponent: React.FC<IPriceTableData> = (props: IPriceTableData): JSX.Element => {

    const { assets } = props;
    return (
        <TableComponent assets={assets}/>
    )
}

export default TopPriceComponent;