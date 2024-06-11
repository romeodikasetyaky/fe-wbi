// import theme style scss file
import NextTopLoader from 'nextjs-toploader';
import 'styles/theme.scss';
export const metadata = {
    title: 'Solusi Bangun Indonesia',
}

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/sbi-logo-head.png" sizes="32x32" />
            </head>
            <body className='bg-light'>
                <NextTopLoader 
                    color="#bdd646"
                />
                {children}
            </body>
        </html>
    )
}
