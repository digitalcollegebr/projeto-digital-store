import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import face from "../../assets/fb.png";
import gmail from "../../assets/gm.png";
import ButtonCTA from "../../components/ButtonCTA";
import { AuthContext } from "../../context/auth/AuthContext";
import {
    Content,
    ContentImage,
    Image,
    SectionLogin
} from "./style";
import tenisCosta from "/melvin-buezo-back.png";
import tenisFrente from "/melvin-buezo-front.png";

const Login = () => {
    const { setLogado } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ email: "", senha: "" });
    const navigate = useNavigate();
    
    const validarCampos = () => {
        let valido = true;
        const novosErros = { email: "", senha: "" };

        if (!email) {
            novosErros.email = "E-mail não pode ficar vazio";
            valido = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            novosErros.email = "Digite um e-mail válido.";
            valido = false;
        }

        if (!senha) {
            novosErros.senha = "Senha inválida";
            valido = false;
        } else if (senha.length < 6) {
            novosErros.senha = "A senha deve ter no mínimo 6 caracteres.";
            valido = false;
        }

        setErros(novosErros);

        return valido;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const camposValidos = validarCampos();
        if (!camposValidos) return;

        setLogado(true);
        navigate("/");
    };

    return (
        <SectionLogin activeTitle={false}>
            <Content className="content-login">
                <form>
                    <div className="title-box-form">
                        <h2 className="title-form-login">Acesse sua conta</h2>
                        <p className="subtitle-form-login">Novo cliente? Então registre-se <Link to="/account/register">aqui</Link></p>
                    </div>
                    <div className="inputs-form">
                        <fieldset>
                            <label htmlFor="email">Login *</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Insira seu login ou email"
                                onChange={(e) => {
                                    setEmail(e.target.value);

                                    if (erros.email) {
                                        setErros({ ...erros, email: "" });
                                    }
                                }}
                            />
                            <span className="error-input">{erros.email}</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="senha">Senha *</label>
                            <input 
                                type="password" 
                                name="senha" 
                                id="senha" 
                                placeholder="Insira sua senha"
                                onChange={(e) => {
                                    setSenha(e.target.value);

                                    if (erros.senha) {
                                        setErros({ ...erros, senha: "" });
                                    }
                                }}
                            />
                            <span className="error-input">{erros.senha}</span>
                        </fieldset>
                    </div>
                    <Link to="/account/forgot-password">Esqueci minha senha</Link>
                    <ButtonCTA children="Acessar Conta" funcao={handleLogin} />
                    <div className="others-login">
                        <span className="others-methods">Ou faça login com</span>
                        <div className="methods-login">
                            <Link>
                                <img src={gmail} alt="Gmail" />
                            </Link>
                            <Link>
                                <img src={face} alt="Facebook" />
                            </Link>
                        </div>
                    </div>
                </form>
            </Content>
            <ContentImage className="picture-content">
                <div className="up">
                    <Image className="login-picture" src={tenisFrente} alt="Tênis frente" />
                </div>
                <div className="down">
                    <Image className="login-picture" src={tenisCosta} alt="Tênis costa" />
                </div>
            </ContentImage>
        </SectionLogin>
    );
}
 
export default Login;