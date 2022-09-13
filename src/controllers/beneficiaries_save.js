
var ethers = require('ethers');
const  connection = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/', {  chainId: 80001 });
let contractAddress="0x45f235D95401DA99A0dD6A1E8977AE7c6b060cD2";
const privateKey = "0xc6101ccb12d9c89c7e5311f22432feac8491e84cd1a866747d348b9aa6ce9b4d";
const ABI = [
    " function addUser(string _country,string _gender,uint256 _dob,uint _phone,string _firstName,string  _lastName,uint256  _account) public",
    "function getAllUsers() public",
    "function addDonor(string _name,string _password) public"
   

];
const contract = new ethers.Contract(contractAddress, ABI, connection);
var signer = new ethers.Wallet(privateKey, connection)
const txSigner = contract.connect(signer);







const  saveKeeper =async (req, res, next) => {


    try {
       // var result = [];
       // const amt = ethers.utils.parseUnits("10", 18)
        const tx = await txSigner.addUser(req.body.name,req.body.password)
       const iface = new ethers.utils.Interface(ABI);
        let decodedData = iface.parseTransaction({ data: tx.data, value: tx.value });
        const data = Promise.resolve(decodedData)
        data.then(value => {
            res.status(200).json({ Data: value})

        });
      
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
   


}



const saveLandOwner = (req, res, next) => {

    diamModel.findOne({ email: req.body.email }, (err, data) => {
        if (!data) {
            const newDiam = new diamModel({
                email: req.body.email,
                image: req.body.image,
                password: req.body.password,
                donor: req.body.donor

            })

            newDiam.save((err, response) => {
                if (err) return res.json({
                    Error: err
                });
                return res.json({
                    status: 200,
                    "data": response
                });

            })
        } else {
            if (err) return res.json({
                Error: 'something went wrong $err'
            });
            return res.json({
                status: 302,
                data: 'User already exist'
            });

        }
    })
}


module.exports = {
    saveLandOwner,
    saveKeeper

};