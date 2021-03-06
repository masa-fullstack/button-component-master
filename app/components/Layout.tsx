import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'Default title' }) => {
  return (
    <div className="flex justify-center item-center flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className="font-montserrat container mx-auto xl:px-40 px-5 mt-5 flex flex-1 justify-center item-center flex-col text-2xl">
          {title}
        </div>
      </header>
      <main className="font-montserrat container mx-auto xl:px-40 px-5 mt-5 flex flex-1 justify-center item-center flex-col mb-10">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center item-center text-gray-400 mb-10">
        <div className="w-2/6 border-t text-center pt-5">
          created by masa @ DevChallenges.io
        </div>
      </footer>
    </div>
  )
}

export default Layout
