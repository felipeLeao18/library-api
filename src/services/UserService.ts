import User, {IUser} from '../models/User'

export async function createUserDb ({name,email,password} : IUser): Promise<IUser>{

    if(!name || !email || !password) throw new Error ("All fields are required")
    const isUser = await User.findOne ({
        email
    })
    if(isUser) throw new Error ("User's already on the system")
    const newUser = new User({
        name, 
        email,
        password
    })
    await newUser.save()
    return newUser
    
}