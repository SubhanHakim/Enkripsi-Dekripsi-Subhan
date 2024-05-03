"use client";
import { useState } from "react";
import CryptoJS from "crypto-js";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
} from "@material-tailwind/react";

const Kriptografi = () => {
  const [PlainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [encryptionText, setEncryptionText] = useState("");

  const enkripsiText = () => {
    const enkripsi = CryptoJS.RC4.encrypt(PlainText, encryptionText).toString();
    setCipherText(enkripsi);
    console.log(enkripsi);
  };

  const dekripsiText = () => {
    const dekripsi = CryptoJS.RC4.decrypt(cipherText, encryptionText);
    const decryptString = dekripsi.toString(CryptoJS.enc.Utf8);
    setDecryptedText(decryptString);
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col items-end gap-4">
          <Input
            size="lg"
            value={PlainText}
            onChange={(e) => setPlainText(e.target.value)}
            label="Plain Text"
          />
          <Input
            size="lg"
            value={encryptionText}
            onChange={(e) => setEncryptionText(e.target.value)}
            label="Key"
          />
        </div>
        <div className="flex gap-4">
          <Button onClick={enkripsiText}>Enkripsi</Button>
          <Button onClick={dekripsiText}>Dekripsi</Button>
        </div>
        <div>
          <Typography>Hasil Enkripsi : {cipherText}</Typography>
          <Typography>Hasil Dekripsi : {decryptedText}</Typography>
        </div>
      </div>
    </>
  );
};

export default Kriptografi;
