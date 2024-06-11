import { createContext, useContext, useState } from 'react';

import {
    createAccountRequest,
    deleteAccountRequest,
    getAccountRequest,
    getAccountsRequest,
    updateAccountRequest
} from '../api/acount.js'

const AccountContext = createContext();

export const useAccounts = () => {
    // 
    const context = useContext(AccountContext);
    // 
    if (!context) throw new Error('useAccount debe usarse en un AccountProvider');
    return context;
};

export function AccountProvider({ children }) {

    // 
    const [accounts, setAccounts] = useState([]);

    // 
    const getAccounts = async () => {
        const res = await getAccountsRequest();
        setAccounts(res.data);
    };

    // 
    const deleteAccount = async (id) => {
        try {
            // 
            const res = await deleteAccountRequest(id);
            // 
            if (res.status === 204) setAccounts(accounts.filter((account) => account._id !== id));

        } catch (error) {
            // 
            console.log(error)
        }
    };

    const createAccount = async (account) => {
        try {
            // 
            const res = await createAccountRequest(account);
            console.log(res.data)

        } catch (error) {
            // 
            console.log(error)
        }
    };

    const getAccount = async (id) => {
        try {
            // 
            const res = await getAccountRequest(id)
            return res.data;
        } catch (error) {
            console.error(error)
        }
    };

    const updateAccount = async(id, account)=>{
        try {
            // 
            await updateAccountRequest(id, account);

        } catch (error) {
            // 
            console.error(error)
        }
    }

    return (
        <AccountContext.Provider
            value={{
                accounts,
                getAccounts,
                deleteAccount,
                createAccount,
                getAccount,
                updateAccount
            }}

        >
            {children}
        </AccountContext.Provider>
    )

}


