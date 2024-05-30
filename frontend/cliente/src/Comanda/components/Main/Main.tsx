import React, { ReactElement } from "react";

function Main(): ReactElement {
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
              </div>
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
            className="text"
            style={{
              fontSize: "16x",
              marginLeft: "10%",
              marginBottom: "120px",
              width: "77%",
              height: "400px",
            }}
          ></textarea>

          </div>
        </div>

    </>
  );
}
export default Main;
