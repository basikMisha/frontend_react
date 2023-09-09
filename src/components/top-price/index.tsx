import TableComponent from "../table";

const TopPriceComponent = (props: any) => {

    const { assets } = props;
    return (
        <TableComponent assets={assets}/>
    )
}

export default TopPriceComponent;