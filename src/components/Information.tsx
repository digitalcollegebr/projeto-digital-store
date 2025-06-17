interface InformationProps {
    title: string,
    informations: {
        text: string,
        link?: string
    } [];
}

export default function Information({title, informations}: InformationProps) {
    return(
        <div>
            <h2 className="font-bold text-light-gray-3">{title}</h2>
            {
                informations.map((item) => (
                    <div className="flex flex-col">
                        <a href={item.link} className="hover:text-primary hover:cursor-pointer hover:scale-105 hover:transition-colors">{item.text}</a>
                    </div>
                ))
            }
        </div>
    )
}