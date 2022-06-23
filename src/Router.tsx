import { Route, Routes } from "react-router-dom";
import { EventPlatform } from "./pages/EventPlatform";

export function Router() {

    return(
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/event" element={<EventPlatform/>} />
            <Route path="/event/lesson/:slug" element={<EventPlatform/>} />
        </Routes>
    )
}