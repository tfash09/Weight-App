import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {day: 't', weight: 69},
    {day: 'w', weight: 64},
    {day: 't', weight: 77},
    {day: 'f', weight: 59},
    {day: 's', weight: 74},
    {day: 's', weight: 70},
    {day: 'm', weight: 80}
]


export default class HistoryWeightChart extends PureComponent{

    render(){
        return(
            <div>
                <ResponsiveContainer width="100%" height={100}>
                    <LineChart
                        width={400}
                        height={200}
                        data={data}
                        margin={{
                        top: 10,
                        right: 10,
                        left: 60,
                        bottom: 15,
                        }}
                    >
                        <XAxis dataKey="day" />
                        <Tooltip />
                        <Line type="monotone" dataKey="weight" stroke="#c3fe4d" fill="#7B66FF" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}