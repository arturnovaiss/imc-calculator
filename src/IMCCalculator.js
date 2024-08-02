import React, { useState } from 'react';

const IMCCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateIMC = () => {
    const heightInMeters = height / 100;
    const imcValue = weight / (heightInMeters * heightInMeters);
    setImc(imcValue.toFixed(2));
    setClassification(getClassification(imcValue));
  };

  const getClassification = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    if (imc >= 40) return 'Obesidade grau III';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateIMC();
  };

  return (
    <div className="imc-calculator">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {imc && (
        <div className="imc-result">
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classification}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
