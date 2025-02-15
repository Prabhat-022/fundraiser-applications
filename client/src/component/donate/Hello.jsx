import React from 'react'

const Hello = () => {
    return (
        <div>
            <div className="">
                <h1>Personal information</h1>

                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />

                    <div className="">
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />

                        <label htmlFor="">Phone Number</label>
                        <input type="number" name="" id="" />
                    </div>

                    <div className="">

                        <input type="checkbox" name="" id="" />
                        <p>Do you wish to receive Tax Exemption</p>
                    </div>

                    <div className="">
                        <label htmlFor="">Reference Code</label>
                        <input type="text" name="" id="" />
                    </div>
                    <label htmlFor="">Donation Amount</label>
                    <input type="text" name="" id="" />

                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Hello
