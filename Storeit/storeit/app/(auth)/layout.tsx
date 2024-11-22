import Image from "next/image";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen">
            <section className="hidden w-1/2 items-center justify-center bg-brand-100 p-10 lg:flex xl:w-2/5">
                <div className=" flex max-h-[800px] flex-col justify-center space-y-12">
                    <div >
                        <Image src="/Logo.png"
                            alt="logo"
                            width={244}
                            height={244}
                            className="h-auto" />
                    </div>

                    <div className="space-y-5 text-white">
                        <h1 className=""> Manage your files the best way</h1>
                        <p className="body-1">This is a place where you can store all your documents</p>
                    </div>
                    <div>
                        <Image src="/Illustration.png"
                            alt="logo"
                            width={342}
                            height={342}
                            className="transition-all hover:rotate-2 hover:scale-105" />
                    </div>
                </div>
            </section>

            <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
                <div className="mb-16 lg:hidden">
                    <Image
                        src="/Logo.png"
                        alt="logo"
                        width={224}
                        height={82}
                        className="h-auto w-[200px] lg:w-[250px]"
                    />
                </div>
                {children}
            </section>
        </div>
    );
}
