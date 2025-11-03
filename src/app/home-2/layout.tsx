import React, { ReactNode } from 'react'
import Footer from "@/components/home2/Footer";
import Header from "@/components/home2/Header";

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