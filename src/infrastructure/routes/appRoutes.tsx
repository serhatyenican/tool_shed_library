import React from "react";
import { Route, Routes } from "react-router-dom";
import { DeleteUserForm } from "../../features/components/forms/deleteUserForm/deleteForm";
import { LoginForm } from "../../features/components/forms/loginForm/loginForm";
import Logout from "../../features/components/forms/logOut/logOut";
import { RegisterForm } from "../../features/components/forms/registerForm/registerForm";
import HomePage from "../../features/components/homePage/homePage";
import DetailPage from "../../features/components/pages/detailPage/detailPage";
import ElectricalPage from "../../features/components/pages/electricalPage/electricalPage";

import GardenPage from "../../features/components/pages/gardenPage/gardenPage";
import GeneralPurposePage from "../../features/components/pages/generalPurpose/generalPurposePage";
import HowDoesItWork from "../../features/components/pages/howDoesItWorkPage/howDoesItWorkPage";
import MyFavProductsPage from "../../features/components/pages/myFavProductsPage/myFavProductsPage";
import NotFoundPage from "../../features/components/pages/notFoundPage/notFoundPage";
import ProductsIUse from "../../features/components/pages/ProductsIUsePage/productsIUseList";
import WoodPage from "../../features/components/pages/woodPage/woodPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>} />
            <Route path="wood" element={<WoodPage></WoodPage>} />
            <Route
                path="electrical"
                element={<ElectricalPage></ElectricalPage>}
            />
            <Route path="garden" element={<GardenPage></GardenPage>} />
            <Route
                path="HowDoesItWork"
                element={<HowDoesItWork></HowDoesItWork>}
            />
            <Route path="Register" element={<RegisterForm></RegisterForm>} />
            <Route path="Login" element={<LoginForm></LoginForm>} />
            <Route path="delete" element={<DeleteUserForm></DeleteUserForm>} />
            <Route path="Logout/" element={<Logout />} />

            <Route
                path="DetailPage/:productId"
                element={<DetailPage></DetailPage>}
            />
            <Route path="ProductsFav/" element={<MyFavProductsPage />} />
            <Route path="General" element={<GeneralPurposePage />} />
            <Route path="toolsInUse/" element={<ProductsIUse />} />

            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
    );
}
