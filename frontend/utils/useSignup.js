import useEffect from "react"
const useSignup = ({name,email,password}) => {
    useEffect(() => {
        const singup = async()=>{
            try {
                if(!name || !email || password ){
                    throw new Error ("fill all the fields");
                }
                const res = await fetch("http://localhost:5000/api/auth/signup");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                localStorage.setItem("user",data);
            } catch (error) {
                console.log(error);
            }
        }
        singup()
    },[])
}

export default useSignup