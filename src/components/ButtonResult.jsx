export const ButtonResult = ({ text }) => {
    console.log(text);
    return (
        <button
            className="bg-rose-500 rounded-lg p-7 h-10 w-28 sm:w-36 flex items-center justify-center border-b-4 border-b-rose-700 cursor-pointer text-white text-xl font-bold"
            value={text}
        >
            {text}
        </button>
    );
};
