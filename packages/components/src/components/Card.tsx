import { ReactNode } from "react"
import "../styles/input.css";

type CardProps = {
    children: ReactNode
}

const Card = ({children}: CardProps):JSX.Element => {
    return (
        <div className="flex justify-center cursor-pointer bg-slate-200 border rounded-md p-1 w-full my-1 hover:border-neutral-700 hover:bg-neutral-800/30">
            {children}
        </div>
    )
}

export default Card;