import React from 'react';
import 'index.scss';
import {HashRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./views/Home";
import NoMatch from "./views/Nomatch";
import Count from "./views/Count";
import Statistics from "./views/Statistics";
import TagsSettings from "./views/tagsSettings";
import {TagEdit} from "./views/TagEdit";
export default function App() {
    return (
    <HashRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="count" element={<Count />}/>
                    <Route path="statistics" element={<Statistics />}/>
                    <Route path="tagsSettings" element={<TagsSettings />}/>
                    <Route path="tagsSettings/:id" element={<TagEdit />}/>
                    <Route path="*" element={<NoMatch />}/>
                </Routes>
    </HashRouter>
    );
};
