import { useUserProtected } from "../utils/sHooks";
import CreateAdress from "./form";

export default function Page(){
    useUserProtected()
    return <CreateAdress/>
}