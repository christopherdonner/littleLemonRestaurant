import {About} from "./about.js"
import {Hero} from "./heroSection.js"
import {Highlights} from "./highlights.js"
import {Testimonials} from "./testimonials.js"

export const Main = ()=>{

    return <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
    </main>
}