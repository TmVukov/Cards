import data from '../data.json'
import Card from '../components/card/Card'

const Screen1 = () => {
    return (
        <section>
            {data.slice(0, 3).map((item) => (
                <Card
                    key={item.id}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    description={item.description}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                    discount={item.discount}
                    age={item.age}
                    color={item.color}
                />
            ))}
        </section>
    )
}

export default Screen1
