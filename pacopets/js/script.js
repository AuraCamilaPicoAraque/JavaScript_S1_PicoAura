const clientId=kOaQ6OPWcTK8gCPGrsEehp9rRibegtEO23US0obkBUYrObDT63
const clientSecret=EtNDpVLEe9uwtmcc2I9qZVyAX2xepvUN0ooeL5Jt
const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
data.append('client_id', clientId);
data.append('client_secret', clientSecret);
axios.post("https://api.petfinder.com/v2/",data,{
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
.then((response)=>{
    console.log(response)
})