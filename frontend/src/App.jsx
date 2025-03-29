import Navbar from "./components/navbar.component.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />} >
                <Route path="editor" element={<h1>Editor</h1>} />
                <Route path="signin" element={<h1>Sign In</h1>} />
                <Route path="signup" element={<h1>Sign Up</h1>} />
            </Route>
        </Routes>
    )
}

export default App;