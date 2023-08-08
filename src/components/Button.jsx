export const Button = ({ text }) => {
    //console.log(text);
    return (
        <button
            className="bg-gray-200 rounded-lg p-7 h-10 w-10 sm:w-16 flex items-center justify-center border-b-4 border-b-gray-400 cursor-pointer text-slate-800 text-2xl font-bold"
            value={text}
        >
            {text}
        </button>
    );
};
