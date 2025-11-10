import { useState } from 'react';
import { authService } from '../../services/authService';

const COIN_PACKAGES = [
  { amount: 500, price: 5 },
  { amount: 1000, price: 9 },
  { amount: 2500, price: 20 },
  { amount: 5000, price: 35 },
  { amount: 10000, price: 60 }
];

interface UseBuyCoinsModalProps {
  userEmail: string;
  onClose: () => void;
}

export const useBuyCoinsModal = ({ userEmail, onClose }: UseBuyCoinsModalProps) => {
  const [selectedPackage, setSelectedPackage] = useState(COIN_PACKAGES[0]);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const isSpanish = navigator.language.toLowerCase().startsWith('es');

  const handleBuyCoins = (e: React.FormEvent) => {
    e.preventDefault();

    authService.updateCoins(userEmail, selectedPackage.amount);

    alert(
      isSpanish
        ? `¡Compra exitosa! Has recibido ${selectedPackage.amount.toLocaleString()} monedas.`
        : `Purchase successful! You received ${selectedPackage.amount.toLocaleString()} coins.`
    );

    setCardNumber('');
    setCardName('');
    setExpiryDate('');
    setCvv('');
    onClose();
    window.location.reload();
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const chunks = cleaned.match(/.{1,4}/g);
    return chunks ? chunks.join(' ') : cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '');
    if (value.length <= 16 && /^\d*$/.test(value)) {
      setCardNumber(formatCardNumber(value));
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    if (value.length <= 5) {
      setExpiryDate(value);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  return {
    COIN_PACKAGES,
    selectedPackage,
    setSelectedPackage,
    cardNumber,
    cardName,
    setCardName,
    expiryDate,
    cvv,
    isSpanish,
    handleBuyCoins,
    handleCardNumberChange,
    handleExpiryChange,
    handleCvvChange
  };
};
