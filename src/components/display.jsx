export default function Display({label, value}){
    return (
        <div className="flex flex-col gap-1 w-full mt-5">
            <p className="text-slate-800">
                <strong>{label}</strong>
                <span>{value}</span>
            </p>
        </div>

    )
}