const Footer = ()=>{
    return(
        <section className="bg-secondary h-20 absolute w-full flex items-center justify-center">
            <p className="text-center text-primary text-sm">
                &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
        </section>
    )
}

export default Footer;