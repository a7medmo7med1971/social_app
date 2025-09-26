"use client";
import { handelLogin } from "@/redex/authSlice";
import { dispatchType, Statetype } from "@/redex/store";
import { Box, Button, TextField, Typography, Paper, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
   const router=useRouter() 
const dispatch =useDispatch<dispatchType>()
  const { loading, error, token } = useSelector(
      (state: Statetype) => state.authiniCation
  );
/*handel login*/
const loginFormik = useFormik<{email: string; password: string}>({
  initialValues: {
    email: "",
    password: "",
  },
  onSubmit: (values) => {
    dispatch(handelLogin(values))
       if (error) {
      toast.error(error); 
      
    }
    if (token) {
      toast.success("تم تسجيل الدخول بنجاح ");
      router.push("/")
     
    }
  },
});



  return (
    <Box
      sx={{
        minHeight: "92.6vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, width: "100%", maxWidth: 400, borderRadius: 3 }}
      >
        <Typography sx={{ color: "#1976d2", }}  variant="h5" component="h2" gutterBottom align="center">
          Login
        </Typography>

        <form  onSubmit={loginFormik.handleSubmit} >
          <Box>
          <TextField
              name="email"
             onChange={loginFormik.handleChange}
             value={loginFormik.values.email}
            label="Email"
            type="email"
            id="email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          
           
          />
          

          <TextField
              name="password"
              onChange={loginFormik.handleChange}
             value={loginFormik.values.password}
            label="password"
            type="password"
            id="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />

<Button
  type="submit"
  variant="contained"
  color="primary"
  fullWidth
  sx={{ mt: 2, height: 45 }} // ارتفاع ثابت يخلي الشكل متماسك
  disabled={loading} // يعطل الزر وقت اللودينج
>
  {loading ? (
    <>
      <CircularProgress
        size={22} // حجم اللودينج
        color="primary"
        sx={{ mr: 1 }} // مسافة بينه وبين النص
      />
      جاري تسجيل الدخول...
    </>
  ) : (
    "Login"
  )}
</Button>

        </Box>





        </form>
      </Paper>
    </Box>
  );
}
