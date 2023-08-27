import { AppDispatch, RootState } from "../../store";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuth = () => {
    return !!sessionStorage.getItem('token');
    // return sessionStorage.getItem('token') ? true : false;
}