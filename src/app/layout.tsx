import { Metadata } from "next";
import "./globals.css";
import { HeaderApp } from "@/components/header";
import { Epilogue } from 'next/font/google';
import { ProviderReactQuery } from "@/libs/react-query/provider-react-query";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Nakai.dev",
  description: "Software Developer",
};
const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Adicione os pesos necessários
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ProviderReactQuery>
          <body className={`${epilogue.className} font-epilogue flex flex-col `}>
            <HeaderApp />
            {children}
          </body>
        </ProviderReactQuery>
      </ThemeProvider>
    </html>
  );
}