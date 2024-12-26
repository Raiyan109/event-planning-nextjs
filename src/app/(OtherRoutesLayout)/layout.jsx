import Header from "@/components/Header"


const CommonLayout = ({ children }) => {
    return (
        <div className="">
            <Header />
            {children}
        </div>
    )
}

export default CommonLayout 