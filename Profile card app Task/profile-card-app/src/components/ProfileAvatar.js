import Avatar from '@mui/material/Avatar' ;

const ProfileAvatar = ({url}) => {
    return ( 
        //Define the profile avatar
        <div className="avatar">
            <Avatar src={url} sx={{ width: 150, height: 150 }}/>
        </div>
    );
}
 
export default ProfileAvatar; 