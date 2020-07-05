import React from 'react'

export type HelloProps = {
    helloTo: string,
}

export const Hello: React.FC<HelloProps> = ({ helloTo }) => {
    return (<div>Hello {helloTo}</div>)
}