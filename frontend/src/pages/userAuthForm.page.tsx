import { useRef } from "react";
import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import { Toaster, toast } from "react-hot-toast";
import { User, Mail, KeyRound } from 'lucide-react';

// const iconMap: Record<string, JSX.Element> = {
//     name: <User className="text-dark-grey" />,
//     email: <Mail className="text-dark-grey" />,
//     password: <KeyRound className="text-dark-grey" />
// }

const UserAuthForm = ({ type }: { type: "signin" | "signup" }) => {

    const authForm = useRef<HTMLFormElement>(null);

    const userAuthThroughServer = (serverRoute: string, formData: Record<string, string>) => {

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let serverRoute = type == "signin" ? "/signin" : "/signup";

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?& ]{6,20}$/; // regex for password


        if (authForm.current) {
            const form = new FormData(authForm.current);
            const formData: Record<string, string> = {};

            for (let [key, value] of form.entries()) {
                formData[key] = value.toString();
            }

            console.log(formData);

            //validate the form data here

            let { fullName, email, password } = formData;

            if (fullName) {

                if (fullName.length < 3) {
                    return toast.error("Full name must be at least 3 characters long");
                }

            }
            if (!email.length) {
                return toast.error("Email required");
            }
            if (!emailRegex.test(email)) {
                console.log("Triggering toast error");
                return toast.error("Invalid email");
            }

            if (!passwordRegex.test(password)) {
                console.log("Triggering toast error");
                return toast.error("Password must be between 6 to 20 characters and contain at least one number, one uppercase and lowercase letters");
            }

            userAuthThroughServer(serverRoute, formData);
            toast.success("Form submitted successfully");

        }

    }

    return (
        <section className="flex items-center justify-center h-cover bg-light-grey">
            <Toaster />
            <form ref={authForm} onSubmit={handleSubmit} className="w-[80%] max-w-[400px]">

                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "signin" ? "Welcome Back" : "Join us today"}
                </h1>
                {
                    type != "signin" ?
                        <InputBox
                            name="fullName"
                            type="text"
                            placeholder="Full Name"
                            id={undefined}
                            value={undefined}
                        /> : ""
                }
                <InputBox
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />

                <InputBox
                    name="password"
                    type="password"
                    placeholder="Password"
                    id={undefined}
                    value={undefined} />

                <button
                    className="btn-dark center w-full"
                    type="submit"
                >
                    {type == "signin" ? "Sign In" : "Sign Up"}
                </button>

                <div className="relative w-full flex items-center gap-2 my-10 opacity-20 uppercase text-black font-bold">
                    <hr className="w-1/2 border-black" />
                    <p>or</p>
                    <hr className="w-1/2 border-black" />
                </div>

                <button className="btn-light w-full flex items-center justify-center gap-2 mb-6">
                    <img src={googleIcon} className="w-5"></img>Continue with google
                </button>

                {
                    type == "signin" ?
                        <p className="text-center text-dark-grey">
                            Don't have an account? <Link to="/signup" className="text-blue-500">
                                Join us today
                            </Link>
                        </p>
                        :
                        <p className="text-center text-dark-grey">
                            Already a member? <Link to="/signin" className="text-blue-500">
                                Sign in here
                            </Link>
                        </p>
                }

            </form>
        </section>
    )
}

export default UserAuthForm;