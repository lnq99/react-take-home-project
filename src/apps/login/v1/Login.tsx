import { LoginForm } from "@/components/login/v1/login-form"
import { RootState } from "@/store/store";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

// const LoginFormV1 = lazy(() => import('../../../components/login/v1/login-form.tsx'));
// const LoginFormV2 = lazy(() => import('@/components/login/v2/login-form.tsx'));


export default function Page() {
  const currentApp = useSelector((state: RootState) => state.config.currentApp);

  if (!currentApp) return <div>Loading...</div>;

  console.log('currentApp', currentApp);

  return (
    <div className="flex 2w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
        <Suspense fallback={<div className="container">Loading...</div>}>
          {/* <LoginFormV1 /> */}
          {/* {currentApp.version === 'v1' && <LoginFormV1 />}
          {currentApp.version === 'v2' && <LoginFormV2 />} */}
        </Suspense>

      </div>
    </div>
  )
}
