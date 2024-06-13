import React, { useState } from 'react';

function Main() {

{
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });
const [total, setTotal] = useState(null);


  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const calcular = () => {
    let soma = 10;

    if (checkboxes.checkbox1) {
      soma += 5.25;
    }
    if (checkboxes.checkbox2) {
      soma += 1.58; // Valor associado à checkbox2
    }
    if (checkboxes.checkbox3) {
      soma += 3.75; // Valor associado à checkbox3
    }

setTotal(soma);
  };
  return (
    <>
  
        <div className="container">

          <div
            className="Card"
            style={{
              backgroundColor: "#F4F4F4",
            }}
          >
            <div className="row">
            <div className="col-12">
          
                      <h1 className="titulo" style={{ marginLeft: "10%" }}>
            Calzone
          
          </h1>
          </div>
            </div>
            <p
              className="NomeP"
              style={{
                textAlign: "left",
                fontStyle: "italic",
                marginLeft: "10%",
              }}
            >
              Delicioso calzone de presunto e queijo
            </p>
            <p
              className="mensagemRemocao"
              style={{ fontSize: "32px", marginLeft: "10%" }}
            >
              Remover Ingrediente
            </p>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
               
              }}
            >
              <p
                className="Queijo"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0 20px 10px",
                  width: "95%",
                  height: "90px",
                  fontSize: "32px",
                }}
              >
                Queijo
              </p>
              <div className="option">
                <input
                  type="checkbox"
                  style={{
                    float: "right",
                    height: "40px",
                    width: "40px",
                    marginTop: "-80px",
                    marginRight: "10%",
                  }}
                  id="option1"
                  className="checkbox"
                />
                <label htmlFor="option1" />
              </div>
            </div>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
              }}
            >
              <p
                className="Oregano"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0 20px 10px",
                  width: "95%",
                  height: "90px",
                  fontSize: "32px",
                }}
              >
                Orégano
              </p>
              <div className="option">
                <input
                  type="checkbox"
                  style={{
                    float: "right",
                    height: "40px",
                    width: "40px",
                    marginTop: "-80px",
                    marginRight: "10%",
                  }}
                  id="option1"
                  className="checkbox"
                />
                <label htmlFor="option1" />
              </div>
            </div>

            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
              }}
            >
              <p
                className="Presunto"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0 20px 10px",
                  width: "95%",
                  height: "90px",
                  fontSize: "32px",
                }}
              >
                Presunto
              </p>
              <div className="option">
                <input
                  type="checkbox"
                  style={{
                    float: "right",
                    height: "40px",
                    width: "40px",
                    marginTop: "-80px",
                    marginRight: "10%",
                  }}
                  id="option1"
                  className="checkbox"
                />
                <label htmlFor="option1" />
              </div>
            </div>
            <p
              className="mensagemAdiocionar"
              style={{ fontSize: "32px", marginLeft: "10%" }}
            >
              Adicionar Ingredientes
            </p>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
              }}
            >
              <p
                className="Queijo"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0 20px 10px",
                  width: "95%",
                  height: "90px",
                  fontSize: "32px",
                }}
              >
                Queijo
              </p>
              <div className="option">
                <input
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                  style={{
                    float: "right",
                    height: "40px",
                    width: "40px",
                    marginTop: "-80px",
                    marginRight: "10%",
                  }}
                  id="option1"
                  className="checkbox"
                />
                <label htmlFor="option1" />
              </div>
            </div>

            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
              }}
            >
              <p
                className="Oregano"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0 20px 10px",
                  width: "95%",
                  height: "90px",
                  fontSize: "32px",
                }}
              >
                Orégano
              </p>
              <div className="option">
                <input
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                  style={{
                    float: "right",
                    height: "40px",
                    width: "40px",
                    marginTop: "-80px",
                    marginRight: "10%",
                  }}
                  id="option1"
                  className="checkbox"
                />
                <label htmlFor="option1" />
              </div>
            </div>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
              }}
            >
              <p
                className="Presunto"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0 20px 10px",
                  width: "95%",
                  height: "90px",
                  fontSize: "32px",
                }}
              >
                Presunto
                
              </p>
              <div className="option">
                <input
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
                  style={{
                    float: "right",
                    height: "40px",
                    width: "40px",
                    marginTop: "-80px",
                    marginRight: "10%",
                  }}
                  id="option1"
                  className="checkbox"
                />
              </div>
            </div>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "10%",
                width: "80%",
               
              }}
            >
            <button type="button" onClick={calcular}
                      style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        color: "#fff",
                        backgroundColor: "#007bff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                        float: "right",
                        marginRight:"5%",}}>Calcular</button>
            <p
            className='taxa'
            style={{
              fontSize:"20px",
            }}>Taxa extra: R${total !== null ? total : 'Nenhum cálculo realizado ainda'}</p>
            </div>
            <h1
            className="observacoes"
            style={{
              fontSize: "32px",
              marginLeft: "10%",
            }}
          >
            Observações:
          </h1>
          <textarea
          style={{
              fontSize: "16px",
              marginLeft: "10%",
              marginBottom: "30%",
              width: "77%",
              height: "400px",
            }}
          />
          </div>
        </div>
    </>
  );
}
}
export default Main;

