import Link from "next/link"

export const TestDrive = () => {
    return(
        <section className="bg-primary-200">
        <div className="container flex flex-wrap justify-center md:justify-between py-8 gap-y-6">
          <h3 className="text-slate-800">
            Nikmati berkendara dengan mobil impian
          </h3>
          <Link href="https://wa.me/6281236011054"  className="btnPrimary">
            Test drive
          </Link>
        </div>
      </section>
    )
}
