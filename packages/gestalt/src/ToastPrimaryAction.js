// @flow strict
import { type Node } from 'react';
import Button from './Button.js';
import Link from './Link.js';

type Props = {|
  accessibilityLabel: string,
  href?: string,
  label: string,
  onClick?: $ElementType<React$ElementConfig<typeof Button>, 'onClick'>,
  rel?: $ElementType<React$ElementConfig<typeof Link>, 'rel'>,
  size?: $ElementType<React$ElementConfig<typeof Button>, 'size'>,
  target?: $ElementType<React$ElementConfig<typeof Link>, 'target'>,
|};

export default function ToastPrimaryAction({
  accessibilityLabel,
  href,
  label,
  onClick,
  rel,
  size = 'lg',
  target,
}: Props): Node {
  if (href && label)
    return (
      <Button
        accessibilityLabel={accessibilityLabel}
        href={href}
        rel={rel}
        target={target}
        role="link"
        text={label}
        size={size}
        onClick={onClick}
      />
    );

  if (label)
    return (
      <Button accessibilityLabel={accessibilityLabel} text={label} size={size} onClick={onClick} />
    );
}
