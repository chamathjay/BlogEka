
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="signin" element={<UserAuthForm type="signin" />} />
                <Route path="signup" element={<UserAuthForm type="signup" />} />
            </Routes>
        </>
    )
}

export default App;
