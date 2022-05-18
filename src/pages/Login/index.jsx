import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { Container } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/User";

const Login = () => {
  const BASE_URL = "https://adopet-api-cm3.herokuapp.com";

  const history = useHistory();
  const { updateUserData } = useContext(UserContext);

  const axios = require("axios").default;

  const token = JSON.parse(localStorage.getItem("token"));

  const [signinError, setSigninError] = useState("");

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
    })
      .then((response) => {
        if (response.status === 200) {
          updateUserData(response.data.user);
          const infoUser = {
            token: response.data.accessToken,
            id: response.data.user.id,
          };
          localStorage.setItem("infoUser", JSON.stringify(infoUser));
        }
        history.push("/");
      })
      .catch((err) => setSigninError(err.response.data));
  };

  return !token ? (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <Input
          orangeSchema="orangeSchema"
          label="Email"
          type="text"
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
        {signinError !== "" ? <h4>{signinError}</h4> : <></>}
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
