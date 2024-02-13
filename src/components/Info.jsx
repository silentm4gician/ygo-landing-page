import Cards from "./Cards"
import CardsInfo from "./CardsInfo"

const Info = () => 
{
    return (
            <div className="w-4/6">
                <div className="flex justify-center p-10">
                    <img style={{maxWidth:'300px',minWidth:'100px'}} src="https://www.seekpng.com/png/full/72-724013_yu-gi-oh-day-tournament-yugioh-trading-card.png" alt="yugioh logo" />
                </div>
                <div className="p-10 bg-stone-900 rounded-lg max-w-fit">
                    <h2 className="text-2xl font-semibold ">
                        What is Yu-Gi-Oh! Trading Card Game
                    </h2>
                    <p>
                    The <span className="text-red-500">Yu-Gi-Oh!</span> Trading Card Game is a collectible card game developed and published by Konami. It's based on the fictional game of Duel Monsters (also known as Magic & Wizards in the manga) created by manga artist <span className="text-red-500">Kazuki Takahashi</span>, which appears in portions of the manga franchise Yu-Gi-Oh! and is the central plot device throughout its various anime adaptations and spinoff series.
                    </p>
                </div>
                <div className="p-2">
                    <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-transparent from-1% via-stone-950 via-50% to-transparent to-99% p-2 mx-[30%] rounded-lg mt-6">Card Types</h2>
                    <div className="lg:flex justify-center items-center">
                        <div className="pt-4 mx-auto lg:w-[40%] md:w-80">
                            <Cards/>
                        </div>
                        <div>
                            <CardsInfo/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Info