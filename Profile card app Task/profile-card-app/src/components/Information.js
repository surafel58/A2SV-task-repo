const Information = ({profile}) => {
    return ( 
        //Define user info
        <div className="info">
            <li><b>Name: </b>{profile.firstName + " " + profile.lastName}</li>
            <li><b>Age: </b>{profile.age}</li>
            <li><b>Email: </b>{profile.email}</li>
            <li><b>phone: </b>{profile.phone}</li>
        </div>
    );
}
 
export default Information;