export const generateRandomId = (length = 5) => {
    let randomId = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomId;
}