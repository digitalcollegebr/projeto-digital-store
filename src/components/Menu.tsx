interface IMenuProps {
    onClick: () => void;
}

export default function Menu({onClick}:IMenuProps) {

    return(

        <div className="flex flex-col gap-1 items-start hover:scale-y-105 hover:cursor-pointer transition-all md:hidden" onClick={onClick}>
            <div className="h-1 w-9 bg-dark-gray-2 rounded-tl-md rounded-br-md"></div>
            <div className="h-1 w-8 bg-dark-gray-2 rounded-tl-md rounded-br-md"></div>
            <div className="h-1 w-9 bg-dark-gray-2 rounded-tl-md rounded-br-md"></div>
        </div>

    )

}