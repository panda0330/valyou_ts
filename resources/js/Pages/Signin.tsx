import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@mui/material';

export default function Signin() {
  return (
    <MainLayout>
      <div className="flex flex-wrap items-center my-10">
        <div className="w-full md:w-1/2 md:pr-10">
          <div className="p-8">
            <p className="text-4xl font-bold">
              Welcome to <span className="text-pink-gradient">Valyou X</span>
            </p>
            <p className="text-lg font-medium text-rose-800">
              Be the first to know when we launch!
            </p>
            <div className="ms_desc">
              If you’re interested in participating as an early adopter, you can
              fill out the survey and apply to get exclusive access. We have
              over 50,000+ in our email list would you like to skip the queue?
            </div>
            <br />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <p className="text-center text-lg font-bold sm:text-left">
            Sign in to continue to Valyou X
          </p>
          <form action="#">
            <input
              className="my-8 block w-full rounded-sm border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Email address"
            />
            <input
              className="my-8 block w-full rounded-sm border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Password"
            />
            <p className="mb-4 text-center text-xs font-semibold text-slate-600">
              Forgot your password?{' '}
              <a className="color-primary" href="/reset-password">
                Reset Here
              </a>
            </p>
            <Button
              variant="contained"
              className="bg-primary mb-10 mt-6 w-full rounded-md py-2 capitalize text-white shadow-lg"
            >
              login
            </Button>
            <p className="text-center text-slate-500">
              Don't have an Account?{' '}
              <a className="color-primary font-semibold" href="/signup">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
