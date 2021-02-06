import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = ({ value }) => {
  return <SyntaxHighlighter language="javascript">{value}</SyntaxHighlighter>;
};

export default CodeBlock;
