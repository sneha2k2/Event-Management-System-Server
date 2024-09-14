const bcrypt = require('bcryptjs');

let decryptPassword=async(password,hashedPassword)=>{
    let ispasswordMatching = await bcrypt.compare(password,hashedPassword);
    return ispasswordMatching;
}

module.exports=decryptPassword