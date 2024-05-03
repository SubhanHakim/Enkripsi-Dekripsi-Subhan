"use client";

import { Button, Typography, Input } from "@material-tailwind/react";
import { useState } from "react";
import rc4 from "../lib/RC4"

const KriptoRC4 = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");

  const handleEncrypt = () => {
    const result = rc4(key, text);
    setEncrypt(result);
  };

  const handleDecrypt = () => {
    const result = rc4(key, encrypt);
    setDecrypt(result);
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col items-end gap-4">
          <Input
            size="lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Plain Text"
          />
          <Input
            size="lg"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            label="Key"
          />
        </div>
        <div className="flex gap-4">
          <Button onClick={handleEncrypt}>Enkripsi</Button>
          <Button onClick={handleDecrypt}>Dekripsi</Button>
        </div>
        <div>
          <Typography>Hasil Enkripsi : {encrypt}</Typography>
          <Typography>Hasil Dekripsi : {decrypt}</Typography>
        </div>
      </div>
    </>
  );
};

export default KriptoRC4;
