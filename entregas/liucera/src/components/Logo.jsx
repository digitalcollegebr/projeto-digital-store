import { useState } from 'react';
import { assets } from '../data/assets.js';

export default function Logo({ variant = 'header', width }) {
  const [imageFailed, setImageFailed] = useState(false);
  const source = variant === 'footer' ? assets.logoFooter : assets.logoHeader;

  if (imageFailed) {
    return (
      <span className={'brand-fallback brand-fallback--' + variant}>
        <span className="brand-fallback__mark">D</span>
        <span>Digital Store</span>
      </span>
    );
  }

  return (
    <img
      className={'brand-logo brand-logo--' + variant}
      src={source}
      alt="Digital Store"
      width={width || 253}
      height={44}
      onError={() => setImageFailed(true)}
    />
  );
}
