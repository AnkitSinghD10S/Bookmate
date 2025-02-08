const useLogin = () => {
    const login = async ({ email, password }) => {
        console.log(email,password);
        try {
            if (!email || !password) {
                throw new Error("Fill all the fields");
            }
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            console.log(data);
            localStorage.setItem("user",JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    };
    return {login}
};

export default useLogin;
