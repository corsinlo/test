import Web3 from 'web3'

const RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/"
const httpProvider = new Web3.providers.HttpProvider(RPC_URL, { timeout: 10000 })
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount }
export default web3NoAccount
