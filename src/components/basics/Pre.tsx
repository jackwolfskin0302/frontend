import React, { useEffect, useRef, useState } from 'react';
import { CodeSnippets as DesignSystemCodeSnippets, Highlight } from '@storybook/design-system';

import { CODE_SNIPPET_CLASSNAME } from '../../constants/code-snippets';

const getIsNestedCodeSnippet = (element) => {
  const { parentElement } = element;

  if (parentElement.tagName === 'BODY') {
    return false;
  }

  if (parentElement.classList.contains(CODE_SNIPPET_CLASSNAME)) {
    return true;
  }

  return getIsNestedCodeSnippet(parentElement);
};

// This component takes <pre> tags that are generated by Gatsby's markdown
// processor and lets them use the CodeSnippets component from the design
// system. If this is a nested CodeSnippets render (as can happen when you have
// the CodeSnippets component that outputs more <pre> tags), then we avoid rendering
// the CodeSnippets multiple times and instead just default to the given markup.
export function Pre({ children }) {
  const [content, setContent] = useState(null);
  const preRef = useRef();

  useEffect(() => {
    if (preRef.current) {
      const isNestedCodeSnippet = getIsNestedCodeSnippet(preRef.current);
      const baseContent = <pre className={children.props.className}>{children}</pre>;

      if (isNestedCodeSnippet) {
        setContent(<Highlight withHTMLChildren={false}>{baseContent}</Highlight>);
        return;
      }

      setContent(
        <DesignSystemCodeSnippets
          className={CODE_SNIPPET_CLASSNAME}
          snippets={[{ id: '1', Snippet: () => baseContent }]}
        />
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preRef.current]);

  return <div ref={preRef}>{content}</div>;
}
