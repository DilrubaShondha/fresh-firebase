import { useContext } from "react";
import { authContext } from "../MainLayout/MainLayout";

const Profile = () => {
    const {user} = useContext(authContext)
    console.log(user);
    // if(!user){
    //     alert("user not available")
    // }
    return (
        <div>
            <h1>welcome profile</h1>
        </div>
    );
};

export default Profile;