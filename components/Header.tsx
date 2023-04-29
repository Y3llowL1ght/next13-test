import Link from "next/link";

export default function Header() {
    return(
    <div className="flex justify-center bg-slate-50 space-x-10 bg-slate-200">
        <Link className="font-bold" href="/">Root</Link>
        <Link className="font-bold" href="/data/">Data</Link>
    </div>
    )
}