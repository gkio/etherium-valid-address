import isErc20Valid from './isErc20Valid.js';

it('should check valid Erc20', () => {
  const addresses = [
    '0x8d12a197cb00d4747a1fe03395095ce2a5cc6819',
    '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0'
  ]

  addresses.forEach(address => {
    expect(isErc20Valid(address)).toBeTruthy()
  })
});

it('should check not valid Erc20', () => {
  const addresses = [
    '0x8d12a197cb00d4as747a1fe03395095ce2a5cc6819',
    '0x86fa049857e09aa7d9e616f7eb3b3b78ecfdb0',
    '0x86fa049857e09aa7d9e616f7eb3b3b78e~#@#cfdb0',
    '0x86fa049857cfdb0',
    '9886fa049857cfdb0',
    '9x86fa049857cfdb0',
  ]

  addresses.forEach(address => {
    expect(isErc20Valid(address)).toBeFalsy()
  })
});