
export default function HomeCadastro(){
 

    return(
        <div>
            <div id="principal">
                <h1> tela de cadastro </h1>
                <form className="tela-cadastro">
                    <div className="campo">                    
                    <label htmlFor="nome">nome</label>
                        <input  id="nome" type="text" placeholder='jhon vitor...'></input><br/>

                    <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder='seu@email.com.br'></input><br/>

                    <label htmlFor="senha">senha</label>
                        <input id="senha" type="password"></input><br/>

                    <label htmlFor="numero">Numero</label>
                        <input id="numero" type="number"></input><br/>
                    </div>
                    <div className="Enviar">
                            <button>Enviar</button> <br/>
                    <label>
                        ja possui uma conta? <a href='login'><strong>faça seu login</strong></a>
                    </label>
                    </div>
                </form>
            </div>
        </div>
    )
}