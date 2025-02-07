const useLogin = () => {
    const login = async ({ email, password }) => {
        console.log(email,password);
        try {
            if (!email || !password) {
                throw new Error("Fill all the fields");
            }
            const res = fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
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
    login()
};

export default useLogin;
