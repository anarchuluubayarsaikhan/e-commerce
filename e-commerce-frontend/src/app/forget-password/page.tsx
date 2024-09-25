"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Confirm } from "./Confirm";
import { NewPassword } from "./NewPassword";
import { ForgetPassword } from "./ForgetPassword";
import { ClientHeader } from "@/components/client-header";

const Forget = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((_prevState) => _prevState + 1);
  };

  const forgetPasswordSubmit = () => {
    nextStep();
  };

  const confirmSubmit = () => {
    nextStep();
  };

  const newPasswordSubmit = () => {
    router.push("/");
  };

  const steps = [
    // Нууц үг сэргээх
    <ForgetPassword submit={forgetPasswordSubmit} />,

    //Баталгаажуулах
    <Confirm submit={confirmSubmit} />,

    //Шинэ нууц үг
    <NewPassword submit={newPasswordSubmit} />,
  ];

  return (
    <main className="">
      <ClientHeader />
      {steps[currentStep]}
    </main>
  );
};

export default Forget;
