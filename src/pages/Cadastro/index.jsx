import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import * as yup from "yup";
import { Container } from "./style.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";

const Cadastro = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const history = useHistory();
  const axios = require("axios").default;
  const BASE_URL = "http://localhost:3001/";

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Mínimo 3 caracteres"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo 6 caracteres")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/,
        "Senha deve conter uma letra maiúscula, um número e um símbolo"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem"),
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
      url: `${BASE_URL}/register`,
      data: {
        email: `${data.email}`,
        password: `${data.password}`,
        name: `${data.name}`,
        phone: "123456789",
        avatar: `${data.avatar}`,
        type: `${data.type}`,
      },
    }).then((response) => {
      response.status === 201 ? history.push("/login") : console.log(response);
    });
  };

  return !token ? (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro</h1>
        <Input
          orangeSchema="orangeSchema"
          label="Nome*"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          error={errors.name?.message}
          register={register}
        />
        <Input
          orangeSchema="orangeSchema"
          label="Email*"
          type="email"
          name="email"
          placeholder="Digite seu email"
          error={errors.email?.message}
          register={register}
        />
        <Input
          orangeSchema="orangeSchema"
          label="Senha*"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          error={errors.password?.message}
          register={register}
        />
        <Input
          orangeSchema="orangeSchema"
          label="Confirme sua senha*"
          type="password"
          placeholder="Digite a senha novamente"
          name="confirmPassword"
          error={errors.confirmPassword?.message}
          register={register}
        />
        <Input
          orangeSchema="orangeSchema"
          label="Avatar"
          type="avatar"
          name="avatar"
          placeholder="URL da imagem"
          error={errors.avatar?.message}
          register={register}
        />
        <label htmlFor="type">Tipo</label>

        <Select name="type" register={register} orangeSchema="orangeSchema" />
        <Button type="submit">Registrar</Button>
        <h3>
          Já possui conta? <Link to="/login">Faça login</Link>
        </h3>
        <p>*Campos obrigatórios</p>
      </form>
    </Container>
  ) : (
    history.push("/")
  );
};

export default Cadastro;
