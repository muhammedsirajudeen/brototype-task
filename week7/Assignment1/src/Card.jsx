import "./App.css"
export default function Card({users}){
    return(
        users.map((user)=>{
            return(
                <div key={user.id} className="sub-container">
                    <p className="text-white" >{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })
    )
}