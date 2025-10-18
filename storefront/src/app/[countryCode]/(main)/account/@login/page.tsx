import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Inicia Sesion",
  description: "Inicia sesion en tu cuenta de LENTES DE SOL",
}

export default function Login() {
  return <LoginTemplate />
}
