import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain hero">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex-col flex justify-center gap-8">
          <h1 className="h1-bold">
            Say Hi to Your Friends! By joining Our Trendiest Events App
          </h1>
          <p className="p-regular-20 md:p-regular-24">
            Not only typical book and learn, you will also get to celebrate by getting 3200+ mentors 
            from all over the world with our strong global community.
          </p>
          <Button size='lg' asChild className='button w-full sm:fit bg'>
            <Link href='#events'>
              Explore Now 
            </Link>
          </Button>
        </div>
        <Image src='/assets/images/hero.png' alt='hero'
        width={1000}
        height={1000}
        className='max-h-[70vh] object-contain object-center
         2xl:max-h-[50vh]'/>
      </div>
    </section>

    <section id='events' className='wrapper my-8
     flex flex-col gap-8 md:gap-12'>
      <h2 className="h2-bold px-3">
        Trusted by <br/> Thousands of events and parties!
      </h2>
      <div className="flex-col flex w-full gap-5 px-3 md:flex-row">
        Search
        CategoryFilter
      </div>
     </section>
    </>
  )
}
