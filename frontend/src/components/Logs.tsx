'use client'

import { useState } from 'react'

type Props = {
    fetchData(): Promise<any>
}

export function Logs ({ fetchData }: Props) {
    const [data, setData] = useState<any[]>([])

    const handleClick = () => {
        fetchData().then(setData)
    }

    return (
        <>
            <button type="button" onClick={handleClick}>
                Buscar dados
            </button>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Message</th>
                    <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(log => (
                        <tr key={log._id}>
                            <td>{log._id}</td>
                            <td>{log.message}</td>
                            <td>{new Date(log.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
