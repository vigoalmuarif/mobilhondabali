
export const Heading = ({title='', desc}) => {
    return(
        <section className="container mx-auto pt-24 mb-10">
        <div className="bg-secondary-600 py-16 px-8 rounded-2xl">
          <h3 className="text-slate-50 text-center">{title}</h3>
        </div>
        <p className="mt-3 text-lg">
          {desc}
        </p>
      </section>
    )
}
