import { FC } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 font-roboto text-white flex flex-col justify-center items-center gap-10">
            <h1>Ypu are unauthorized to go here</h1>
            <Link to={'/products'} className="bg-sky-500 rounded-md px-6 py-2 hover:bg-sky-600">Back</Link>
        </div>
    )
}