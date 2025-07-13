export default function Card() {
    return (
        <div className="card mt-3" style={{ "width": "18rem" }}>
            <img src="/assets/card1.png" className="card-img-top" alt=".." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">The text regarding the card.</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-success rounded'>
                        {
                            Array.from({ length: 5 }).map((_, ind) => {
                                return (
                                    <option key={ind + 1} value={ind + 1}> {ind + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className="h-100 m-2 bg-success rounded">
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <div className='m-2  d-inline  rounded ' > Total price </div>
                </div>
            </div>
        </div>
    )
}