import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className="py-20" id='testimonials'>
            <h1 className="heading">
                Kind words from{" "}
                <span className="text-cyan-400">satisfied clients</span>
            </h1>
            <div className="flex flex-col items-center justify-center p-4 gap-16 mt-10">


                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 lg:mt-32 max-lg:mt-10'>
                    {companies.map((company) => (
                        <div key={company.id}
                            className='flex md:max-w-60 max-w-32 gap-2 my-1'

                        >
                            <img
                                src={company.img}
                                alt={company.name}
                                className="md:w-10 w-5"
                            />
                            <img
                                src={company.nameImg}
                                alt={company.name}
                                width={company.id === 4 || company.id === 5 ? 100 : 150}
                                className={`${company.id === 6 ? "md:w-40 w-36" : "md:w-24"} w-20`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Clients