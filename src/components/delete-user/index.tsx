import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from 'react';
import { useAppDispatch } from "../../utils/hook";
import { DeleteUser } from "../../store/thunks/auth";
import { useNavigate } from "react-router-dom";

const DeleteUserComponent: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(DeleteUser());
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('name');
        navigate('/login')
    }

    return (
        <Grid container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px ',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid item>
                <Typography variant="h2">Удаление аккаунта</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">
                    Удаляя свой аккаунт, вы удаляете все персональные данные.
                    После удаления все сохраненные данные невозможно будет восстановить.
                </Typography>
            </Grid>
            <Grid item>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            sx={{
                                color: colors.blue,
                                '&.Mui-checked': {
                                    color: colors.blue
                                }
                            }}
                        />}
                        label="Подтвердить удаление" />
                </FormGroup>
            </Grid>
            <Grid>
                <Button
                    color='error'
                    variant='outlined'
                    disabled={!checked}
                    onClick={handleDelete}
                >
                    Удалить аккаунт
                </Button>
            </Grid>
        </Grid>
    );
}

export default DeleteUserComponent;