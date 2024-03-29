import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import logo from '../assets/images/logo.png';
import { LiaSquareFullSolid } from 'react-icons/lia';
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <nav className="flex bg-blue-900 justify-around h-20">
          <Image
            className="relative object-contain ml-4"
            src={logo}
            alt=""
            width={60}
            height={60}
          />
          <ul className="flex justify-end space-x-6 flex-1 p-5 text-xl font-medium leading-normal  border-red-700">
            <li className="flex flex-row">
              <a className="flex items-center" href="/">
                <LiaSquareFullSolid className="flex items-end text-xs mr-1" />
                Skills
              </a>
            </li>
            <li>
              <a className="flex items-center" href="/">
                Projetos
              </a>
            </li>
            <li>
              <a className="flex items-center" href="/">
                <LiaSquareFullSolid className="flex items-end text-xs mr-1" />
                Sobre
              </a>
            </li>
            <li>
              <a className="flex items-center" href="/">
                <LiaSquareFullSolid className="flex items-end text-xs mr-1" />
                Contato
              </a>
            </li>
          </ul>
          <button className="px-2 py-0.5 bg-blue-500 text-white rounded hover:bg-blue-700">
            Download CV
          </button>
        </nav>
        {children}
        <footer className="h-20 bg-gray-500">
          <ul className="flex justify-center p-5 font-medium leading-normal  border-red-700">
            <li className="flex flex-row">
              <a className="flex items-center" href="/">
                <FaLinkedin className="flex items-end text-4xl mr-1" />
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex items-center" href="/">
                <FaGithubSquare className="flex items-end text-4xl mr-1" />
              </a>
            </li>
            <li className="flex flex-row">
              <a className="flex items-center" href="/">
                <FaWhatsappSquare className="flex items-end text-4xl mr-1" />
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
