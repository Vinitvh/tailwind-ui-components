import Head from 'next/head';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind UI Components</title>
        <meta name='description' content='Welcome to Tailwind UI Components' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='pt-20 lg:pt-[120px] pb-10 lg:pb-20'>
          <div className='container'>
            <div className='flex flex-wrap px-20'>
              <div className='w-full md:w-96 xl:w-80 px-4'>
                <div className='bg-lightGrayishCyan rounded-md'>
                  <div className='w-full h-36 bg-secondary rounded-tl-md rounded-tr-md flex justify-center items-center'>
                    <div className='py-2 px-6 bg-lightGrayishCyan rounded mx-2 w-20 h-8'></div>
                  </div>
                  <div className='p-8 sm:p-9 md:p-7 xl:p-12 text-center bg-lightGrayishCyan'>
                    <Link href='/button'>
                      <a className='text-xl text-primary'>Button</a>
                    </Link>
                    <p className='mt-1 text-sm text-cyan-700'>
                      The button element is an interactive element activated by
                      a user
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-96 xl:w-80 px-4'>
                <div className='bg-veryDarkBlue rounded-md'>
                  <div className='w-full h-36 bg-secondary rounded-tl-md rounded-tr-md flex justify-center items-center'>
                    <div className='px-4 bg-lightGrayishCyan rounded-full mx-2 w-20 h-6'></div>
                  </div>
                  <div className='p-8 sm:p-9 md:p-7 xl:p-12 text-center bg-lightGrayishCyan'>
                    <Link href='/badges'>
                      <a className='text-xl text-primary'>Badges</a>
                    </Link>
                    <p className='mt-1 text-sm text-cyan-700'>
                      Badge is a small overlapped UI item which indicates a
                      status, notification, or event
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-96 xl:w-80 px-4'>
                <div className='bg-veryDarkBlue rounded-md'>
                  <div className='w-full h-36 bg-secondary rounded-tl-md rounded-tr-md flex justify-center items-center'>
                    <div className='w-12 h-12 rounded-full bg-lightGrayishCyan flex justify-center items-center mx-2'>
                      <FaRegUserCircle className='text-4xl text-gray-200' />
                    </div>
                  </div>
                  <div className='p-8 sm:p-9 md:p-7 xl:p-12 text-center bg-lightGrayishCyan'>
                    <Link href='/avatars' className='mb-4 block'>
                      <a className='text-xl text-primary'>Avatars</a>
                    </Link>
                    <p className='mt-1 text-sm text-cyan-700'>
                      Avatar is a component used to represent a user's profile
                      picture
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-96 xl:w-80 px-4 py-8'>
                <div className='bg-veryDarkBlue rounded-md'>
                  <div className='w-full h-36 bg-secondary rounded-tl-md rounded-tr-md flex justify-center items-center'>
                    <select
                      name='fruits'
                      className='w-30 h-8 bg-lightGrayishCyan text-white rounded-md w-32'
                    ></select>
                  </div>
                  <div className='p-8 sm:p-9 md:p-7 xl:p-12 text-center bg-lightGrayishCyan'>
                    <Link href='/dropdown' className='mb-4 block'>
                      <a className='text-xl text-primary'>Dropdown</a>
                    </Link>
                    <p className='mt-1 text-sm text-cyan-700'>
                      Avatar is a component used to represent a user's profile
                      picture
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-96 xl:w-80 px-4 py-8'>
                <div className='bg-veryDarkBlue rounded-md'>
                  <div className='w-full h-36 bg-secondary rounded-tl-md rounded-tr-md flex justify-center items-center'>
                    <div className='w-40 h-8 bg-lightGrayishCyan flex items-center justify-center text-slate-400 rounded'>
                      Toast
                    </div>
                  </div>
                  <div className='p-8 sm:p-9 md:p-7 xl:p-12 text-center bg-lightGrayishCyan'>
                    <Link href='/toast' className='mb-4 block'>
                      <a className='text-xl text-primary'>Toast</a>
                    </Link>
                    <p className='mt-1 text-sm text-cyan-700'>
                      Avatar is a component used to represent a user's profile
                      picture
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-96 xl:w-80 px-4 py-8'>
                <div className='bg-veryDarkBlue rounded-md'>
                  <div className='w-full h-36 bg-secondary rounded-tl-md rounded-tr-md flex justify-center items-center'>
                    <div>
                      <ul className='flex items-center justify-center'>
                        <li className='text-slate-500'>
                          Home
                          <span className='text-slate-500'>{`>`}</span>
                        </li>
                        <li className='text-slate-500'>
                          profile <span className='text-slate-500'>{`>`}</span>
                        </li>
                        <li className='text-slate-500'>create profile</li>
                      </ul>
                    </div>
                  </div>
                  <div className='p-8 sm:p-9 md:p-7 xl:p-12 text-center bg-lightGrayishCyan'>
                    <Link href='/breadcrumbs' className='mb-4 block'>
                      <a className='text-xl text-primary'>Breadcrumbs</a>
                    </Link>
                    <p className='mt-1 text-sm text-cyan-700'>
                      Avatar is a component used to represent a user's profile
                      picture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
