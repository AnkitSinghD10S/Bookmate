import useEffect from "react";
const useSignup = ({ name, email, password }) => {
    const singup = async () => {
        try {
            if (!name || !email || password) {
                throw new Error("fill all the fields");
            }
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem("user", data);
        } catch (error) {
            console.log(error);
        }
    };
    return {singup}
};

export default useSignup;
