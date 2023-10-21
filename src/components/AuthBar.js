import React from 'react'
import { useAuth } from "react-oidc-context"
import { Space, Typography, Button } from 'antd'
import { State } from 'oidc-client-ts'
const { Text } = Typography

function AuthBar() {
    const auth = useAuth()
    const spaceStyle = {
        background: "#34cbcb",
        justifyContent: "end",
        paddingRight: "10px"
    }

    return (
           
        <Space wrap style={spaceStyle}>
                    
            <Text>Hi {auth.user?.profile.preferred_username}</Text>
            <Button
                type="default"
                size="primary"
                defaultBg="#34cbcb"
                onClick={() => auth.signoutRedirect()}
                danger
            >
                Logout
            </Button>

            
        </Space>
    )
}

export default AuthBar