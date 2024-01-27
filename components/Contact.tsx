import React from 'react'

const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
        <p className='font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide'>
            Contact
        </p>
        <h2 className='font-titleFont text-5xl font-semibold'>You can send an email</h2>
        <p className='max-w-[600px] text-center text-textDark'>
            Feel free to contact me for any questions, collaborations or just to say hi. 
            My inbox is always open. When you send me an email, I'll try my best to get back to you.
        </p>
        <a href="mailtoo:jasonwijaya2@gmail.com">
            <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
                Email Me!
            </button>
        </a>
    </section>
  )
}

export default Contact