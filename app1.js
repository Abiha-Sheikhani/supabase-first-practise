const supabaseUrl = "https://ewvbudyibudldcmyiwtx.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3dmJ1ZHlpYnVkbGRjbXlpd3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MzkyMzIsImV4cCI6MjA2NzIxNTIzMn0.w96hQQjcGsQYUa91qe3MTntyqfFBAWqadxNEDsB9GVc"


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey)
console.log(createClient)
console.log(client);



let loginBtn = document.getElementById('login-btn')
let email = document.getElementById('email').value
let password = document.getElementById('password')
loginBtn &&
  loginBtn.addEventListener('click', async ()=>{
let email = document.getElementById('email').value
let password = document.getElementById('password').value
  if ( email === "" && password === "") {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please fill all the fields first!"
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
      title: "Login Successfully!",
      showConfirmButton: false,
      timer: 1500
    });

   setTimeout(() => {
      window.location.href = 'post.html';
    }, 1500)



  }
  
})

google.addEventListener('click', async () => {
  await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
					redirectTo: window.location.origin + '/post.html',
					queryParams: { access_type: 'offline', prompt: 'consent' },
				},
  })
})
let eye = document.getElementById('toggle-password')
eye.addEventListener('click',()=>{
 eye.classList.toggle('disappear')
 if(eye.classList.contains('disappear')){
  password.type = "text"
  eye.innerText = "visibility"
 }
 else{
  eye.innerHTML = "visibility_off"
   password.type = "password"
 }
})