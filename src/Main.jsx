import React, { useEffect, useState } from 'react';
import useAuth from './hook/useAuth'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core';
import useWeb3 from './hook/useWeb3'
import ContractABI from './utils/abi/abiSmart.json';
import { toast } from "react-toastify";
import './Main.css'

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97]
})
export const shortenAddress = (address, chars = 6) => {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
let wBNBAddress = '0xae13d989dac2f0debff460ac112a837c89baa7cd';
let MPOLYAddress = '0x6a4e41E9114B4E5528bE8C34f95a4F3134c903C7';
let BUSDAddress = '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7';
let WBNB_BUSD = '0xe0e92035077c39594793e61802a350347c320cf2';

const Main = () => {
    const { login, logout } = useAuth()
    const { account } = useWeb3React()
    const [totalWbnb, setTotalWbnb] = useState(0)
    const [totalMpoly, setTotalMpoly] = useState(0)
    const [totalBusd, setTotalBusd] = useState(0)

    const webThree = useWeb3();

    const getContract = async (address) => {
        const contract = new webThree.eth.Contract(ContractABI, address);
        return contract
    };



    const getBalance = async () => {
        const wbnContract = await getContract(wBNBAddress)
        const mpolyContract = await getContract(MPOLYAddress)
        const busdContract = await getContract(BUSDAddress)
        //Fetch balance of wbnb
        wbnContract.methods.balanceOf(account).call(function (err, res) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            let value = res / 10e17;
            setTotalWbnb(value);
        });
        //Fetch balance of Mpoly
        mpolyContract.methods.balanceOf(account).call(function (err, res) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            let value = res / 10e17;
            setTotalMpoly(value);
        });
        //Fetch balance of Busd
        busdContract.methods.balanceOf(account).call(function (err, res) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            let value = res / 10e17;
            setTotalBusd(value)
        });

    }
    useEffect(() => {
        getBalance()
    }, [account])

    return (
        <div className='main' id="main">
            {account ?
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <button className='main-button' ><a target="_blank" className='ancor' href={`https://testnet.bscscan.com/address/${account}`}>{shortenAddress(account)}</a></button>
                        <button className='main-button' onClick={() => { logout() }} >Logout</button>
                    </div>
                </div>
                :
                <button className='main-button' onClick={() => { login(injected) }}>CONNECT</button>}
            {account ?
                <>
                    <p className='main-p-same'>You Are connected now</p>
                    <div className='row w-100 '>
                        <div className='col-4 border-div'>
                            <p className='main-p-same'>Wrapped BNB</p>
                            <p className='main-p-simple'>wBNB</p>
                            <p className='main-p-simple'><a target="_blank" className='ancor' href={`https://testnet.bscscan.com/address/0xae13d989dac2f0debff460ac112a837c89baa7cd`}>{shortenAddress(wBNBAddress)}</a></p>
                            <p className='main-p-simple'>Balance : {totalWbnb}</p>

                        </div>
                        <div className='col-4 border-div'>
                            <p className='main-p-same'>Monstropoly</p>
                            <p className='main-p-simple'>MPOLY</p>
                            <p className='main-p-simple'><a target="_blank" className='ancor' href={`https://testnet.bscscan.com/address/0x6a4e41E9114B4E5528bE8C34f95a4F3134c903C7`}>{shortenAddress(MPOLYAddress)}</a></p>
                            <p className='main-p-simple'>Balance : {totalMpoly}</p>

                        </div>
                        <div className='col-4 border-div'>
                            <p className='main-p-same'>Binance USD</p>
                            <p className='main-p-simple'>BUSD</p>
                            <p className='main-p-simple'><a target="_blank" className='ancor' href={`https://testnet.bscscan.com/address/0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7`}>{shortenAddress(BUSDAddress)}</a></p>
                            <p className='main-p-simple'>Balance : {totalBusd}</p>
                        </div>
                    </div>
                </> :
                <>
                    <p className='main-p-same'>Click to Connect your 
                    wallet</p>
                </>
            }
        </div>
    );
}

export default Main;