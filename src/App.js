import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {

  const [inputText, setInputText] = useState('');
  const [inputurl, setInputurl] = useState('');
  const [inputpnum, setInputpnum] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

  const generateQRCode = () => {
    setQRCodeText(inputText)
  };

  const generatecode = () => {
    setQRCodeText(inputurl)
  };

  const generateccode = () => {
    setQRCodeText(inputpnum)
  }

  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div className="App">
      <div className="qr-input">
        < div className='first'>
          <input
            type="text"
            placeholder="Enter text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <input
            type="button"
            value="Generate"
            onClick={generateQRCode}
          />
        </ div>
        <br />
        < div className='second'>
          <input
            type="url"
            placeholder="Enter url"
            value={inputurl}
            onChange={e => setInputurl(e.target.value)}
          />

          <input
            type="button"
            value="Generate"
            onClick={generatecode}
          />
        </ div>
        <br />

        < div className='third'>
          <input
            type="number"
            placeholder="Enter Phone number"
            value={inputpnum}
            onChange={e => setInputpnum(e.target.value)}
          />

          <input
            type="button"
            value="Generate"
            onClick={generateccode}
          />
        </div>
        
        <br />
      </div>
      <div className='download'>
        <QRCode
          id="qrCodeEl"
          size={150}
          value={qrCodeText}
        />
      </div>

      <br />
      <div className="dwn-button">
        <input
          type="button"
          className="download-btn"
          value="Download"
          onClick={downloadQRCode}
        />
      </div>
    </div>
  );
}

export default App;
