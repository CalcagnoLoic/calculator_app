import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button } from "./components/Button";

export const App = () => {
    const [expression, setExpression] = useState([]);
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        setDisplay(value);
        setExpression([...expression, value]);
    };

    const remove = () => {
        if (expression === "") {
            return;
        } else {
            setExpression(expression.slice(0, -1));
        }
    };

    const removeAll = () => {
        if (expression === "") {
            return;
        } else {
            setDisplay("");
            setExpression("");
        }
    };

    const handleResult = () => {
        const displayResult = expression
            .join("")
            .split(/(\D)/g)
            .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))

            .reduce((acc, value, index, array) => {
                switch (value) {
                    case "+":
                        return (acc = acc + array[index + 1]);
                    case "-":
                        return (acc = acc - array[index + 1]);
                    case "x":
                        return (acc = acc * array[index + 1]);
                    case "/":
                        return (acc = acc / array[index + 1]);
                    default:
                        return acc;
                }
            });

        setExpression("");
        setDisplay(displayResult);
    };

    return (
        <>
            <div className="max-w-sm m-auto mt-12 sm:mt-24 drop-shadow-custom" >
                <div className="bg-slate-500 max-w-md max-h max-h-screen p-5 rounded-2xl mx-3 sm:mx-0">
                    <button
                        className="bg-gray-800 text-white p-2 px-12 text-end rounded-sm font-bold text-2xl w-full"
                        id="screen"
                    >
                        {expression}
                    </button>
                    <button
                        className="bg-gray-800 text-white py-5 px-12 text-end rounded-sm font-bold text-4xl mb-5 w-full"
                        id="screen"
                    >
                        <span>Result: {display ? display : "___"}</span>
                    </button>
                    <div className="bg-gray-600 rounded-sm p-5">
                        <div className="flex justify-around mb-2">
                            <Button
                                text="7"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(7)}
                            />
                            <Button
                                text="8"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(8)}
                            />
                            <Button
                                text="9"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(9)}
                            />
                            <Button
                                text="DEL"
                                design={
                                    "bg-indigo-500 border-b-indigo-700 text-white h-10 w-10 sm:w-16 text-xl"
                                }
                                handler={() => remove()}
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="4"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(4)}
                            />
                            <Button
                                text="5"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(5)}
                            />
                            <Button
                                text="6"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(6)}
                            />
                            <Button
                                text="+"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick("+")}
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="1"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(1)}
                            />
                            <Button
                                text="2"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(2)}
                            />
                            <Button
                                text="3"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(3)}
                            />
                            <Button
                                text="-"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick("-")}
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="."
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(".")}
                            />
                            <Button
                                text="0"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick(0)}
                            />
                            <Button
                                text="/"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick("/")}
                            />
                            <Button
                                text="x"
                                design={
                                    "bg-gray-200 border-b-gray-400 text-slate-800 h-10 w-10 sm:w-16"
                                }
                                handler={() => handleClick("x")}
                            />
                        </div>
                        <div className="flex justify-around mb-2">
                            <Button
                                text="RESET"
                                design={
                                    "h-10 w-28 sm:w-36 bg-indigo-500 border-b-indigo-700 text-white text-xl"
                                }
                                handler={() => removeAll()}
                            />
                            <Button
                                text="="
                                design={
                                    "bg-rose-500 h-10 w-28 sm:w-36 border-b-rose-700 text-white text-xl"
                                }
                                handler={() => handleResult()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
