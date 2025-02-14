"use client";

import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function ValentineCard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100 p-6">
      <div className="max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-center text-3xl font-bold text-red-500">
          Your Valentine Card
        </h2>
        <p className="mb-6 text-center text-lg text-gray-700">
        Just a friendly reminder of how awesome you are.You always brighten up my dull days.<br /> Happy belated Valentine's Day!
        
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Image
            src="/photo1.jpg"
            alt="Valentine photo 1"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
          <Image
            src="/photo2.jpg"
            alt="Valentine photo 2"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-400"
          >
            <HeartIcon className="w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
