 const supabaseUrl = "https://ewvbudyibudldcmyiwtx.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3dmJ1ZHlpYnVkbGRjbXlpd3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MzkyMzIsImV4cCI6MjA2NzIxNTIzMn0.w96hQQjcGsQYUa91qe3MTntyqfFBAWqadxNEDsB9GVc"


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey)
console.log(createClient)
console.log(client);

 let btn1 = document.getElementById('login-btn')
let email = document.getElementById('email').value
let password = document.getElementById('password').value

btn1.addEventListener('click', async ()=>{
let email = document.getElementById('email').value
let password = document.getElementById('password').value
  if ( email === "" && password === "") {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please fill all the fields first!",
    });
  }
  
const { data, error } = await client.auth.signInWithPassword({
                    email: email,
                    password: password,
                })
console.log(data);

   if (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message,
    });
  }
  else {
    Swal.fire({
      icon: "success",
      title: "Signup Successfully!",
      showConfirmButton: false,
      timer: 1500
    });

  }
  
})

