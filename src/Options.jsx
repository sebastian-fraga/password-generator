function Options({ chars, setChars, symbols, setSymbols, uppercase, setUppercase, special, setSpecial }) {
    return (
        <div className="w-full max-w-2xl flex flex-col gap-3 justify-center text-slate-100 mt-20 border-violet-200/40 rounded-lg border px-5 py-4">
            <span className="text-slate-100 font-black mb-3 text-xl">Opciones</span>
            <div className="flex gap-20 justify-between font-light ml-3">
                <label>Permitir mayúsculas</label>
                <input type="checkbox" checked={uppercase} onChange={e => setUppercase(e.target.checked)} />
            </div>
            <div className="flex gap-20 justify-between font-light ml-3 items-center">
                <label>Permitir caracteres especiales</label>
                <input type="checkbox" checked={special} onChange={e => setSpecial(e.target.checked)}
                />
            </div>
            <div className="flex gap-20 justify-between font-light ml-3 items-center">
                <label>Número de caracteres</label>
                <div className="flex gap-6">
                    <input type="range"
                        min="1" max="32"
                        value={chars}
                        onChange={e => setChars(+e.target.value)} />
                    <output>{chars}</output>
                </div>
            </div>
            <div className="flex gap-20 justify-between font-light ml-3 items-center">
                <label>Cantidad de símbolos</label>
                <div className="flex gap-6">
                    <input
                        type="range"
                        min="0" max="10"
                        value={symbols}
                        disabled={!special}
                        onChange={e => setSymbols(+e.target.value)}
                    />
                    <output>{symbols}</output>
                </div>
            </div>
        </div>
    )
}

export default Options