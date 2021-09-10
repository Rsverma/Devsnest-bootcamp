import "./ThemButton.css";
import {useDispatch} from "react-redux";
import { toggleTheme } from "../actions";
import { useSelector } from "react-redux";

const ThemeButton = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch();
    return <div className="thembutton">
        <button className={theme===false?"dark":"light"} onClick={()=> {dispatch(toggleTheme())}}>{theme===true?"dark":"light"}</button>
    </div>
};

export default ThemeButton;