import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import SignIn from "./pages/SignIn/SignIn";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import Dashboard from "./pages/Dashboard";

export default function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    element={
                        <Welcome/>
                    }
                />
                <Route
                    path="/signIn"
                    element={
                        <SignIn/>
                    }
                />
                <Route
                    path="/createProfile"
                    element={
                        <CreateProfile/>
                    }
                />
                <Route
                    path="/dahsboard"
                    element={
                        <Dashboard/>
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}