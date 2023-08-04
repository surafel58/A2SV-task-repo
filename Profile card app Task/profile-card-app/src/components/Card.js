import Avatar from "./ProfileAvatar";
import Information from "./Information";
import { AiFillInstagram, AiFillFacebook, AiOutlineGoogle } from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';

const Card = ({profile}) => {
    return ( 
            //Define a card, contains Avatar and Information
            <div className="card_content">
                <div className="card">
                    <Avatar url={profile.image}/>
                    <Information profile = {profile}/>
                </div>
                <div className="contact_icons">
                    <li><AiFillInstagram size={32}/></li>
                    <li><AiFillFacebook size={32}/></li>
                    <li><BsTwitter size={32}/></li>
                    <li><AiOutlineGoogle size={32}/></li>
                </div>
            </div>
    );
}
 
export default Card;