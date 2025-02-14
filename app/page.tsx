// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import styles from '@/app/ui/home.module.css';
// import { lusitana } from '@/app/ui/fonts';
// import Image from 'next/image';

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         <AcmeLogo /> 

//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//         <div className={styles.shape} />
//         <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
//             <strong>Welcome to Acme.</strong> This is the example for the{' '}
//             <a href="https://nextjs.org/learn/" className="text-blue-500">
//               Next.js Learn Course
//             </a>
//             , brought to you by Vercel.
            
//           </p>
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
//           </Link>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/* Add Hero Images Here */}
//       <Image
//       src="/hero-desktop.png"
//       width={1000}
//       height={760}
//       className="hidden md:block"
//       alt="Screenshots of the dashboard project showing desktop version"
//       /> 

//        <Image
//       src="/hero-mobile.png"
//       width={560}
//       height={620}
//       className="block md:hidden"
//       alt="Screenshots of the dashboard project showing mobile version"
//       /> 


//         </div>
//       </div>
//     </main>
//   );
// }


"use client";

import { HeartIcon, GiftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const FloatingHearts = () => {
  // Generate an array of hearts with random positions and animation timing
  const hearts = Array.from({ length: 15 }).map((_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute text-red-500 text-2xl animate-float"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col p-6 bg-gradient-to-b from-pink-200 via-red-200 to-pink-300">
      {/* Floating hearts in the background */}
      <FloatingHearts />

      {/* Header Section */}
      <div className="flex h-20 shrink-0 items-center justify-center rounded-lg bg-red-500 p-4 shadow-lg md:h-52">
        <h3 className="text-3xl font-extrabold text-white md:text-5xl">
          💌 Happy Valentine's Day! 💌
        </h3>
      </div>

      {/* Main Content */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        {/* Valentine Message */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white/80 px-6 py-10 shadow-md md:w-2/5 md:px-20">
          <div className="flex justify-center">
            <HeartIcon className="h-12 w-12 text-red-500" />
          </div>
          <p className="text-center text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Hello, Wanjiku! 💕</strong> <br />
            I made this page to celebrate you and let you know how special you are.
            <br />
             I know I'm it's almost over but....
            <br />
            Every day is brighter with you, and today is all about celebrating you. 🌹
            <br />
            Najua umejam tuh sana but everything is gonna be fine !.
          </p>
          <Link
            href="/valentine-card"
            className="flex items-center justify-center gap-3 self-center rounded-full bg-red-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-400 md:text-base"
          >
            <GiftIcon className="w-5 md:w-6" />
            <span>Open Your Valentine ❤️</span>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/valentine-hero.png"
            width={800}
            height={600}
            className="rounded-xl shadow-lg"
            alt="A romantic Valentine-themed illustration with hearts and flowers"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 flex justify-center gap-4 text-sm text-gray-700">
        <p>
          Made with ❤️ by <strong>Yoooow!!!!!! </strong>
        </p>
        <HeartIcon className="h-4 w-4 text-red-500" />
      </footer>

      {/* Floating hearts animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </main>
  );
}
