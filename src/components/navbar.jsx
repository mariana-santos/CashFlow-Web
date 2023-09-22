import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-100 p-10 flex items-center justify-between">
      <ul className="flex gap-5 text-slate-700 items-center">
        <li className="text-slate-950 font-bold">
          <h1 className="text-2xl mr-32">
            <Link href="/">CashFlow</Link>
          </h1>
        </li>
        <li className="text-slate-950 font-bold">
          <a href="#">Simular empréstimo</a>
        </li>
        <li>
          <a href="#">Soluções de crédito e taxas</a>
        </li>
        <li>
          <Link href="/emprestimos">Empréstimos</Link>
        </li>
      </ul>

      <div className="h-14 w-14 rounded-full overflow-hidden">
        <img
          src="https://github.com/mariana-santos.png"
          alt="Avatar do usuário"
        />
      </div>
    </nav>
  );
}
