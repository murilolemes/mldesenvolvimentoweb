import { useState, useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Body, Log, Keyboard } from './styles';

export const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [typeCalc, setTypeCalc] = useState('');
  const [result, setResult] = useState('');
  const [percentual, setPercentual] = useState('');

  const handleNumberButton = useCallback(
    (id: string) => {
      if (!typeCalc) {
        setNum1(num1 + id);
        setResult('');
      } else {
        setNum2(num2 + id);
      }
    },
    [num1, num2, typeCalc],
  );

  const handleDivisionButton = useCallback(() => {
    if (num1) {
      setTypeCalc('/');
    } else if (result) {
      setNum1(result);
      setTypeCalc('/');
      setResult('');
    } else {
      setTypeCalc('');
    }
  }, [num1, result]);

  const handlePercentualButton = useCallback(() => {
    if (!percentual) {
      setPercentual('%');
    } else {
      setPercentual('');
    }
  }, [percentual]);

  const handleMultiplicationButton = useCallback(() => {
    if (num1) {
      setTypeCalc('x');
    } else if (result) {
      setNum1(result);
      setTypeCalc('x');
      setResult('');
    } else {
      setTypeCalc('');
    }
  }, [num1, result]);

  const handleSomaButton = useCallback(() => {
    if (num1) {
      setTypeCalc('+');
    } else if (result) {
      setNum1(result);
      setTypeCalc('+');
      setResult('');
    } else {
      setTypeCalc('');
    }
  }, [num1, result]);

  const handleSubtrationButton = useCallback(() => {
    if (num1) {
      setTypeCalc('-');
    } else if (result) {
      setNum1(result);
      setTypeCalc('-');
      setResult('');
    } else {
      setTypeCalc('');
    }
  }, [num1, result]);

  const handleBackSpaceButton = useCallback(() => {
    if (num1 && typeCalc && num2) {
      setNum2('');
    } else if (num1 && typeCalc) {
      setTypeCalc('');
    } else {
      setNum1('');
    }
  }, [num1, typeCalc, num2]);

  const handleEqualButton = useCallback(() => {
    switch (typeCalc) {
      case '/':
        if (!percentual) {
          setResult(`${Number(num1) / Number(num2)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
        } else {
          setResult(`${Number(num1) / (Number(num2) / 100)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
          setPercentual('');
        }
        break;

      case 'x':
        if (!percentual) {
          setResult(`${Number(num1) * Number(num2)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
        } else {
          setResult(`${Number(num1) * (Number(num2) / 100)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
          setPercentual('');
        }
        break;

      case '+':
        if (!percentual) {
          setResult(`${Number(num1) + Number(num2)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
        } else {
          setResult(`${Number(num1) + Number(num1) * (Number(num2) / 100)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
          setPercentual('');
        }
        break;

      case '-':
        if (!percentual) {
          setResult(`${Number(num1) - Number(num2)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
        } else {
          setResult(`${Number(num1) - Number(num1) * (Number(num2) / 100)}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
          setPercentual('');
        }
        break;

      default:
        if (percentual) {
          setResult(`${Number(num1) / 100}`);
          setTypeCalc('');
          setNum1('');
          setNum2('');
          setPercentual('');
        }
        break;
    }
  }, [num1, num2, typeCalc, percentual]);

  const handleCleanButton = useCallback(() => {
    setNum1('');
    setNum2('');
    setTypeCalc('');
    setResult('');
    setPercentual('');
  }, []);

  return (
    <Container>
      <Content>
        <Body>
          <Log>
            <p id="number1">{num1}</p>
            <p>{typeCalc}</p>
            <p>
              {num2}
              {percentual}
            </p>
            <p id="result">{result}</p>
          </Log>
          <Keyboard>
            <div className="keyboardButtons">
              <button type="button" onClick={() => handleCleanButton()}>
                C
              </button>
              <button type="button" onClick={() => handleDivisionButton()}>
                /
              </button>
              <button type="button" onClick={() => handlePercentualButton()}>
                %
              </button>
              <button
                type="button"
                id="backSpace"
                onClick={() => handleBackSpaceButton()}
              >
                <FiArrowLeft />
              </button>
            </div>
            <div className="keyboardButtons">
              <button type="button" onClick={() => handleNumberButton('7')}>
                7
              </button>
              <button type="button" onClick={() => handleNumberButton('8')}>
                8
              </button>
              <button type="button" onClick={() => handleNumberButton('9')}>
                9
              </button>
              <button
                type="button"
                onClick={() => handleMultiplicationButton()}
              >
                x
              </button>
            </div>
            <div className="keyboardButtons">
              <button type="button" onClick={() => handleNumberButton('4')}>
                4
              </button>
              <button type="button" onClick={() => handleNumberButton('5')}>
                5
              </button>
              <button type="button" onClick={() => handleNumberButton('6')}>
                6
              </button>
              <button type="button" onClick={() => handleSomaButton()}>
                +
              </button>
            </div>
            <div className="keyboardButtons">
              <button type="button" onClick={() => handleNumberButton('1')}>
                1
              </button>
              <button type="button" onClick={() => handleNumberButton('2')}>
                2
              </button>
              <button type="button" onClick={() => handleNumberButton('3')}>
                3
              </button>
              <button type="button" onClick={() => handleSubtrationButton()}>
                -
              </button>
            </div>
            <div className="keyboardButtons">
              <button type="button" onClick={() => handleNumberButton('0')}>
                0
              </button>
              <button type="button" onClick={() => handleNumberButton('.')}>
                .
              </button>
              <button
                type="button"
                id="equal"
                onClick={() => handleEqualButton()}
              >
                =
              </button>
            </div>
          </Keyboard>
        </Body>
      </Content>
    </Container>
  );
};