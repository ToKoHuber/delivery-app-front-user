"use client";

import { useState } from "react";
import { CreateEmail } from "../_components/CreateEmail";
import CreatePass from "../_components/CreatePassword";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const FormSteps = [CreateEmail, CreatePass][currentStep];

  return (
    <FormSteps
      setEmail={setEmail}
      setPassword={setPassword}
      email={email}
      onClick={() => {
        setCurrentStep(currentStep + 1);
      }}
      goBack={() => {
        setCurrentStep(currentStep - 1);
      }}
    />
  );
}
