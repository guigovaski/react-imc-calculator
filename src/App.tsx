import { useState } from 'react';

import styles from './App.module.css';
import { levels, calculateImc, LevelsType } from './helpers/imc';
import { GridItem } from './components/GridItem';

import arrowImage from './assets/images/leftarrow.png';


function App() {

  const [heightValue, setHeightValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [imcItem, setImcItem] = useState<LevelsType | null>(null);
  const [disabled, setDisabled] = useState(false);

  const handleCalculateButton = () => {
    if (heightValue && weightValue) {
      setImcItem(calculateImc(heightValue, weightValue));
      setDisabled(true);
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

  const handleBackButton = () => {
    setImcItem(null);
    setHeightValue(0);
    setWeightValue(0);
    setDisabled(false);
  }

  return (
    <div className="App">
      <div className={styles.mainContainer}>
        <header>
          <div className={styles.headerContainer}>
            <a href="/">
              <div className={styles.logo}>
                <span>IMC</span> Calculator
              </div>
            </a>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Lorem</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className={styles.contentContainer}>
          <div className={styles.leftSide}>
            <h1>Calcular seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corporal, que é um cálculo que serve para avaliar se a pessoa está dentro do seu peso ideal em relação à altura. Assim, de acordo com o valor do resultado de IMC, a pessoa pode saber se está dentro do peso ideal, acima ou abaixo do peso desejado.</p>
            <input 
              type="number"
              placeholder="Digite sua altura. Ex: 1.8 (em metros)"
              value={heightValue > 0 ? heightValue : ''}
              onChange={e => setHeightValue(parseFloat(e.target.value))}
              disabled={disabled}
            />
            <input 
              type="number"
              placeholder="Digite seu peso. Ex: 75.8 (em KG)"
              value={weightValue > 0 ? weightValue : ''}
              onChange={e => setWeightValue(parseFloat(e.target.value))}
              disabled={disabled}
            />
            <button onClick={handleCalculateButton} disabled={disabled}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!imcItem &&
              <div className={styles.gridContainer}>
                {levels.map((item, index) => (
                  <GridItem key={index} data={item} />
                ))}
              </div>
            }
            {imcItem &&
              <div className={styles.rightItem}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={arrowImage} alt="" width="45" />
                </div>
                <GridItem data={imcItem} />
              </div>
            }
          </div>
        </div>
      </div>
    </div>  
  )
}

export default App;
