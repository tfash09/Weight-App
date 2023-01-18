import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
      day: 't',
      time: 8,
    },
    {
        day: 'w',
        time: 12,
      },
      {
        day: 't',
        time: 4,
      },
      {
        day: 'f',
        time: 8,
      },
      {
        day: 's',
        time: 10,
      },
      {
        day: 's',
        time: 5,
      },
      {
        day: 'm',
        time: 1,
      }
  ];


  export default class Example extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height={158}>
            <BarChart
                width={400}
                height={400}
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
              <Bar dataKey="time" fill="#8884d8" radius={[8, 8, 8, 8]}/>
            </BarChart>
          </ResponsiveContainer>
        );
    }
  }