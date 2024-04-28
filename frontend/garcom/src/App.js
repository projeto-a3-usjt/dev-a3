import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
		<div className="container-fluid mx-auto vh-100 d-flex border align-items-center">
				<div className="card mx-auto w-50 shadow">
					 <div className="card-header">
					    Login
					 </div>
					 <form className="p-4 row">
					    <label className="form-label"> Nome de usuário
					        <input className="form-control" name="username"></input>
					    </label>
					    <label className="form-label"> Senha
					        <input className="form-control" name="senha"></input>
					    </label>
					        <button className="w-25 m-3 btn btn-primary">Entrar</button>
			     </form>
				</div>
    </div>
  );
}
