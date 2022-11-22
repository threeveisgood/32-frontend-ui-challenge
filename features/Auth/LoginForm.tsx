import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useLogin } from "./Queries";

const LoginForm: React.FunctionComponent = () => {
  const router = useRouter();
  const switchAuthModeHandler = () => router.push("/auth/register");
  const { mutate: login, isLoading } = useLogin();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: async (values) => {
      const enteredidentifier: string = values.identifier;
      const enteredPassword: string = values.password;

      if (isLoading) {
        return;
      }

      login({
        identifier: enteredidentifier,
        password: enteredPassword,
      });
    },
  });

  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center items-center">
          <div className="w-[450px] min-h-[500px] px-8 py-5">
            <h3 className="text-2xl font-medium text-gray-200 text-center">
              로그인
            </h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-7">
                <input
                  type="text"
                  name="identifier"
                  placeholder="이메일 or 닉네임"
                  value={formik.values.identifier}
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
              <div className="flex mt-12 justify-between items-center">
                <button type="button" onClick={switchAuthModeHandler}>
                  회원가입
                </button>
                <button type="submit" className="btn-primary">
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
