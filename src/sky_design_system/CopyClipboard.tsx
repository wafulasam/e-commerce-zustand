import { ReactNode, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface copyProps {
    text: string,
    children: ReactNode
}

export default function CopyPad ({ text, children }:copyProps) {
    const [copySuccess, setCopySuccess] = useState('');

    useEffect(()=> {
        setTimeout(() => {
            setCopySuccess('');
        }, 5000);
    },[copySuccess]) 

    return (
        <div>
            <CopyToClipboard text={text} onCopy={() => setCopySuccess('Text copied!')}>
                {children}
            </CopyToClipboard>
            {copySuccess && <p style={{ color:"#BF3A8C" }}>{copySuccess}</p>}
        </div>
    )
}