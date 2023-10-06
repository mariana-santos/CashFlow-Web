export default function InputText({label, ...props}){
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="">{label}</label>
            <input type="text" {...props} className="bg-slate-800 px-2 py-1 rounded"/>
        </div>

    )
}