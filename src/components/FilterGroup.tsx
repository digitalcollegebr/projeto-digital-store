
interface FilterGroupProps {
    title?: string;
    inputType: 'checkbox' | 'radio';
    className?: string;
    options: { text: string; value?: string }[];
}

const FilterGroup = ({title, inputType, options,className}: FilterGroupProps) => {
    return(
        <div className='pb-3'>
            <h1 className={className ? className : `pb-3 text-sm font-bold text-dark-gray-2`}>{title}</h1>
            {options.map((option, index) => (
                <div className='flex align-center pb-3' key={index}>
                    <input
                        className='w-[20px] h-[22px] accent-primary'
                        type={inputType}
                        id={option.value ?? option.text}
                        name={title}
                        value={option.value}
                    />  
                <label className='pl-2 text-[12px] font-medium text-dark-gray-2' htmlFor={option.value ?? option.text}>{option.text}</label>
                </div>
            ))}
        </div>
    );
};

export default FilterGroup;
