import { FC } from 'react';
import QRCode from 'react-qr-code';

export interface QrGeneratorProps {
  uniqueId: string;
  name: string;
}

const QrGenerator: FC<QrGeneratorProps> = ({ uniqueId, name }) => {
  return (
    <>
      <h1>QR Generator</h1>
      <ul>
        <li>Unique ID: {uniqueId}</li>
        <li>Name: {name}</li>
        <QRCode value={JSON.stringify({ uniqueId, name })} level='L' />
      </ul>
    </>
  );
};

export default QrGenerator;
