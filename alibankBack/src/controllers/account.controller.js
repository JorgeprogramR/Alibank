import Account from '../models/account.model.js';

export const getAccounts = async (req, res) =>{
    try {
        // 
        const accounts = await Account.find({
            user: req.user.id
        }).populate('user')
        // 
        res.json(accounts)
    } catch (error) {
        return res.status(500).json ({message: 'Algo salio mal'})  
    }
};

export const createAccount = async (req, res)=>{
    try {
        
        const { accountType, balance } =req.body

        const newAccount = new Account({
            accountType,
            balance,
            user: req.user.id
        })
        const savedAccount = await newAccount.save();
        res.json(savedAccount)

    } catch (error) {
        return res.status(500).json ({message: 'Algo salio mal'})
    }   
}

export const getAccount = async (req, res)=>{
    try {
        // 
        const account = await Account.findById(req.params.id).populate('user')
        // 
        if (!account) return res.status(404).json({message: 'Cuenta no encontrada'})
            return res.json(account)
    } catch (error) {
        return res.status(404).json({message: 'Cuenta no encontrada'})
    }
}

export const deleteAccount = async(req,res)=>{
    try {
        // 
        const account = await Account.findByIdAndDelete(req.params.id)
        // 
        if (!account) return res.status(404).json ({message: 'Cuenta no encontrada'})
            return res.sendStatus(204);
        
    } catch (error) {
        // 
        return res.status(404).json ({message: 'Cuenta no encontrada'})
    }
}

export const updateAccount = async(req, res) => {
    try {
        // 
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, {new: true})

        // 
        if (!account)return res.status(404).json({message: 'Cuenta no encontrada'})
            res.json(account)
    } catch (error) {
        // 
        return res.status(404).json ({message: 'Cuenta no encontrada'})
    }
}