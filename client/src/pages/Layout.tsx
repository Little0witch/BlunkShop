import { FC } from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
    return (
        <div className="w-full h-full pb-20">
            <Header/>
            <Outlet/>
        </div>
    )
}