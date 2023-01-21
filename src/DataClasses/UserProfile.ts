class UserProfile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    constructor(id: number, firstName: string, lastName: string, email: string, phone: string, bio: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.bio = bio;
    }
    
}
export default UserProfile;