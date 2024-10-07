import Header from "./header";

const Layout = ({children}) => {
    return(
        <>
            <Header />
            <div className="mt-20 w-full h-full py-3 pb-8 px-20">
                {children}
            </div>
        </>
    )
}

export default Layout;