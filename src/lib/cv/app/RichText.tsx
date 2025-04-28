import { memo } from "react";
import Markdown from "react-markdown";

type RichTextProps = {
  text: string;
};

const Link: React.FC<React.JSX.IntrinsicElements["a"]> = memo(
  ({ href, children }) => {
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    );
  }
);

const components: Partial<{
  [TagName in keyof React.JSX.IntrinsicElements]: React.FunctionComponent<
    React.JSX.IntrinsicElements[TagName]
  >;
}> = {
  a: Link,
};

const RichText: React.FC<RichTextProps> = ({ text }) => {
  return <Markdown components={components as any}>{text}</Markdown>;
};

export default RichText;
