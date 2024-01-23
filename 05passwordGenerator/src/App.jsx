import { useCallback, useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState('');
  const [btnstyle, setBtnstyle] = useState({
    buttonText: 'Copy',
    buttonStyle: {
      backgroundColor: 'blue',
      color: 'white',
    },
  });

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllow) str += '0123456789';
    if (characterAllow) str += "!@#$%&'()*+{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, characterAllow, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);

    setBtnstyle({
      buttonText: 'Copied!',
      buttonStyle: {
        backgroundColor: 'green',
      },
    });
    // Show alert
    alert('Password copied to clipboard!');

    // Reset button UI after a brief delay
    setTimeout(() => {
      setBtnstyle({
        buttonText: 'Copy',
        buttonStyle: {
          backgroundColor: 'blue',
          color: 'white',
        },
      });
    }, 1500);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className=' text-center text-white my-3 '>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            style={{
              backgroundColor: btnstyle.buttonStyle.backgroundColor,
              color: btnstyle.buttonStyle.color,
            }}
          >
            {btnstyle.buttonText}
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={characterAllow}
              id='characterInput'
              onChange={() => {
                setCharacterAllow((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
