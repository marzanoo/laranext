import FormRegister from "@/components/fragments/FormRegister";
import AuthLayout from "@/components/layouts/AuthLayout";

const RegisterView = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterView;
