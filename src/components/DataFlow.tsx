// DataFlow.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SvgContainer = styled.svg`
  width: 100%;
  height: 100vh;
  background: #0d1b2a; /* Dark background for contrast */
`;

interface Node {
  id: number;
  x: number;
  y: number;
}

interface Link {
  source: number;
  target: number;
}

const DataFlow: React.FC = () => {
  // Define nodes with positions
  const nodes: Node[] = [
    { id: 1, x: 100, y: 200 },
    { id: 2, x: 300, y: 100 },
    { id: 3, x: 500, y: 200 },
    { id: 4, x: 300, y: 300 },
  ];

  // Define connections between nodes
  const links: Link[] = [
    { source: 1, target: 2 },
    { source: 2, target: 3 },
    { source: 3, target: 4 },
    { source: 4, target: 1 },
  ];

  return (
    <SvgContainer>
      {/* Draw links */}
      {links.map((link, index) => {
        const sourceNode = nodes.find((node) => node.id === link.source);
        const targetNode = nodes.find((node) => node.id === link.target);

        if (!sourceNode || !targetNode) return null;

        return (
          <line
            key={`link-${index}`}
            x1={sourceNode.x}
            y1={sourceNode.y}
            x2={targetNode.x}
            y2={targetNode.y}
            stroke="#1b263b"
            strokeWidth="2"
          />
        );
      })}

      {/* Draw nodes */}
      {nodes.map((node) => (
        <circle
          key={`node-${node.id}`}
          cx={node.x}
          cy={node.y}
          r="10"
          fill="#e0e1dd"
        />
      ))}

      {/* Animate data flow */}
      {links.map((link, index) => {
        const sourceNode = nodes.find((node) => node.id === link.source);
        const targetNode = nodes.find((node) => node.id === link.target);

        if (!sourceNode || !targetNode) return null;

        const deltaX = targetNode.x - sourceNode.x;
        const deltaY = targetNode.y - sourceNode.y;

        return (
          <motion.circle
            key={`data-${index}`}
            cx={sourceNode.x}
            cy={sourceNode.y}
            r="5"
            fill="#ffb703"
            animate={{
              x: deltaX,
              y: deltaY,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.5,
            }}
            style={{ originX: 0, originY: 0 }}
          />
        );
      })}
    </SvgContainer>
  );
};

export default DataFlow;
