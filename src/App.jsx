import { useState } from "react";
import { Button } from "./components/Button";
import { ButtonDel } from "./components/ButtonDel";
import { ButtonReset } from "./components/ButtonReset";
import { ButtonResult } from "./components/ButtonResult";
import { Footer } from "./components/Footer";

export const App = () => {
    const [result, setResult] = useState(0);

    return (
        <>
            <div className="max-w-sm m-auto mt-12 sm:mt-24">
                <div className="bg-slate-500 max-w-md max-h max-h-screen p-5 rounded-sm mx-1 sm:mx-0">
                    <div className="bg-gray-800 text-white py-5 px-12 rounded-3xl text-end font-bold text-2xl mb-5">
                        {result}
                    </div>
                    <div className="bg-gray-600 rounded-sm p-5">
                        <div className="flex justify-around mb-2">
                            <Button text="7" />
                            <Button text="8" />
                            <Button text="9" />
                            <ButtonDel text="DEL" />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button text="4" />
                            <Button text="5" />
                            <Button text="6" />
                            <Button text="+" />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button text="1" />
                            <Button text="2" />
                            <Button text="3" />
                            <Button text="-" />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button text="." />
                            <Button text="0" />
                            <Button text="/" />
                            <Button text="x" />
                        </div>
                        <div className="flex justify-around mb-2">
                            <ButtonReset text="RESET" />
                            <ButtonResult text="=" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
