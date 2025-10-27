

 import type { Metadata } from "next";
 import { Urbanist } from "next/font/google";
 import "./globals.css";
 import { ThemeProvider } from "@/components/theme-provider";
 const urbanist = Urbanist({ subsets: ["latin"] });
 export const metadata: Metadata = {
   title: "¡Hola soy Lucas Cid! | PortafolioWeb",
   description: "Landing Page by Lucas Cid",
   icons: {
     icon: "./favicon.png", // 👈 aquí agregas tu favicon
   },
 };
 export default function RootLayout({
   children,
 }: Readonly<{
   children: React.ReactNode;
 }>) {
   return (
     <html lang="es">
       <head>
         <link rel="icon" href="/favicon.png" type="image/png" />
       </head>
       <body className={urbanist.className}>
         <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
         >
           {children}
         </ThemeProvider>
       </body>
     </html>
   );
 }








// import type { Metadata } from "next";
// import { Urbanist } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";

// const urbanist = Urbanist({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "¡Hola soy Lucas Cid! | PortafolioWeb",
//   description: "Landing Page by Lucas Cid",
//   icons: {
//     icon: "/favicon.png", // ❌ QUITA el "./" y usa "/"
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="es">
      
//       <body className={urbanist.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="es">
//       <head>
//         <link rel="icon" href="/favicon.png" type="image/png" />
//       </head>
//       <body className={urbanist.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }







