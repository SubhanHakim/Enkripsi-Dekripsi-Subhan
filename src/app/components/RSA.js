"use client";

import { useState } from "react";
import forge from "node-forge";

const RsaEncryption = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const generateKeys = () => {
    const keypair = forge.pki.rsa.generateKeyPair({ bits: 1024 });
    const publicPem = forge.pki.publicKeyToPem(keypair.publicKey);
    const privatePem = forge.pki.privateKeyToPem(keypair.privateKey);
    setPublicKey(publicPem);
    setPrivateKey(privatePem);
  };

  const encryptText = () => {
    if (publicKey) {
      const publicKeyForge = forge.pki.publicKeyFromPem(publicKey);
      const encrypted = publicKeyForge.encrypt(inputText, "RSA-OAEP");
      setEncryptedText(forge.util.encode64(encrypted));
    }
  };

  const decryptText = () => {
    if (privateKey && encryptedText) {
      const privateKeyForge = forge.pki.privateKeyFromPem(privateKey);
      const decrypted = privateKeyForge.decrypt(
        forge.util.decode64(encryptedText),
        "RSA-OAEP"
      );
      setDecryptedText(decrypted);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">
        RSA Encryption & Decryption
      </h1>
      <button
        onClick={generateKeys}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate RSA Keys
      </button>
      <div className="flex justify-center gap-4">
        {publicKey && (
          <div className="">
            <h2 className="text-xl font-medium mt-4">Public Key</h2>
            <pre className="bg-white p-4 border rounded">{publicKey}</pre>
          </div>
        )}
        {privateKey && (
          <div>
            <h2 className="text-xl font-medium mt-4">Private Key</h2>
            <pre className="bg-white p-4 border rounded">{privateKey}</pre>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center w-2/4">
        <div className="w-fit">
          {publicKey && (
            <div>
              <h2 className="text-xl font-medium mt-4">Encrypt Text</h2>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="border p-2 rounded w-1/2"
                placeholder="Enter text to encrypt"
              />
              <button
                onClick={encryptText}
                className="px-4 py-2 bg-green-500 text-white rounded ml-2"
              >
                Encrypt
              </button>
            </div>
          )}
          <div className="">
            {encryptedText && (
              <div>
                <h2 className="text-xl font-medium mt-4">Encrypted Text</h2>
                <textarea rows="4" className="w-full">
                  {encryptedText}
                </textarea>
              </div>
            )}
          </div>
          {privateKey && encryptedText && (
            <div>
              <h2 className="text-xl font-medium mt-4">Decrypt Text</h2>
              <button
                onClick={decryptText}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Decrypt
              </button>
            </div>
          )}
          {decryptedText && (
            <div>
              <h2 className="text-xl font-medium mt-4">Decrypted Text</h2>
              <textarea rows="4">{decryptedText}</textarea>
              {/* <pre className="bg-white p-4 border rounded">{decryptedText}</pre> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RsaEncryption;
