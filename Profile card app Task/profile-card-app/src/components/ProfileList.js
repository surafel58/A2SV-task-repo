import Card from "./Card";

const ProfileList = ({profiles}) => {
    return ( 
        //create card for each profile data
        <div className="profile_list">
            {profiles.map((profile) => 
                <Card key={profile.id} profile={profile}/>
            )}         
        </div>
     );
}
 
export default ProfileList;