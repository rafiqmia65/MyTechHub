import LoginForm from "@/components/auth/login/LoginForm";
import React from "react";
import TechProductContent from "./TechProductContent/TechProductContent";
import Section from "@/components/shared/Section/Section";

const Login = () => {
  return (
    <div className="bg-background transition-colors">
      <Section className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
        {/* Left Side - Login Form */}
        <LoginForm />

        {/* Right Side - Tech Product Content */}
        <TechProductContent></TechProductContent>
      </Section>
    </div>
  );
};

export default Login;
