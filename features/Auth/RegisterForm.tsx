import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useRegister } from "./Queries";

const RegisterForm: React.FunctionComponent = () => {
  const router = useRouter();
  const switchAuthModeHandler = () => router.push("/auth/login");

  const { mutate: register, isLoading } = useRegister();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    onSubmit: async (values) => {
      const enteredEmail: string = values.email;
      const enteredPassword: string = values.password;
      const enteredUsername: string = values.username;

      if (isLoading) {
        return;
      }

      register(
        {
          email: enteredEmail,
          password: enteredPassword,
          username: enteredUsername,
        },
        {
          onSuccess: () => {
            router.push("/auth/login");
          },
        }
      );
    },
  });

  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <div className="w-[450px] min-h-[500px] px-8 py-5">
            <h3 className="text-2xl font-medium text-gray-200 text-center">
              회원가입
            </h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-7">
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-700 px-4 py-2 rounded text-slate-300 outline-0 border-transparent border-2 focus:border-gray-400"
                />
              </div>
              <div className="mt-7">
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-700 px-4 py-2 rounded text-slate-300 outline-0 border-transparent border-2 focus:border-gray-400"
                />
              </div>
              <div className="mt-7">
                <input
                  type="text"
                  name="username"
                  placeholder="닉네임"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  className="w-full bg-gray-700 px-4 py-2 rounded text-slate-300 outline-0 border-transparent border-2 focus:border-gray-400"
                />
              </div>
              <div className="flex mt-12 justify-between items-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  로그인
                </button>
                <button type="submit" className="btn-primary">
                  회원가입
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
