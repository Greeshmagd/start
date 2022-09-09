import {useState} from 'react'
​
function Home()
{
    
    let [personName , setPersonName] = useState("gunda");
​
    let changeName = (anotherName)=>{
​
        setPersonName(anotherName);
​
        alert(anotherName);
​
    }
​
    return( 
    <div>
​
        <h1>My name is {personName}</h1>
​
        <button onClick={()=>{changeName("gundi")}}>change name</button>
​
    </div>
    )
}
​
export default Home
