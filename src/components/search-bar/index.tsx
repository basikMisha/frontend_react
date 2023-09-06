import {
    Stack,
    Autocomplete,
    TextField
} from "@mui/material";
import { useAppSelector } from "../../utils/hook";
import { ISingleAsset } from "../../common/types/assets";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
    const assetsArray: ISingleAsset[] = useAppSelector((state) => state.assets.assets);
    const [selectedValue, setSelectedValue] = useState<string | null>('');
    const navigate = useNavigate()
    return (
        <Stack spacing={2} sx={{
            maxWidth: '300px',
            width: '100%'
        }}>
            <Autocomplete
                value={selectedValue}
                onChange={(e: any, value: string | null) => {
                    navigate(`/single/${value}`) 
                    setSelectedValue(null)
                }}
                renderInput={(elem) => (
                    <TextField  {...elem} label='Поиск' InputProps={{
                        ...elem.InputProps,
                        type: 'search'
                    }} />
                )}
                options={assetsArray.map((elem: { name: string }) => elem.name)} />
        </Stack>
    )
}

export default SearchBar;