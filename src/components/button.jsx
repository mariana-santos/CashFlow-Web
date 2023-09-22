import Link from "next/link";

export default function Button({ children, icon, ...props }){
    return(
        <Link 
            href="#" 
            {...props}
            className="bg-green-400 font-bold px-6 py-2 uppercase flex gap-2 hover:bg-green-500 transition-colors">
                {children}
                {icon}
        </Link>
    )
}