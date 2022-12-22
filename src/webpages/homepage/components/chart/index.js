import React from 'react';
import styles from './chart.module.scss';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";



export default function Chart() {
    const data = [
    {
        name: "T",
        uv: 0,
        pv: 10,
    },
    {
        name: "W",
        uv: 0,
        pv: 9,
    },
    {
        name: "T",
        uv: 5,
        pv: 0,
    },
    {
        name: "F",
        uv: 8,
        pv: 0,
    },
    {
        name: "S",
        uv: 0,
        pv: 9,
    },
    {
        name: "S",
        uv: 4,
        pv: 0,
    },
    {
        name: "M",
        uv: 6,
        pv: 0,
    }
    ];    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3><span style={{float: "left"}}>Goal of the week</span><span className={styles.number}>42 of 54</span></h3>
            </div>
            <div className={styles.chart}>
                <ResponsiveContainer width="100%">
                    <BarChart
                        width={370}
                        background={{ fill: '#eee' }}
                        height={280}
                        data={data}
                        margin={{
                            top: 20,
                            right: 0,
                            left: -30,
                            bottom: 25
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="pv" stackId="a" fill="#C3FF4D" />
                        <Bar dataKey="uv" stackId="a" fill="#beb4ff" />
                    </BarChart>
                        
                </ResponsiveContainer>
            </div>
        </div>        
    )
}