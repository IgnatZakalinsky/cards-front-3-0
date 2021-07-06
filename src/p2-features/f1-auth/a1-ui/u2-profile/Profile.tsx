import React from 'react'
import {PATH, UserType} from '../../../../p1-main/m1-ui/u1-app/App'
import {Redirect} from 'react-router-dom'

const Profile: React.FC<{profile: UserType | undefined}> = ({profile}) => {
    if (!profile) return <Redirect to={PATH.LOGIN}/>

    const pr = profile || {} as UserType
    return (
        <div>
            Profile:
            <div>
                avatar: {pr.avatar}
                <img src={pr.avatar} alt={'avatar'} width={300} height={300}/>
            </div>

            <div>
                email: {pr.email}
            </div>
            <div>
                name: {pr.name}
            </div>
            <div>
                created: {new Date(pr.created).toLocaleDateString()}
            </div>
            <div>
                publicCardPacksCount: {pr.publicCardPacksCount}
            </div>
            <div>
                isAdmin: {pr.isAdmin ? 'yes' : 'No'}
            </div>
            <div>
                verified: {pr.verified ? 'yes' : 'No'}
            </div>

        </div>
    )
}

export default Profile