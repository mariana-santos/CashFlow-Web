import Link from "next/link";

export default function Button({ children, icon, type = "link", ...props }){
    return(
        (type === 'link') ? 
        <Link 
            href="#" 
            {...props}
            className="bg-green-400 font-bold px-6 py-2 uppercase flex gap-2 hover:bg-green-500 transition-colors">
                {children}
                {icon}
        </Link>
        :
        <button {...props} className="bg-green-400 font-bold px-6 py-2 uppercase flex gap-2 hover:bg-green-500 transition-colors">
            {icon}
            {children}
        </button>
    )
}