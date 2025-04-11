import InputBox from "../components/input.component";
import { User, Mail, KeyRound } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
    name: <User className="text-dark-grey" />,
    email: <Mail className="text-dark-grey" />,
    password: <KeyRound className="text-dark-grey" />
}

const UserAuthForm = ({ type }: { type: "signin" | "signup" }) => {
    return (
        <section className="flex items-center justify-center h-cover bg-light-grey">
            <form className="w-[80%] max-w-[400px]">
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
                    id={undefined}
                    value={undefined} />

                <InputBox
                    name="password"
                    type="password"
                    placeholder="Password"
                    id={undefined}
                    value={undefined} />
            </form>
        </section>
    )
}

export default UserAuthForm;