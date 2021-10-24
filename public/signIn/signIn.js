
function connection(){

    const login = document.getElementById('login');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    login.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {

            email: email.value.trim(),
            password: password.value.trim(),
            };

        console.log(data);
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(data)
        };

        try {
            const res = await fetch('/user/login', options);
            const json = await res.json();
            console.log(json.token);
            if(res.status === 200)
            {
                console.log("OK");
                window.location.href = "../tasks/tasks.html" + `?auth-token=${json.token}`;
                // res.render('./tasks/tasks.html', {'auth-token': token});
            }
            else{
                console.log("HO");
            }
        } catch (err) {
            res.status(400).json({message: "Faild"});
        }
    });
};

connection();