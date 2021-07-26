import React from 'react'
import { useState } from 'react'
import { Response } from "./Response.js";

export const User = () => 
{
    const [ sign, setSign ] = useState( () => { return "nothing" })
    const [ day, setDay ] = useState( () => { return "nothing" })
    const [ resobj, setresobj ] = useState( () => { return "" } )
    const [ status, setStatus ] = useState( () => { return false } )
    const sendReq = async ( e ) =>
    {
        e.preventDefault()
        if ( sign !== "nothing" && day !== "nothing" ) {
            const res = await fetch( `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`, {
                method: 'POST',
                headers: { "content-type": "application/json" }
            } )
            const result = await res.json()
            setresobj( result )
            setStatus( true )
        }
        else {
            alert( "Please select sign and day!" );
        }
    }
    return (
        <>
            <div>
                <h1>Check Your Horoscope!</h1>
            </div>
            <form onSubmit={sendReq}>
                <div>
                    <select className="select-css" onChange={( e ) => setSign( e.target.value )}>
                        <option value="nothing">select your sign</option>
                        <option value="aries">Aries</option>
                        <option value="taurus">Taurus</option>
                        <option value="gemini">Gemini</option>
                        <option value="cancer">Cancer</option>
                        <option value="leo">Leo</option>
                        <option value="virgo">Virgo</option>
                        <option value="libra">Libra</option>
                        <option value="scorpio">Scorpio</option>
                        <option value="sagittarius">Sagittarius</option>
                        <option value="capricorn">Capricorn</option>
                        <option value="aquarius">Aquarius</option>
                        <option value="pisces">Pisces</option>
                    </select>
                </div>
                <div>
                    <select className="select-css" onChange={( e ) => setDay( e.target.value )}>
                        <option value="nothing">select day</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="yesterday">Yesterday</option>
                    </select>
                </div>
                <div className="check-btn">
                    <button type="submit">Check</button>
                </div>
            </form>
            {status && <Response info={resobj} />}
        </>
    )
}
