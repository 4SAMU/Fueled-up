/**
 * Slices the wallet address to show only the first 6 and last 5 characters.
 * @param {string} address - The wallet address to slice.
 * @returns {string} The sliced wallet address.
 */

export function slicedWalletAddress(address: string): string {
  const firstPart = address.slice(0, 6); // First 6 characters
  const lastPart = address.slice(-5); // Last 5 characters
  return `${firstPart}...${lastPart}`;
}
