// import logo from "../assets/kevinRushLogo.png"
import resumes from "../assets/DHRUV_JANGRA_RESUME.pdf"
import { FaLinkedin , FaGithub , FaFile} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
return <nav className="border-b mb-20 flex items-center justify-between py-6">
    <div className=" flex flex-shrink-0 items-center">
        <h1 className="ml-8 b-16 mb-4 text-4xl font-bold  tracking-tight lg:mt-16 
                    lg:text-3xl">DJ</h1>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dhruv-jangra-7315121a6/"><FaLinkedin /></a>
        <a href="https://github.com/djangra2003"><FaGithub /></a>
        <a href="https://leetcode.com/u/dhruvj_2003/"><SiLeetcode /></a>
        <a href={resumes}><FaFile/></a>
    </div>
</nav>
}

export default Navbar
