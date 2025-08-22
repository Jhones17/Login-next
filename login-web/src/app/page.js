
export default function home(){
  return(
    <div>
      <div id="principal">
      <h1>Tela de login</h1>
      <form>
          <label>Email</label>
          <input type="text" placeholder="seu@email.com"></input> <br></br>
          <label>senha</label>
          <input type="password"></input> 
          <br></br><button>Entrar</button> <br></br>
          <a href="esqueci">Esqueci a senha</a><br></br>
          <label>não tem uma conta? <a href="cadrastro">cadastre-se</a></label>
      </form>
      </div>
    </div>
  )
}