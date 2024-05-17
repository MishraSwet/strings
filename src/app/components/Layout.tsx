export default function Layout({ children }: any) {
    return <div className="w-full h-screen grid grid-cols-3 justify-between">
        {children}
    </div>
}