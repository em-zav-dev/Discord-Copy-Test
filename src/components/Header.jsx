import { HiMenu } from "react-icons/hi";
import { signInWithGooglePopup } from "../utils/firebase.utils.js"




function Header() {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();

    }


    return(

        <header className="flex items-center justify-between py-4 px-6 bg-discord_purple">
            
            <div>
          
                <a href="/">
                    <img 
                        src="src/assets/discord-white-seeklogo.com-4.svg" 
                        alt="" 
                        className="w-32 h-12 object-contain"
                    />            
                </a>
            </div>
            
            
            <div className="hidden lg:flex  space-x-6 text-white font-bold">
                <a className="link">Download</a>
                <a className="link">Nitro</a>
                <a className="link">Discover</a> 
                <a className="link">Safety</a>
                <a className="link">Support</a> 
                <a className="link">Blog</a> 
                <a className="link">Careers</a> 
            </div>

            <div className="flex space-x-4 ">
                <button className="bg-white p-2 text-blue rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blue transition duration-200 ease-in-out whitespace-nowrap font-medium" onClick={logGoogleUser} >
                Open Discord
                </button>
                
                <HiMenu className= "h-8 w-8 text-white cursor-pointer lg:hidden whitespace-nowrap"/>
                
            </div>

   
        </header>

    )



}
export default Header; 
