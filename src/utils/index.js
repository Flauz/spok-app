export const checkUserAdmin = currentUser => {
    if(!currentUser || !Array.isArray(currentUser.userRoles)) return false
    console.log("HALLO :", currentUser.userRoles)
    const { userRoles } = currentUser
    if(userRoles.includes('admin')) return true;

    return false
}