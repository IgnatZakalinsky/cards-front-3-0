import React, {useEffect, useState} from 'react'
import './App.css'
import {NavLink, HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from '../../../p2-features/f1-auth/a1-ui/u1-login/Login'
import Profile from '../../../p2-features/f1-auth/a1-ui/u2-profile/Profile'

export type UserType = {
    avatar: string
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    device: string
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile'
}

const App = () => {
    // useEffect(() => {
    //     axios.post(
    //         'http://localhost:7542/3.0/auth/login',
    //         {email: 'nya-admin@nya.nya', password: '1qazxcvBG'}
    //     )
    // }, [])

    const [profile, setProfile] = useState<UserType | undefined>()
    return (
        <div className='App'>
            <HashRouter>
                <div>
                    <NavLink to={PATH.LOGIN}>login</NavLink>###
                    {profile && <span><NavLink to={PATH.PROFILE}>profile</NavLink>###</span>}
                </div>

                <Switch>
                    <Route exact path={'/'} render={() => <Redirect to={PATH.LOGIN}/>}/>
                    <Route exact path={PATH.LOGIN} render={() => <Login setProfile={setProfile} profile={profile}/>}/>
                    <Route exact path={PATH.PROFILE} render={() => <Profile profile={profile}/>}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App
