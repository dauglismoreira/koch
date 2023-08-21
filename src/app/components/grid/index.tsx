import React, { ReactNode, CSSProperties } from 'react';

interface SectionProps {
  children?: ReactNode;
  background?: string;
  fixHeight?: number;
  padding?: string;
  position?: CSSProperties['position'];
}

export const Section: React.FC<SectionProps> = ({ children, padding, background, fixHeight, position }) => {
  const containerStyle: CSSProperties = {
    width: '100%',
    margin: '0 auto',
    padding: padding || '20px 0 15px',
    overflow: 'hidden',
    background: background || 'transparent',
    position: position || 'static',
    height: fixHeight || 'auto'
  };

  return <div style={containerStyle}>{children}</div>;
};

interface ContainerProps {
  children?: ReactNode;
  background?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, background }) => {
  const containerStyle: CSSProperties = {
    maxWidth: '1360px',
    margin: '0 auto',
    background: background || 'transparent',
  };

  return <div style={containerStyle}>{children}</div>;
};

interface RowProps {
  children?: ReactNode;
}

export const Row: React.FC<RowProps> = ({ children }) => {
  const rowStyle: CSSProperties = {
    display: 'flex',
    width:'100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: '-8px',
    justifyContent: 'space-between'
  };

  return <div style={rowStyle}>{children}</div>;
};

interface ColProps {
  children?: ReactNode;
  flex?: number;
}

export const Col: React.FC<ColProps> = ({ children, flex }) => {
  const colStyle: CSSProperties = {
    flex: flex || 'auto',
    padding: '8px',
  };

  return <div style={colStyle}>{children}</div>;
};