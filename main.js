
async function fetchData(){

    try{
        const userName = document.getElementById("search").value;
        const response = await fetch(`https://api.github.com/users/${userName}`);

        if(!response.ok){
            window.alert(`Cannot find this user ${userName}`);
        }
        const data = await response.json();

        const userImage = document.getElementById('userImage');
        userImage.src = data.avatar_url;
        userImage.style.display = "block"

        const name = document.getElementById('userName');
        name.innerHTML = `Name : ${userName}`;  

        const id = document.getElementById('userId');
        id.innerHTML = `ID : ${data.id}`;

        const url = document.getElementById('userUrl');
        url.href = data.html_url;

        const bio = document.getElementById('userBio');
        bio.innerHTML = `BIO : ${data.bio}`;

        const repo = document.getElementById('userRepo');
        repo.innerHTML = `Public Repositories : ${data.public_repos}`;

        const follower = document.getElementById('userFollowers');
        follower.innerHTML =`Followers : ${ data.followers}`;

        const following = document.getElementById('userFollowing');
        following.innerHTML = `Following : ${data.following}`;

        const created = document.getElementById('created');
        created.innerHTML = `Account created : ${data.created_at}`;

        const updated = document.getElementById('updated');
        updated.innerHTML = `Account updated : ${data.updated_at}`;

        const email = document.getElementById('userEmail');
        email.innerHTML = `Email : ${data.email}`;

    }catch(error){
        console.error(error);
    }
}