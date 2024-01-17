import Card from './card.js'
import Penné from './images/pennéThumb.jpg'
import Bruschetta from './images/bruschettaThumb.jpg'
import GreekSalad from './images/greekSaladThumb.jpg'

export const Highlights = () => {
    return <div className="highlights">
            <h2>Specials<button className='onlineMenu'>Online Menu</button></h2>
            

        <article className="specials">
        <Card 
            imageSrc={Penné}
            title="Penné    $4"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel inventore eligendi esse nihil laborum neque maiores perspiciatis illo, officia sit, animi corporis optio ipsum accusamus suscipit. Veniam minus perspiciatis dignissimos?"
        />
        <Card 
            imageSrc={Bruschetta}
            title="Bruschetta   $1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident itaque delectus non aspernatur iure expedita alias quos voluptatem voluptate fuga suscipit repellendus, beatae corporis nihil, assumenda hic ducimus pariatur."
        />
        <Card
            imageSrc={GreekSalad}
            title="Greek Salad $2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque provident ea accusamus asperiores iusto, non eos voluptatibus sequi amet impedit architecto ullam, exercitationem in aliquam iste optio fugit laboriosam!"
        />
        </article>
    </div>
}