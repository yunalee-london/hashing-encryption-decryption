

const algorithm = {
    name: 'AES-GCM',
    length: 128
}

const settings = {
    name: 'AES-GCM',
    iv: new Uint8Array([229, 56, 109, 253, 36, 111, 243, 241, 13, 56, 220, 129, 127, 237, 6, 73])
}


let msg = "Hi Keratuwe, it is going to be snowing this week."
const toEncode = new TextEncoder().encode(msg)
const key = await crypto.subtle.generateKey(algorithm, true, ["encrypt", "decrypt"])
const shareableKey = await crypto.subtle.exportKey('jwk', key)
const ciphertext = await crypto.subtle.encrypt(settings, key, toEncode)

const encryptedBufferToString = Array
    .from(new Uint8Array(ciphertext))
    .map(byte => String.fromCharCode(byte)).join('')
const toTransfer = btoa(encryptedBufferToString + "|" + JSON.stringify(shareableKey))

console.log(toTransfer)



   