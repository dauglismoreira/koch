import React, { ReactNode, CSSProperties } from 'react';

interface SectionProps {
  children?: ReactNode;
  background?: string;
  fixHeight?: number;
  padding?: string;
  zIndex?: string;
  position?: CSSProperties['position'];
}

export const Section: React.FC<SectionProps> = ({ children, zIndex, padding, background, fixHeight, position }) => {
  const containerStyle: CSSProperties = {
    width: '100%',
    margin: '0 auto',
    padding: padding || '20px 0 15px',
    overflow: 'hidden',
    background: background || 'transparent',
    position: position || 'static',
    height: fixHeight || 'auto',
    zIndex: zIndex || 99,
  };

  return <div style={containerStyle}>{children}</div>;
};

interface ContainerProps {
  children?: ReactNode;
  background?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, background }) => {
  const containerStyle: CSSProperties = {
    maxWidth: '1560px',
    margin: '0 auto',
    background: background || 'transparent',
  };

  return <div style={containerStyle}>{children}</div>;
};

interface RowProps {
  children?: ReactNode;
  margin?: string;
  padding?: string;
  breakpoint?: boolean;
  reverse?:boolean;
  gap?:string;
}

export const Row: React.FC<RowProps> = ({ children, gap, reverse, breakpoint, margin, padding }) => {
  const rowStyle: CSSProperties = {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: margin || '-8px 0',
    padding: padding || '0',
    justifyContent: 'space-between',
    gap: gap || '0',
  };

  if (breakpoint) {
    if(reverse){
      rowStyle.flexDirection = 'column-reverse';
    }else{
      rowStyle.flexDirection = 'column';
    }
  }

  return <div style={rowStyle}>{children}</div>;
};

interface ColProps {
  children?: ReactNode;
  flex?: number;
  border?:string;
  padding?:string;
  align?:'left' | 'center' | 'right' | undefined;
  className?: string;
}

export const Col: React.FC<ColProps> = ({ children, align, border, padding, flex, className }) => {
  const colStyle: CSSProperties = {
    flex: flex || 'auto',
    padding: padding || '8px',
    border: border || 'none',
    textAlign: align || 'left',
  };

  const combinedClassName = `${className || ''} col`;

  return <div className={combinedClassName} style={colStyle}>{children}</div>;
};