import Head from 'next/head'
import '@/app/globals.css' // Global styles
import Header from '@/components/universal/header'
import Footer from '@/components/universal/footer'

const MealPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Meal Selection</title>
        <meta name="description" content="Choose your meal for today." />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="w-300 h-500 bg-white shadow-md flex items-center justify-center">
            {/* Content goes here */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MealPage