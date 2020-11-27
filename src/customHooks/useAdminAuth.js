import {useEffect} from "react"
import { useSelector} from 'react-redux'
import {useHistory} from "react-router-dom"
import {checkUserAdmin} from '../utils'

const useAdminAuth = () => {
    const { currentUser } = useSelector(user => user.userReducer)
    const history = useHistory()

    useEffect(() => {
        if(!checkUserAdmin(currentUser)){
            history.push('/signin')
        }
    }, [currentUser])

    return currentUser
}

export default useAdminAuth