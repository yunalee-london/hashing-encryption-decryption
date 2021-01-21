
const algorithm = {
    name: 'AES-GCM',
    length: 128
}

const settings = {
    name: 'AES-GCM',
    iv: new Uint8Array([229, 56, 109, 253, 36, 111, 243, 241, 13, 56, 220, 129, 127, 237, 6, 73])
}


const [encryptedBufferToString, shareableKey] = atob("g8uWPFOCo07uihH2eG+TqfJsCL4i+UAFvDCQKX9P5w7OS5rSqu6kSOei1lREu3vbfHsiYWxnIjoiQTEyOEdDTSIsImV4dCI6dHJ1ZSwiayI6Ilc2UDR5R1RIQnJxMEVIMElSMWpHR1EiLCJrZXlfb3BzIjpbImVuY3J5cHQiLCJkZWNyeXB0Il0sImt0eSI6Im9jdCJ9").split("|")
const ciphertext = new Uint8Array(encryptedBufferToString.match(/[\s\S]/g).map(ch => ch.charCodeAt(0)))

const key = await crypto.subtle.importKey('jwk', JSON.parse(shareableKey), algorithm, false, ["decrypt"])

const decrypted = await crypto.subtle.decrypt(settings, key, ciphertext)
const decodedMessage = new TextDecoder().decode(decrypted)
console.log(decodedMessage)

    
   