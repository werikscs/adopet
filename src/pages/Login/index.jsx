import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { Container } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const axios = require("axios").default;
  const BASE_URL = "http://localhost:3001";
  const token = JSON.parse(localStorage.getItem("token"));

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: `${BASE_URL}/login`,
      data: {
        email: `${data.email}`,
        password: `${data.password}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
      }
      history.push("/");
    });
  };

  return !token ? (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <Input
          orangeSchema="orangeSchema"
          label="Email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          register={register}
        />

        <Input
          orangeSchema="orangeSchema"
          label="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          register={register}
        />

        <Button type="submit">Entrar</Button>
        <h3>
          Ainda não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </h3>
      </form>
    </Container>
  ) : (
    history.push("/")
  );
};

export default Login;
