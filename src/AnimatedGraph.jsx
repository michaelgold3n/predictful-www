import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

function getAnimatedData(fullData, progress) {
  // Always include all data points, but only show values up to current x position
  return fullData.map(point => {
    // If this point's x position is beyond our current progress, return null for y value
    if (point.users > progress * 1000) {
      return {
        users: point.users,
        engagement: null
      };
    }
    return point;
  });
}

export default function AnimatedGraph({ dataA, dataB, animationProgress }) {
  // Get the full dataset but with nulls for future points
  const a = getAnimatedData(dataA, animationProgress);
  const b = getAnimatedData(dataB, animationProgress);
  
  // Merge the datasets
  const merged = a.map((point, i) => ({
    users: point.users,
    'Version A': point.engagement,
    'Version B': b[i].engagement
  }));

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart 
        data={merged} 
        margin={{ top: 5, right: 30, left: 25, bottom: 5 }}
        style={{ background: '#181a20' }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="#333" 
          horizontal={true}
          vertical={false}
        />
        <XAxis 
          dataKey="users" 
          stroke="#888" 
          tick={{ fill: '#666', fontSize: 12 }}
          domain={[0, 500]}
          tickCount={6}
          axisLine={{ stroke: '#333' }}
          label={{ value: 'Users Analyzed', position: 'insideBottom', offset: -5, fill: '#666', fontSize: 12 }}
        />
        <YAxis 
          stroke="#888" 
          tick={{ fill: '#666', fontSize: 12 }}
          domain={[0, 2000]}
          tickCount={5}
          axisLine={{ stroke: '#333' }}
          label={{ value: 'Total Engagement', angle: -90, position: 'insideLeft', offset: -15, fill: '#666', fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{ background: '#23262f', border: 'none', color: '#fff' }} 
          labelStyle={{ color: '#fff' }}
          formatter={(value) => value ? value.toFixed(0) : 'N/A'}
        />
        <Legend 
          wrapperStyle={{ color: '#fff', padding: '24px 0 0 0' }} 
          iconSize={18}
          align="left"
        />
        <Line 
          type="monotone" 
          dataKey="Version A" 
          stroke="#2e90fa" 
          strokeWidth={2} 
          dot={false}
          isAnimationActive={false}
          connectNulls
        />
        <Line 
          type="monotone" 
          dataKey="Version B" 
          stroke="#ff9800" 
          strokeWidth={2} 
          dot={false}
          isAnimationActive={false}
          connectNulls
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 