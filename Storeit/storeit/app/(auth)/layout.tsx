import Image from "next/image";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen">
            <section className="bg-brand-100 p-10">
                <div>
                    <Image src="/Logo.png"
                        alt="logo"
                        width={244}
                        height={244}
                        className="h-auto" />
                </div>

                <div className="space-y-5 text-white">
                    <h1 className="h1">Manage your files the best way</h1>
                    <p className="body-1">This is a place where you can store all your documents</p>
                </div>
                <div>
                    <Image src="/Illustration.png"
                        alt="logo"
                        width={244}
                        height={244}
                        className="h-auto" />
                </div>
            </section>
            {children}
        </div>
    );
}
