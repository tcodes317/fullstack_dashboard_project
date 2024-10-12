import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function EmailVerificationPage(){
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);
    const navigate = useNavigate();

    const handleChange = (index, value) => {}
    const handleKeyDown = (index, e) => {}


    return(
        <>
            <div className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">Verify Your Email</h2>
                    <form className="space-y-6">
                        <div className="flex justify-between space-x-2">
                            {
                                code.map((digit, index) => (
                                    <input 
                                        key={index} 
                                        ref={(el) => (inputRefs.current[index] = el)} 
                                        type="text"
                                        maxlength="6"
                                        value={digit}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        className="w-12 h-12 text-center font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none" />
                                ))
                            }
                        </div>
                        <motion.button
                            whileHover={{scale: 1.05}}
                            whileTop={{scale: 0.95}}
                            type="submit"
                            disabled={isLoading || code.some((digit) => !digit)}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50"
                            >
                                {isLoading ? "Verifying..." : "verify Email"}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </>
    )
}
export default EmailVerificationPage;