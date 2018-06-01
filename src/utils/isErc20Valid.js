export default function isErc20Valid(value) {
  return (value === '') || /^0x[a-fA-F0-9]{40}$/.test(value);
}