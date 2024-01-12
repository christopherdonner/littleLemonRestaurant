import Card from './card.js'
import Penné from './images/pennéThumb.jpg'
import Bruschetta from './images/bruschettaThumb.jpg'

export const Highlights = () => {
    return <div className="highlights">
            <h2>Specials</h2>
            <button className='onlineMenu'>Online Menu</button>

        <article className="specials">
        <Card 
            imageSrc={Penné}
            title="Penné    $4"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel inventore eligendi esse nihil laborum neque maiores perspiciatis illo, officia sit, animi corporis optio ipsum accusamus suscipit. Veniam minus perspiciatis dignissimos?"
        />
        <Card 
            imageSrc={Bruschetta}
            title="Bruschetta   $2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident itaque delectus non aspernatur iure expedita alias quos voluptatem voluptate fuga suscipit repellendus, beatae corporis nihil, assumenda hic ducimus pariatur."
        />
        </article>
    </div>
}