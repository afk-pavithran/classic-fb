import App from 'next/app'
import React from 'react'
import '../Styles/global.scss'

type RootProps = {
    Component: React.FC,
    Props: any
}

const MyApp: React.FC<RootProps> = ({Component, Props}) => {
    return <Component {...Props} />
}

export default MyApp