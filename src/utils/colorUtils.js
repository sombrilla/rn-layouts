/* eslint-disable import/prefer-default-export */
export const hexWithAlphaComponent = (hex, alpha) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    /* eslint no-bitwise: ["error", {"allow": ['>>', '&']}] */
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255]}, ${alpha})`;
  }

  return hexWithAlphaComponent('#000000', alpha);
};
