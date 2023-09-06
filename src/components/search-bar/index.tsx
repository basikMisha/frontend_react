import {
    Stack,
    Autocomplete,
    TextField
} from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import { ISingleAsset } from "../../common/types/assets";
const SearchBar = () => {

    const assetsArray: ISingleAsset[] = useAppSelector((state) => state.assets.assets)
    return (
        <Stack spacing={2} sx={{
            maxWidth: '300px',
            width: '100%'
        }}>
            <Autocomplete 
            freeSolo
            renderInput={(elem) => (
                <TextField  {...elem} label='Поиск' InputProps={{
                    ...elem.InputProps,
                    type: 'search'
                }}/>
            )} 
            options={assetsArray.map((elem: {name: string}) => elem.name )}/>
        </Stack>
    )
}

export default SearchBar;