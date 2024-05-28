import React, { ReactElement } from "react";

function Main(): ReactElement {
  return (
    <>
      <div>
        <div className="container fluid">
          <h1 className="titulo" style={{ marginLeft: "100px" }}>
            Calzone
          </h1>
          <div
            className="Card"
            style={{
              backgroundColor: "#F4F4F4",
            }}
          >
            <p
              className="NomeP"
              style={{
                textAlign: "left",
                fontStyle: "italic",
                marginLeft: "100px",
              }}
            >
              Delicioso calzone de presunto e queijo
            </p>
            <p
              className="mensagemRemocao"
              style={{ fontSize: "32px", marginLeft: "100px" }}
            >
              Remover Ingrediente
            </p>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "100px",
                width: "80%",
              }}
            >
              <p
                className="Queijo"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0px 10px 10px",
                  width: "95%",
                  height: "75px",
                  marginBottom: "10px",
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
                    marginTop: "-85px",
                    marginRight: "60px",
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
                marginLeft: "100px",
                width: "80%",
              }}
            >
              <p
                className="Oregano"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0px 10px 10px",
                  width: "95%",
                  height: "75px",
                  marginBottom: "10px",
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
                    marginTop: "-85px",
                    marginRight: "60px",
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
                marginLeft: "100px",
                width: "80%",
              }}
            >
              <p
                className="Presunto"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0px 10px 10px",
                  width: "95%",
                  height: "75px",
                  marginBottom: "10px",
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
                    marginTop: "-85px",
                    marginRight: "60px",
                  }}
                  id="option1"
                  className="checkbox"
                />
                <label htmlFor="option1" />
              </div>
            </div>
            <p
              className="mensagemAdiocionar"
              style={{ fontSize: "32px", marginLeft: "100px" }}
            >
              Adicionar Ingredientes
            </p>
            <div
              className="cardDentro1"
              style={{
                marginLeft: "100px",
                width: "80%",
              }}
            >
              <p
                className="Queijo"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0px 10px 10px",
                  width: "95%",
                  height: "75px",
                  marginBottom: "10px",
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
                    marginTop: "-85px",
                    marginRight: "60px",
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
                marginLeft: "100px",
                width: "80%",
              }}
            >
              <p
                className="Oregano"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0px 10px 10px",
                  width: "95%",
                  height: "75px",
                  marginBottom: "10px",
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
                    marginTop: "-85px",
                    marginRight: "60px",
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
                marginLeft: "100px",
                width: "80%",
              }}
            >
              <p
                className="Presunto"
                style={{
                  border: "1px  solid #1a1919",
                  borderRadius: "5px",
                  padding: "20px 0px 10px 10px",
                  width: "95%",
                  height: "75px",
                  marginBottom: "10px",
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
                    marginTop: "-85px",
                    marginRight: "60px",
                  }}
                  id="option1"
                  className="checkbox"
                />
              </div>
            </div>
          </div>
          <h1
            className="observacoes"
            style={{
              fontSize: "32px",
              marginLeft: "100px",
            }}
          >
            Observações:
          </h1>
          <textarea
            className="text"
            style={{
              fontSize: "16x",
              marginLeft: "100px",
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
