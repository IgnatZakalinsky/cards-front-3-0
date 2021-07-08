import React, {useState} from 'react'
import {AuthAPI} from '../../../../p1-main/m3-dal/instance'
import {Redirect} from 'react-router-dom'
import {PATH, UserType} from '../../../../p1-main/m1-ui/u1-app/App'

const Login: React.FC<{ setProfile: (pr: UserType | undefined) => void, profile: UserType | undefined }> = (
    {setProfile, profile}
) => {
    const [em, setEm] = useState('nya-admin@nya.nya')
    const [pas, setPas] = useState('1qazxcvBG')
    const [er, setEr] = useState('')

    const login = async () => {
        setEr('')
        try {
            const pr = (await AuthAPI.login(em, pas)).data as UserType
            // console.log(pr.data)
            localStorage
                .setItem('token', JSON.stringify({token: pr.token, dt: pr.tokenDeathTime, device: pr.device}))
            setProfile(pr)
        } catch (e) {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            setEr(error)
        }
    }

    if (profile) return <Redirect to={PATH.PROFILE}/>

    return (
        <div>
            login
            <div>
                email: <input value={em} onChange={e => setEm(e.currentTarget.value)}/>
            </div>
            <div>
                password: <input value={pas} onChange={e => setPas(e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={login}>login</button>
            </div>

            {er && (
                <div>
                    error: {er}
                </div>
            )}
        </div>
    )
}

export default Login