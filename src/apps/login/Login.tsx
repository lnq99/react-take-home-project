import { Suspense, lazy } from "react"

import { RootState } from "@/store/store"
import { useSelector } from "react-redux"

const LoginFormV1 = lazy(() =>
  import('@/components/login/v1/login-form.tsx')
    .then((module) => ({ default: module.LoginForm }))
)

const LoginFormV2 = lazy(() =>
  import('@/components/login/v2/login-form.tsx')
    .then((module) => ({ default: module.LoginForm }))
)


export default function Page() {
  const currentApp = useSelector((state: RootState) => state.config.currentApp)
  if (!currentApp) return <div>Loading...</div>

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10">
      <Suspense fallback={<div className="container">Loading...</div>}>
        {currentApp.version === 'v1' &&
          <div className="w-full max-w-sm">
            <LoginFormV1 />
          </div>
        }
        {currentApp.version === 'v2' &&
          <div className="w-full max-w-sm md:max-w-3xl">
            <LoginFormV2 />
          </div>
        }
      </Suspense>
    </div>
  )
}
