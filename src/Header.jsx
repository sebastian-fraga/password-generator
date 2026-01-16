import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header className="w-full flex justify-center items-center gap-6 py-25 px-12 font-semibold text-center">
            <h1 className="text-slate-100 text-3xl">GENERADOR DE CONTRASEÑAS</h1>
            <FontAwesomeIcon className="text-slate-300 text-2xl" icon={ faLock } />
        </header>
    )
}
export default Header