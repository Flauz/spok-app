import {useSelector} from "react-redux"
import {useEffect} from "react"


const useAuth = props => {
    const {currentUser} = useSelector(user => user.userReducer)

    useEffect(() => {
        if(!currentUser){
            
        }
    }, [currentUser])

    return currentUser
}

export default useAuth