import React from 'react';
import 'index.scss';
import {HashRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./views/Home";
import NoMatch from "./views/Nomatch";
import Count from "./views/Count";
import Statistics from "./views/Statistics";
import PayTagsSettings from "./views/PayTagsSettings";
import {PayTagEdit} from "./views/PayTagEdit";
import {IncomeTagsSettings} from "./views/IncomeTagSettings";
import {IncomeTagEdit} from "./views/IncomeTagEdit";
export default function App() {
    return (
    <HashRouter>
                <Routes>
                    <Route index element={<Count />}/>
                    <Route path="home" element={<Home />}/>
                    <Route path="count" element={<Count />}/>
                    <Route path="statistics" element={<Statistics />}/>
                    <Route path="payTagsSettings" element={<PayTagsSettings />}/>
                    <Route path="incomeTagsSettings" element={<IncomeTagsSettings />}/>
                    <Route path="payTagsSettings/:id" element={<PayTagEdit />}/>
                    <Route path="incomeTagsSettings/:id" element={<IncomeTagEdit />}/>
                    <Route path="*" element={<NoMatch />}/>
                </Routes>
    </HashRouter>
    );
};
