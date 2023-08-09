export const Button = ({text, design, handler}) => {
    //console.log(text);
    return (
        <button
            className={`rounded-lg p-7 flex items-center justify-center border-b-4 cursor-pointer text-slate-800 text-2xl font-bold ${design}`}
            value={text}
            onClick={()=> handler(text)}
        >
            {text}
        </button>
    );
};
