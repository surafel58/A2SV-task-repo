import Avatar from "./ProfileAvatar";
import Information from "./Information";

const Card = ({profile}) => {
    return ( 
            //Define a card, contains Avatar and Information
            <div className="card">
                <Avatar url={profile.image}/>
                <Information profile = {profile}/>
            </div>
    );
}
 
export default Card;