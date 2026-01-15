import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import Options from "./Options"

function PasswordGenerator() {
    const [password, setPassword] = useState("")
    const [chars, setChars] = useState(12)
    const [symbols, setSymbols] = useState(2)
    const [uppercase, setUppercase] = useState(true)
    const [special, setSpecial] = useState(true)
    const [copied, setCopied] = useState(false)

    function getRandomFrom(str) {
        return str[Math.floor(Math.random() * str.length)]
    }

    function shuffleString(s) {
        return s.split("").sort(() => Math.random() - 0.5).join("")
    }

    function generatePassword() {
        let baseChars = "abcdefghijklmnopqrstuvwxyz0123456789"
        if (uppercase) baseChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const specialChars = "!@#$%^&*()_+.ñ?<>,"
        const symbolsToUse = special ? Math.min(symbols, chars) : 0
        const normalCount = Math.max(1, chars - symbolsToUse)
        let result = ""

        for (let i = 0; i < normalCount; i++) result += getRandomFrom(baseChars)
        for (let i = 0; i < symbolsToUse; i++) result += getRandomFrom(specialChars)

        setPassword(shuffleString(result))
    }

    async function copyPassword() {
        try {
            await navigator.clipboard.writeText(password)
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
        } catch {
            alert("No se pudo copiar")
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md flex items-center z-1000">
                <input
                    type="text"
                    value={password}
                    readOnly
                    placeholder="**********"
                    className="w-full max-w-md h-11 text-lg rounded-3xl border border-slate-100/50 bg-slate-100/20 backdrop-blur-xl text-slate-100 text-center focus:outline-none cursor-default z-1000"
                />

                <FontAwesomeIcon
                    icon={faCopy}
                    onClick={copyPassword}
                    className={`absolute right-3 cursor-pointer z-1000 hover:text-slate-200  ${copied ? "text-green-200" : "text-slate-50"
                        }`}
                />
            </div>

            <button
                onClick={generatePassword}
                className="px-4 py-2 mt-5 bg-violet-500 text-white rounded-lg hover:bg-violet-600 cursor-pointer transition"
            >
                Generar
            </button>

            <Options
                chars={chars} setChars={setChars}
                symbols={symbols} setSymbols={setSymbols}
                uppercase={uppercase} setUppercase={setUppercase}
                special={special} setSpecial={setSpecial}
            />
        </div>
    )
}

export default PasswordGenerator
