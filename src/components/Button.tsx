interface IButtonProps {
    text: string;
    onClick: () => void;
    type?: "submit" | "reset" | "button";
}

export default function Button({text, type, onClick}: IButtonProps){

    return(

        <button type={type} onClick={onClick} className="p-2 w-32 md:w-24 rounded-xl bg-primary text-white hover:scale-105 hover:cursor-pointer hover:bg-pink-500 transition-colors" >{text}</button>

    )

}