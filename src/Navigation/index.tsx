import {Route, Routes} from "react-router-dom";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
const Navigation = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Search/>} />
            <Route path={'/profile/:id'} element={<Profile/>} />
        </Routes>
    );
};

export default Navigation;