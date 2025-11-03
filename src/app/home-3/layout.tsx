import React, { ReactNode } from 'react'
import Footer from "@/components/home3/Footer";
import Header from "@/components/home3/Header";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout