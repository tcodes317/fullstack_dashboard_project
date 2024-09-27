import { motion } from "framer-motion";
import { User, Mail } from "lucide-react";
import { useState } from "react";
import Input from "../components/Input";

function SignUpPage(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp=()=>{

    }

    return(
        <>
            <motion.div 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
            >
                <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">Create Account</h2>
                    <form onSubmit={handleSignUp}>
                        <Input 
                            icon={User}
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                            
                        <Input 
                            icon={Mail}
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
  
                        <Input 
                            icon={Lock}
                            type="password"
                            placeholder="Password"
                            value={email}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <motion.button className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                         whileHover={{scale: 1.02}}
                         whileTap={{scale: 0.98}}
                         type="submit"
                        >
                            Sign up
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </>
    )
}

export default SignUpPage;