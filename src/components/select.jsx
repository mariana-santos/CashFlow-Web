export default function Select({label, options, ...props}){
    return (
        <div className="flex flex-col gap-1 w-full mt-5">
            <label htmlFor="">{label}</label>
            <select {...props} className="bg-gray-100 px-5 py-2 rounded border-2 border-blue-300">
                {options?.map(option => {
                    return(
                        <option value={option.id}> {option.nome} </option>
                    )
                })}
            </select>
        </div>

    )
}