import React from "react";
import SignUpForm from "@/components/auth/signUp/SignUpForm";
import Section from "@/components/shared/Section/Section";
import TechProductContent from "./TechProductContent/TechProductContent";

const SignUp = () => {
  return (
    <div className="bg-background transition-colors">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
          {/* Left Side - Sign Up Form */}
          <SignUpForm />

          {/* Right Side - Tech Product Content */}
          <TechProductContent></TechProductContent>
        </div>
      </Section>
    </div>
  );
};

export default SignUp;
