import { Route, Routes } from "react-router-dom";
import { EventPlatform } from "./pages/EventPlatform";
import { Subscribe } from "./pages/Subscribe";

export function Router() {

    return(
        <Routes>
            <Route path="/" element={<Subscribe />}/>
            <Route path="/event" element={<EventPlatform/>} />
            <Route path="/event/lesson/:slug" element={<EventPlatform/>} />
        </Routes>
    )
}