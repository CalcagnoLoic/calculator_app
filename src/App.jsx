import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button } from "./components/Button";
// eslint-disable-next-line no-unused-vars
import { Footer } from "./components/Footer";

export const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [result, setResult] = useState(0);

    return (
        <>
            <div className="max-w-sm m-auto mt-12 sm:mt-24">
                <div className="bg-slate-500 max-w-md max-h max-h-screen p-5 rounded-sm mx-1 sm:mx-0">
                    <button className="bg-gray-800 text-white py-5 px-12 rounded-3xl text-end font-bold text-2xl mb-5 w-full">
                        {result}
                    </button>
                    <div className="bg-gray-600 rounded-sm p-5">
                        <div className="flex justify-around mb-2">
                            <Button
                                text="7"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="8"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="9"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="DEL"
                                design={
                                    "bg-indigo-500 border-b-indigo-700 text-white h-10 w-10 sm:w-16 text-xl"
                                }
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="4"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="5"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="6"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="+"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="1"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="2"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="3"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="-"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="."
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="0"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="/"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                            <Button
                                text="x"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="RESET"
                                design={
                                    "h-10 w-28 sm:w-36 bg-indigo-500 border-b-indigo-700 text-white text-xl"
                                }
                            />
                            <Button
                                text="="
                                design={
                                    "bg-rose-500 h-10 w-28 sm:w-36 border-b-rose-700 text-white text-xl"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
