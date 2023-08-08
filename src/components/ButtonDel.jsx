export const ButtonDel = ({ text }) => {
    return (
        <button
            className="bg-indigo-500 rounded-lg p-7 h-10 w-10 sm:w-16 flex items-center justify-center border-b-4 border-b-indigo-700 cursor-pointer text-white text-xl font-bold"
            value={text}
        >
            {text}
        </button>
    );
};
